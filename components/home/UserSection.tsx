"use client"

import Image from 'next/image'
import MainHeader from '../custom/Headers/MainHeader'
import { useRouter } from 'next/navigation'

export default function UserSection() {
  const router = useRouter()

  return (
    <div className='flex flex-col gap-16 -mt-15'> 
      <div className="flex flex-col items-center gap-5">
        <MainHeader title='Алина, добро пожаловать!' />
        <p className="font-manrope font-light text-[20px] leading-4 space-y-4">Выберите, что вы хотите сделать сегодня</p>
      </div>
      
      <div className='flex gap-8'>
        {/* Карточка 1 */}
        <div className='flex flex-col items-center py-6 px-8 gap-5 bg-[#2494B399] rounded-[40px] w-125 cursor-pointer transition-all duration-300 ease-in-out 
                hover:bg-[#2494B3] hover:scale-[1.02] hover:shadow-xl'>
          <Image
            width={50}
            height={50}
            src="/star.svg"
            alt='Star Picture'
          />
          <h3 className='text-center align-middle font-manrope font-semibold text-[20px] leading-8 text-white'>
            Провести поведенческий и эмоциональный анализ кандидата
          </h3>
        </div>

        {/* Карточка 2 */}
        <div className='flex flex-col items-center py-6 px-8 gap-5 bg-[#2494B399] rounded-[40px] w-125 cursor-pointer transition-all duration-300 ease-in-out 
                hover:bg-[#2494B3] hover:scale-[1.02] hover:shadow-xl'
                onClick={() => router.push("/analyzer/choose-candidates")}
                >
          <Image width={50} height={50} src={"/star.svg"} alt='Star Picture' 
          />
          {/* Убрал leading-[100%] и добавил leading-8 */}
          <h3 className='text-center align-middle py-4 font-manrope font-semibold text-[20px] leading-8 text-white'>
            Выявить топ-кандидатов под вакансию
          </h3>
        </div>
      </div>
    </div>
  )
}