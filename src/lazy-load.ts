import { lazy, LazyExoticComponent } from 'react'

function lazyLoad(path: string, namedExport: string): LazyExoticComponent<any> {
  return lazy(() => {
//  for example to start from the root of src folder ---> const promise = import("." + path); // check __dirname
    const promise = import(path)
    if (!namedExport) return promise
    return promise.then((module) => ({ default: module[namedExport] }))
  })
}

// Example for default export
// const Home = lazyLoad('./pages/Home')

// Example for named export
// const Home = lazyLoad('./pages/Home', 'Home')
