import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  const { pathname } = request.nextUrl
  
  // 1. If user is authenticated and tries to access /login, redirect to /app
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/app', request.url))
  }

  // 2. If user is NOT authenticated and tries to access /app, redirect to /login
  if (!token && pathname.startsWith('/app')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  // 3. Removed forced redirect from / to /app.
  // User wanted to access the Landing Page even if logged in.
  // The Landing Page should ideally update its buttons to say "Go to App" if logged in (Client Side logic),
  // but for now, we just allow access.

  // 4. Allow all else (Landing page at /, api, etc)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
