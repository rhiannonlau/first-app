// Moving Client Components down the tree
// Continued in Layout()
// SearchBar is a Client Component
import SearchBar from './searchbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}

// You may have a Layout that has static elements (e.g. logo,
// links, etc.) and an interactive search bar that uses state
// Instead of making the whole layout a Client Component, move
// the interactive logic to a Client Component (e.g. <SearchBar />)
// and keep your layout as a Server Component
// This means you don't have to send all the component Javascript
// to the layout of the client:

// Layout is a Server Component by default
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <main>{children}</main>
    </>
  )
}