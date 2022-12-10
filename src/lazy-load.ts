import { lazy, LazyExoticComponent } from 'react'

function lazyLoad(path: string, namedExport: string): LazyExoticComponent<any> {
  return lazy(() => {
    const promise = import(path)
    if (!namedExport) return promise
    return promise.then((module) => ({ default: module[namedExport] }))
  })
}

// Example
// const Home = lazyLoad('./pages/Home', 'Home')
