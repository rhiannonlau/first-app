// You now have access to the current locale
// e.g. /en-US/products -> 'lang' is "en-US"

import { getDictionary } from './dictionaries'

// ensure all special files inside app/ are nested under app/[lang]
// this enables the Next.js router to dynamically handle different locales in the route
// and forward the lang parameter to every layout and page, for ex:
export default async function Page({ params: { lang } }) {
    const dict = await getDictionary(lang) // en
    return <button>{dict.products.cart}</button> // Add to Cart
}

// the root layout can also be nested in this folder
// e.g. app/[lang]/layout.tsx