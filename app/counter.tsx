// Client Components in Rendering
// using onClick and useState in a nested component (toggle.js)
// will cause an error if 'use client' directive is not defined
// this is b/c by default all components in the App Router are
// Server Components where these APIs are not available
'use client'

import { useState } from 'react'

export default function Counter() {
    const [count, setcount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setcount(count + 1)}>Click me</button>
        </div>
    )
}