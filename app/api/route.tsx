// route handlers allow custom request handlers for a given route
// using the web request and response apis

// route handlers are only available inside app

// route handlers are equivalent to api routes inside pages
// so you don't need to use both together

// route handlers can be nested inside app,
// but you CANNOT have a route.tsx and page.tsx in the same segment

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {}