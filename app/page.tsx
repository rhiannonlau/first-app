// 'use client'

// don't manually add <head> tags like <title> or <meta> to root layouts
// use the metadata api
import { Metadata } from 'next'
import Link from 'next/link'
// can only be used in a 'use client'-marked component
// but metadata cannot be used when 'use client' is used
// import { useRouter } from 'next/navigation'

// Server Actions, specifically pending states
// explained more in app/submit-button.tsx
import { SubmitButton } from '@/app/submit-button'
import { createItem } from '@/app/actions'

export const metadata: Metadata = {
  title: 'Next.js',
}

// RENDERING: RUNTIME
// you can specify a runtime for individual route segments
// in your Next.js app. to do so, decalre a variable called
// runtime and export it. the var must be a string and it
// must have a value of either 'nodejs' or 'edge' runtime.
// the following demonstrates a page route segment that
// exports a runtime with a value of 'edge':
export const runtime = 'edge' // 'nodjs' (default) | 'edge'
// you can also define runtime on a layout level, as shown
// in app/layout.tsx

// fetching data on the server with fetch
// the returned values of fetch are automatically cached in the Data Cache
async function getData() {
  const res = await fetch('https://api.example.com/...', { cache: 'force-cache' }) // ", { cache: 'force-cache' }" is the default, so can be ommitted
  // The return value is NOT serialized
  // You can return Date, Map, Set, etc

  // revalidating data - purging data cache and re-fetching the latest data
  // const res = await fetch('https://api.example.com/...', { next: { revalidate: 3600 } })
  // this is a timed revalidation
  // manual revalidations can be done by adding an optional tag to cache entries
  // then calling revalidateTag to revalidate all entries with that tag
  // this process is shown on line 156 and in app/actions.tsx

  if (!res.ok) {
    // This will activate the closest 'error.js' Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Page() {
// for basic fetching:
// export default async function Page() {
  //const data = await getData()

// for manual revalidating:
// export default async function Page() {
  // const res = await fetch('https://...', { next: { tags: ['collection'] } })
  // const data = await res.json()

  // return <h1>Hello, world!</h1>
  // const router = useRouter()
  return <Link href="/dashboard">Dashboard</Link>
  // <Link href="/dashboard#settings">Settings</Link> for scrolling to a specific id on navigation

  // TAINTING from next.config.js and app/utils.tsx
  // const userData = getUserData()
  // return (
    // <ClientComponent
      // user={userData} // this will cause an error because of taintObjectReference
      // address={userData.address} // this will cause an error because of taintUniqueValue
    // />
  // )

  // RENDERING:
  // PASSING SERVER COMPONENTS AS CHILD OR PROP OF A CLIENT COMPONENT
  // continued from app/layout.tsx and app/client-component.tsx
  // return (
    // <ClientComponent>
      // <ServerComponent />
    // </ClientComponent>
  // )
  // don't forget "import ClientComponent from './client-component'"
  // and "import ServerComponent from './server-component'" at the top
  // With this approach, <ClientComponent> and <ServerComponent>
  // are decoupled and can be rendered independently
  // In this case, the child <ServerComponent> can be rendered on
  // the server, well before <ClientComponent> is rendered on the
  // client

}

// SERVER ACTIONS are async functions executed on the server
// can be used in Server and Client components to handle form submissions and data mutations
// defined by 'use server'
// these can be placed at the top of async functions to make them Server Actions
// or at the top of a file to mark all exports of that file as Server Actions
// ex of the former:
// Server Component
// export default function Page() {
  // Server Action
  // async function create() {
    // 'use server'
    // ...
  // }
  // return (
    // ...
  // )
// }

// Server Component
// example is written as: export default async function Home() {
// but there cannot be two defaults, so i removed default to
// remove the error flag
export async function Home() {
  return (
    <form action={createItem}>
      <input type="text" name="field-name" />
      <SubmitButton />
    </form>
  )
}