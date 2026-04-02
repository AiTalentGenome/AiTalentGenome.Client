// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('hh_access_token');
    const { pathname } = request.nextUrl;

    // 1. Если токена НЕТ, а пользователь лезет в защищенные разделы
    // Добавь сюда пути, которые КАТЕГОРИЧЕСКИ нельзя видеть без логина (например, /analyze)
    if (!token && (pathname.startsWith('/analyze') || pathname.startsWith('/vacancies'))) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('error', 'session_expired');
        return NextResponse.redirect(loginUrl);
    }

    // 2. Если токен ЕСТЬ, а пользователь зашел на /login — отправляем на главную
    if (token && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
  // Убираем лишнее, оставляем только те пути, которые Middleware должен "слушать"
  matcher: ['/analyze/:path*', '/vacancies/:path*', '/login'],
};