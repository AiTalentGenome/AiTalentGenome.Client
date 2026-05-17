"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useOnboardingStore } from '@/store/useOnboardingStore'
import { HintBubble } from '@/components/controls/HintBubble'

interface OnboardingStepProps {
  step: number;
  text: string;
  children: React.ReactNode;
  offset?: { x?: number; y?: number };
}

export const OnboardingStep = ({ 
  step, 
  text, 
  children, 
  offset 
}: OnboardingStepProps) => {
  const { currentStep, isActive } = useOnboardingStore()
  const targetRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ top: 0, left: 0 })

  const isCurrent = isActive && currentStep === step;

  // 1. Деструктуризируем значения, чтобы useCallback следил за числами, а не за объектом
  const offsetX = offset?.x ?? 0;
  const offsetY = offset?.y ?? -12;

  const updatePosition = useCallback(() => {
    if (isCurrent && targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      
      // Используем только примитивы здесь
      setCoords({
        top: rect.top + offsetY, 
        left: rect.left + rect.width / 2 + offsetX
      });
    }
  }, [isCurrent, offsetX, offsetY]); // <--- Теперь тут числа, цикл разорван!

  useEffect(() => {
    if (!isCurrent) return;

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [updatePosition, isCurrent]);

  return (
    <div ref={targetRef} className="relative w-fit">
      {children}
      
      {isCurrent && (
        <HintBubble 
          text={text}
          isActive={true}
          position={{ 
            position: 'fixed',
            top: `${coords.top}px`, 
            left: `${coords.left}px`,
            transform: 'translate(-50%, -100%)'
          }}
        />
      )}
    </div>
  )
}