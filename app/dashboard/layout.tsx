import { ContainerWithChildren } from "postcss/lib/container"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
    // return (
    //     <section>
    //         {/* Include shared UI here e.g. a header or sidebar */}
    //         <nav></nav>

    //         {children}
    //     </section>
    // )
}