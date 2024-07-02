'use server'

import { redirect, permanentRedirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'

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