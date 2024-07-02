// [slug] is a dynamic segment
// created by wrapping the folder name in []
// dynamic segments are passed as the params prop to layout, page, route, and generateMetadata functions

// [...slug] can also be used as a catch-all
// e.g. app/shop/[...slug]/page.tsx will match /shop/clothes and /shop/clothes/tops, etc
// similarly, [[...slug]] will match all of the above plus the route without the parameter,
// in this case: /shop

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}

// route: app/blog/[slug]/page.tsx
// example url: /blog/a
// params: { slug: 'a' }

// route: app/blog/[slug]/page.tsx
// example url: /blog/b
// params: { slug: 'b' }



// generateStaticParams func used w dynamic segments to statically generate routes at build time
// instead of on-demand at request time
export async function generateStaticParams() {
    // generateStaticParams decreases build time
    const posts = await fetch('https://.../posts').then((res) => res.json())

    return posts.map((post) => ({
        slug: post.slug,
    }))
}