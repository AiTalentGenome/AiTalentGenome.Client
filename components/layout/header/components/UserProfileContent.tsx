// components/layout/header/UserProfileContent.tsx
"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Pencil, Building, User, Mail, FileText, ChevronDown, Languages, CheckSquare } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Утилита для создания инпутов с иконками, как в макете
interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

const IconInput = ({ icon, ...props }: IconInputProps) => (
  <div className="relative">
    <Input 
      {...props} 
      className="pl-10 h-12 border-none bg-[#F2F4F7] text-[#1a1a1a] font-manrope rounded-xl focus-visible:ring-1 focus-visible:ring-[#2494B3]/50" 
    />
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#919999]">
      {icon}
    </div>
    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#919999] hover:text-[#1a1a1a]">
        <Pencil className="w-4 h-4" />
    </button>
  </div>
);

export function UserProfileContent() {
  return (
    <div className="flex flex-col h-full font-manrope">
      
    </div>
  )
}