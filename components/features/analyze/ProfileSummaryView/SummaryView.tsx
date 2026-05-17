import React from 'react'
import { SummaryCard } from './SummaryCard'
import { resultData, swotData1, swotData2, swotData3, swotData4, swotData5 } from '@/lib/summary-data-config'


export default function SummaryView() {
    return (
        <div className='space-y-8'>
            <SummaryCard
                mainTitle="Анализ соответствия кандидата требованиям вакансии"
                sections={swotData1}
                conclusion="Кандидат сильный управленец, но ему потребуется время на восстановление навыков работы с чертежами и адаптацию к специфике резинотехнического производства"
            />
            <SummaryCard
                mainTitle="Краткое резюме интервью (саммари)"
                sections={swotData2}
                conclusion="Кандидат силён в управлении людьми, организации производства и ремонтов, но ему потребуется адаптация в области чертежей и специфики резинотехнических процессов."
            />
            <SummaryCard
                mainTitle="Анализ ценностного совпадения"
                sections={swotData3}
                conclusion="Кандидат сильный управленец, требовательный, дисциплинированный, но не склонен к гибкости в управлении."
            />
            <SummaryCard
                mainTitle="Вывод по управленческому стилю и soft skills"
                sections={swotData4}
                conclusion="Кандидат сильный управленец, требовательный, дисциплинированный, но не склонен к гибкости в управлении."
            />

            <SummaryCard
                mainTitle="SWOT-анализ кандидата"
                sections={swotData5}
                conclusion="Кандидат сильный управленец, требовательный, дисциплинированный, но не склонен к гибкости в управлении."
            />

            <SummaryCard
                summaryConculsionType='summary'
                mainTitle="Общий вывод"
                sections={resultData}
                conclusion="Кандидат подходит для роли руководителя, если компания готова выделить время на его адаптацию в специфике резинотехнического производства и восстановление навыков работы с чертежами. В перспективе он может усилить контроль, дисциплину и эффективность производства."
                conclusionTitle='Рекомендация'
                conculsionText='Кандидат – опытный руководитель, отлично понимающий производственные процессы, ремонты и эксплуатацию техники. У него есть управленческие навыки, он уверен в себе, дисциплинирован и требователен.'
            />
        </div>
    )
}
