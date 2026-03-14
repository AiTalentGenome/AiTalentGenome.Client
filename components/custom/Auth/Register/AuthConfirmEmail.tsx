import { useAuthModalStore } from '@/store/useAuthModalStore'
import React from 'react'

export default function AuthConfirmEmail() {

    return (
        <div className='flex flex-col'>
            <h2 className="font-open-sans font-semibold text-[22px] leading-6 text-center text-footer-text mb-6">
                Подтвердите ваш Email - адрес
            </h2>

            <p className="px-4 font-open-sans font-normal text-[14px] leading-5 text-center text-footer-text mb-6 max-w-122.5">
                Для активации вашего аккаунта, перейдите по ссылке, отправленной на example@gmail.com
            </p>

            <p className="px-4 font-open-sans font-normal text-[14px] leading-5 text-center text-footer-text -mb-3 max-w-122.5">
                Если письма нет во входящих, проверьте папку «Спам»
            </p>
        </div>
    )
}
