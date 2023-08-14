function searchWithQuery(str: string, cb?: () => void) {
    if (!window.URLSearchParams || !str) return console.error("Can't Search")

    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('search', str)
    const newPathQuery =
      window.location.pathname + '?' + searchParams.toString()
    history.pushState(null, '', newPathQuery)

    cb?.()
  }
