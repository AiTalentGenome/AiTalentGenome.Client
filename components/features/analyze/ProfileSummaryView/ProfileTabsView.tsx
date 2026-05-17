"use client"

import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import SummaryView from './SummaryView'
import PsychologicalPortrait from './PsychologicalPortrait'

type ProfileTab = 'summary' | 'psychological'

export default function ProfileTabsView() {
    const [profileTab, setProfileTab] = useState<ProfileTab>("summary")
    return (
        <div className='space-y-8'>
            <div className='flex'> {/* Тонкая линия под всем табом для стиля */}
                <div
                    onClick={() => setProfileTab("summary")}
                    className={cn(
                        'px-4 pb-3 font-manrope font-semibold text-[18px] leading-5.5 w-fit cursor-pointer transition-all duration-300',
                        profileTab === "summary"
                            ? 'border-b-[3px] border-b-[#9978C4] text-black'
                            : 'text-[#606367] hover:text-[#1a1a1a] border-b-[3px] border-b-transparent'
                    )}
                >
                    Общая сводка
                </div>

                <div
                    onClick={() => setProfileTab("psychological")}
                    className={cn(
                        'px-4 pb-3 font-manrope font-semibold text-[18px] leading-5.5 w-fit cursor-pointer transition-all duration-300',
                        profileTab === "psychological"
                            ? 'border-b-[3px] border-b-[#9978C4] text-black'
                            : 'text-[#606367] hover:text-[#1a1a1a] border-b-[3px] border-b-transparent'
                    )}
                >
                    Психологический портрет
                </div>
            </div>
            {
                profileTab === "summary" ? <SummaryView /> : <PsychologicalPortrait />
            }
        </div>
    )
}
