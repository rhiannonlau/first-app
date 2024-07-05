'use server'

import { redirect, permanentRedirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'

// server side validation and error handling
// more in createUser()
// to download zod: https://zod.dev/
import { z } from 'zod'

export async function createPost(id: string) {
    try {
        // Call dataase
    } catch (error) {
        // Handle errors
    }

    revalidatePath('/posts') // Update cached posts
    redirect(`/post/${id}`) // Navigate to the new post page
    // redirect internally throws an error so should be outside of try/catch
}

export async function updateUsername(username: string, formData: FormData) {
    try {
        // Call database
    } catch (error) {
        // Handle errors
    }

    revalidateTag('username') // Update all references to the username
    permanentRedirect(`/profile/${username}`) // Navigate to the new user profile
}

export async function updateUser(userId, formData) {
    //..
}

// manual (on-demand) revalidation continued from app/page.tsx
export default async function action() {
    revalidateTag('collection')
}

export async function create() {
    // ...
}

const schema = z.object({
    email: z.string({
        invalid_type_error: 'Invalid Email',
    }),
})

// server-side validation and error handling, more in app/ui/signup.tsx
// use HTML validation like required and type="email" for basic
// client-side form validation
// for advanced server-side validation, use zod (above) to
// validate the form fields before mutating the data:
// should be default but conflicts with action()
export async function createUser(formData: FormData) {
    const validatedFields = schema.safeParse({
        email: formData.get('email'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Mutate data
}

// once the fields have been validated on the server,
// you can return a serializable object in your action
// and use the React useFormState hook to show a
// message to the user
    // by passing the action to useFormState,
    // the action's function signature changes to
    // receive a new prevState or initialState param
    // as its first argument:
    // export async function createUser(prevState: any, formData: FormData) {
        // ...
        // return {
        // message: 'Please enter a valid email',
        // }
    // }
