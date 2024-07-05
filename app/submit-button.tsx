// Using React useFormStatus hook to show a pending state
// while the form is being submitted

// since useFormStatus is a React hook, it must be used in
// a Client Component
'use client'

import {  useFormStatus } from 'react-dom'

export function SubmitButton() {
    // useFormStatus returns the status for a specific form,
    // so it MUST be defined as the child of the form element
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending}>
            Add
        </button>
    )
}

// <SubmitButton /> can then be nested in any form,
// as shown in app/page.tsx