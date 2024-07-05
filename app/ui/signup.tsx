// server side validation and error handling continued from
// app/actions.tsx and 
// the fields have been validated on the server and a
// serializable object has ben returned in the action createUser(),
// use useFormState to show a message to the user
'use client'

import { useFormState } from 'react-dom'
import { createUser } from '@/app/actions'

const initialState = {
    message: '',
}

export function Signup() {
    // pass the action to the useFormState hook
    // use the returned state to display an error message
    const [state, formAction] = useFormState(createUser, initialState)

    return (
        <form action={formAction}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
            {/*...*/}
            <p aria-live="polite" className="sr-only">
                {state?.message}
            </p>
            <button>Sign up</button>
        </form>
    )
}