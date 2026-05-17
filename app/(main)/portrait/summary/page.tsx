import { CandidateProfileHeader } from '@/components/analyze/features/ProfileSummaryView/CandidateProfileHeader'
import ProfileTabsView from '@/components/analyze/features/ProfileSummaryView/ProfileTabsView'
import { StatusBadge } from '@/components/analyze/features/ProfileSummaryView/StatusBadge'
import { ArrowLeft } from 'lucide-react'

export default function SummaryPage() {
    return (
        <div className='space-y-9'>
            <div className="flex flex-col gap-y-6">
                <StatusBadge />
                <CandidateProfileHeader
                    score={7}
                    name="Лев Корнеев"
                    position="Руководитель производства"
                    uploadDate="пн 15 дек 12:14"
                />
                {/* Navigation */}
                <div className='space-y-7.25'>
                    <div className='flex gap-x-2 font-manrope font-medium text-[14px] items-center text-[#919999] cursor-pointer hover:text-[#323333] transition-colors w-fit'>
                        <ArrowLeft size={18} />
                        <span>Назад к списку кандидатов</span>
                    </div>
                    {/* Intro Text */}
                    <p className='font-manrope font-normal text-[18px] leading-5.5 text-black'>
                        Ознакомьтесь с результатами анализа кандидата: мы выделили сильные стороны, риски и степень соответствия вакансии.
                    </p>
                </div>
            </div>

            <ProfileTabsView />
        </div>
    )
}