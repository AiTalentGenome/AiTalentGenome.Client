import { Button } from '@/components/controls/Button'
import SubHeader from '@/components/custom/Headers/SubHeader'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import React from 'react'
import { OnboardingStep } from './OnboardingStep'

export default function AnalyzeCriteriaView() {
    return (
        <div className="px-4">
            <SubHeader title="Критерии анализа" className="mb-6" />

            <div className="space-y-4 mb-6">
                <label className="block font-manrope text-[14px] font-semibold leading-4.5 text-[#333333]">
                    Количество финально отобранных кандидатов
                </label>
                <input
                    type="text"
                    placeholder="от 1 до 99"
                    className={cn(
                        "block w-24 rounded-lg",
                        "px-3.5 py-4.25 bg-white",
                        "placeholder:font-manrope placeholder:font-medium placeholder:text-[14px] placeholder:leading-4.5 placeholder:text-text-gray",
                        "outline-none focus:border-[#24B3AC] transition-all",
                        "text-center font-manrope font-medium text-[14px] leading-4.5 align-middle"
                    )}
                />
            </div>

            <div className="flex items-center gap-2.5 mb-4">
                <Switch
                    size="default"
                    onCheckedChange={(checked) => console.log("Критерии включены:", checked)}
                    className="w-11 h-6"
                />
                <label className="font-manrope font-semibold text-[16px] leading-4.5 space-x-4 text-[#333333]">
                    Дополнительные критерии
                </label>
            </div>

            <p className="font-manrope font-medium text-[14px] leading-4.5 space-x-4 mb-4">
                Эти критерии повышают приоритет и влияют на попадание кандидатов в топ
            </p>

            <div className="w-full flex flex-col gap-y-6">
                <textarea
                    placeholder='Пример: английский B2+, опыт работы в горнодобывающих компаниях, не менее 1 года в среднем на местах работ'
                    className={cn(
                        "w-full h-32 block resize-none px-4 py-3",
                        "bg-white border border-[#EBEBEB] rounded-2xl",
                        "font-manrope text-[14px] leading-relaxed text-[#1a1a1a]",
                        "placeholder:font-manrope placeholder:font-medium placeholder:text-[14px] placeholder:leading-4.5 placeholder:text-text-gray",
                        "font-manrope font-medium text-[14px] leading-4.5",
                        "outline-none transition-all overflow-hidden"
                    )}
                />
                <OnboardingStep step={3} text={'Начните анализ'} offset={{
                    x: -65,
                    y: -80
                }}>
                    <Button variant="accent" className='h-14'>Начать анализ</Button>
                </OnboardingStep>
                
            </div>
        </div>
    )
}
