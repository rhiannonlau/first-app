// middleware allows you to run code before a request is completed
// good for performance, safety, and user exp
// e.g. ensure user id and check session cookies before granting access

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked 'async' if using 'await' inside
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: '/about/:path*',
}