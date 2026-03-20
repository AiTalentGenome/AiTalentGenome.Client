"use client"

import { ListItem } from './ListItem'

export type ListIconType = 'check' | 'alert' | 'opportunity' | 'threat' | 'bullet' | 'none';

export interface SummaryItem {
    important?: string;
    text: string;
    iconType?: ListIconType;
}

export interface SummarySection {
    title?: string;
    items: (string | SummaryItem)[]; // Может быть просто строкой или объектом с иконкой
}

export interface SummaryCardProps {
    mainTitle?: string;
    sections: SummarySection[];
    // Теперь может быть и строкой, и списком
    conclusion: string | (string | SummaryItem)[]; 
    summaryConculsionType?: "summary" | "psychological";
    conculsionText?: string;
    conclusionTitle?: string;
}

export const SummaryCard = ({ mainTitle, sections, conclusion, summaryConculsionType, conclusionTitle = "Вывод", conculsionText }: SummaryCardProps) => {
    return (
        <div className="bg-[#F5F5F5] rounded-[20px] p-6 space-y-8 font-manrope text-black">
            {/* Заголовок карточки */}
            {
                summaryConculsionType === undefined &&
                <h2 className="text-[24px] font-semibold">
                    {mainTitle}
                </h2>
            }

            {
                summaryConculsionType &&
                <h2 className='bg-[#03A199] p-4 text-[24px] font-semibold text-white rounded-[20px]'>
                    {summaryConculsionType !== "psychological" ? "Общий вывод" : "Вывод по психологической оценке кандидата"}
                </h2>
            }

            {
                conculsionText && (
                    <p className="font-manrope font-normal text-[22px] leading-6.5">{conculsionText}</p>
                )
            }

            {/* Секции данных */}
            <div className="space-y-8">
                {sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                        {section.title &&
                            <h3 className="text-[20px] leading-6 font-semibold">
                                {section.title}
                            </h3>}

                        <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => {
                                const isObject = typeof item !== 'string';
                                const text = isObject ? item.text : item;
                                const type = isObject ? item.iconType : 'bullet';
                                const important = isObject ? item.important : undefined;
                                return <ListItem key={itemIdx} item={item} />
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Блок вывода (Белая плашка) */}
            <div className="bg-white rounded-[20px] p-4 space-y-4 shadow-sm">
                <h4 className="text-[22px] leading-6 font-semibold">{conclusionTitle}</h4>
                {typeof conclusion === 'string' ? (
                    <p className="text-[18px] leading-7 opacity-90">{conclusion}</p>
                ) : (
                    <ul className="space-y-2">
                        {conclusion.map((item, idx) => (
                            <ListItem key={idx} item={item} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}