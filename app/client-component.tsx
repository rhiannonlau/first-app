// Passing additional arguments to Server Actions with bind
'use client'

import { updateUser } from './actions'
import { useState } from 'react'

export function UserProfile({ userId }: { userId: string }) {
    const updateUserWithId = updateUser.bind(null, userId)

    return (
        <form action={updateUserWithId}>
            <input type="text" name="name" />
            <button type="submit">Update User Name</button>
        </form>
    )
}

// Passing Server Components to Client Components as props
// Continued from the note in app/layout.tsx:

// A common pattern is to use the React children prop to
// create a "slot" in your Client Component
// In this example, <ClientComponent> accepts a children
// prop:
export default function ClientComponent({
    children,
}: {
    children: React.ReactNode
}) {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(count + 1) }>{count}</button>
            {children}
        </>
    )
}

// <ClientComponent> doesn't know that children will
// eventually be filled in by the result of a Server
// Component
// The only responsibility <ClientComponent> has is to
// decide where children will eventually be placed

// In a parent Server Component, you can import both the
// <ClientComponent> and <ServerComponent> and pass
// <ServerComponent> as a child of <ClientComponent>
// as shown in app/page.tsx