// INTERNATIONALIZATION: LINE 62
// middleware allows you to run code before a request is completed
// good for performance, safety, and user exp
// e.g. ensure user id and check session cookies before granting access
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked 'async' if using 'await' inside
export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL('/home', request.url))
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/about-2', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
    // NextResponse API allows redirecting the incoming request to a diff url
    // and rewrite the response by displaying a given url
    // and more
}

// middleware will be invoked for every route in your project
// use matches to precisely target or exclude specific routes
// there is a specific execution order for this:
// https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
    // matcher: '/about/:path*',
    // matcher vals needs to be const
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
          source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
          missing: [
            { type: 'header', key: 'next-router-prefetch' },
            { type: 'header', key: 'purpose', value: 'prefetch' },
          ],
        },
     
        {
          source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
          has: [
            { type: 'header', key: 'next-router-prefetch' },
            { type: 'header', key: 'purpose', value: 'prefetch' },
          ],
        },
     
        {
          source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
          has: [{ type: 'header', key: 'x-present' }],
          missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
        },
      ],
}

////////////////////////////////////////////////////////////////////////////////////////////
// internationalization, i.e. different language accessibility

// using libraries to look at incoming request to determine which locale to select
// based on headers, locales you support, and the default locale
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).langauges()
let locales = ['en-US', 'nl-NL', 'nl'] // en-US: US Eng, nl-NL: Netherlands dutch, nl: dutch no specific region
let defaultLocale = 'en-US'

match(languages, locales, defaultLocale) // -> 'en-US'


// OR
// internationalize routing by either the sub-path /fr/poducts or the domain my-site.fr/poducts
// use this info to redirect the user based on the locale inside middleware

import { NextResponse } from "next/server";

let locales = ['en-US', 'nl-NL', 'nl']

// Get the preferred locale, similar to the above or using a libary
function getLocale(request) { ... }

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}