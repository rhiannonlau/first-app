// tainting prevents whole object instances or sensitive values
// from being passed to the client
module.exports = {
    // set experimental.taint to true to enable tainting
    experimental: {
        taint: true,
    },
}

// then pass the object or value you want to taint to the
// experimental_taintObjectReference or
// experimental_taintUniqueVale functions, as shown in 
// app/utils.tsx and app/page.tsx in Page()