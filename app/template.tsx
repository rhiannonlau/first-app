// unlike layouts that persist across routes and maintain state, templates
// create a new instance for each of their children on navigation.
// this means that when a user navigates between routes that share a template,
// a new instance of the component is mounted, DOM elements are recreated,
// state is not preserved, and effects are re-synched.

export default function Template({ children }: {children: React.ReactNode }) {
    return <div>{children}</div>
}