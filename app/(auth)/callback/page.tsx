// app/callback/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useHHAuth } from '@/features/hh-auth/hooks/hh-use-auth';
import { APP_ROUTES } from '@/shared/config/routes';

export default function HHCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { exchange } = useHHAuth();
  const called = useRef(false); // Защита от двойного вызова в React Strict Mode

  useEffect(() => {
    const code = searchParams.get('code');
    
    if (code && !called.current) {
      called.current = true;
      
      exchange(code)
        .then(() => {
          // Успех — идем в рабочую область
          router.replace(APP_ROUTES.MAIN.MAIN);
        })
        .catch((err) => {
          console.error("Auth failed", err);
          router.replace('/login?error=hh_auth_failed');
        });
    }
  }, [searchParams, exchange, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Можно добавить твой красивый лоадер или спиннер */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#24B3AC] border-t-transparent"></div>
        <p className="font-manrope text-lg text-gray-600">Синхронизация с HeadHunter...</p>
      </div>
    </div>
  );
}