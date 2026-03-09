"use client"

export const HeroSection = () => {
    return (
        /* Контейнер с отступами, чтобы блок не прилипал к краям экрана */
        <div className="flex-1 flex flex-col animate-in fade-in duration-700">

            {/* ФОН: растягивается на всю доступную ширину и высоту */}
            <div className="mx-5 flex-1 bg-[#D2D2D2] rounded-[16px] flex flex-col">

                {/* КОНТЕНТ: Ограничен классом container, но находится внутри фона */}
                <div className="container h-full flex-1 flex flex-col items-center justify-center text-center py-20">
                    <div className="max-w-155.25">
                        {/* Заголовок: Unbounded */}
                        <h1 className="font-heading text-white text-[40px] md:text-[53.8px] leading-14.5 select-none">
                            AI Talent Genome
                        </h1>

                        {/* Описание: Manrope */}
                        <div className="mt-17 space-y-2">
                            <p className="font-body text-white text-[14px] md:text-[22px] leading-6.5">
                                — Текст описания сервиса (небольшой, упоминание о бета-тестировании) Текст описания сервиса (небольшой, упоминание о бета-тестировании)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}