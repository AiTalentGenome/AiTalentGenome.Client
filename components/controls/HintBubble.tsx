// components/controls/HintBubble.tsx
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface HintBubbleProps {
  text: string;
  // Используем React.CSSProperties вместо ручного перечисления
  position: React.CSSProperties; 
  isActive: boolean;
}

export const HintBubble = ({ text, position, isActive }: HintBubbleProps) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          style={position} // Теперь TS не будет ругаться на transform
          className="absolute z-[100] pointer-events-none"
        >
          <div className="relative bg-white text-text-default-black p-4 rounded-[16px] shadow-2xl max-w-[180px]">
            <p className="font-manrope font-semibold text-[14px] leading-5 text-center">
              {text}
            </p>

            {/* Хвостик подсказки */}
            <div className={cn(
              "absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0",
              "border-l-37 border-l-transparent",
              "border-r-37 border-r-transparent",
              "border-t-25 border-t-white"
            )} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}