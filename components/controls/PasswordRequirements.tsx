"use client"

import * as React from "react"
import { Circle, CheckCircle2, CircleCheckBig } from "lucide-react"
import { cn } from "@/lib/utils"

interface RequirementProps {
  label: string;
  isMet: boolean;
}

const RequirementItem = ({ label, isMet }: RequirementProps) => (
  <div className="flex items-center gap-2 transition-colors duration-200">
    {isMet ? (
      <CircleCheckBig className="w-4 h-4 text-primary" />
    ) : (
      <Circle className="w-4 h-4 text-inactive-input" />
    )}
    <span className={cn(
      "font-open-sans text-[14px] leading-5 font-normal",
      isMet ? "text-primary" : "text-inactive-input"
    )}>
      {label}
    </span>
  </div>
);

export const PasswordRequirements = ({ password }: { password: string }) => {
  // Логика проверок (Regex)
  const requirements = [
    {
      label: "Не менее 8 символов",
      isMet: password.length >= 8,
    },
    {
      label: "Не менее одной заглавной и строчной буквы",
      isMet: /[a-z]/.test(password) && /[A-Z]/.test(password),
    },
    {
      label: "Не менее одной цифры",
      isMet: /\d/.test(password),
    },
    {
      label: "Не менее одного спецсимвола (! ? @ # и др.)",
      isMet: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <div className="flex flex-col gap-2 mt-2">
      <p className="font-open-sans text-[14px] leading-[20px] text-[#919999] mb-1">
        Пароль должен содержать:
      </p>
      {requirements.map((req, index) => (
        <RequirementItem key={index} label={req.label} isMet={req.isMet} />
      ))}
    </div>
  );
};