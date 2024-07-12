// Composition Patterns
import 'server-only'

export async function getData() {
    const res = await fetch('https://external-service.com/data', {
        headers: {
            // this function contains an API_KEY, which was written
            // with the intention that it would only be executed
            // on the server
            // since the envionment variable API_KEY is not
            // prefixed with NEXT_PUBLIC, it's a private variable
            // that can only be accessed on the server
            // Next.js replaces private env variables with empty
            // strings to prevent them from being leaked to the
            // client
            // thus this won't work even though getData() can be
            // imported and executed on the client
            // to prevent unintended client usage of server code
            // like this, use server-only package to give other
            // developers a built-time error if they ever
            // accidentally import one of these modules into a
            // Client Component
            authorization: process.env.API_KEY,
            // now any Client Component that imports getData()
            // will receive a build-time error explaining that
            // this module can only be used on the server

            // similarly, you can use the package client-only to
            // mark modules that contain client-only code,
            // for example: code that accesses the window object
        },
    })

    return res.json()
}