// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }

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