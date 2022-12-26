type QueryParams = {
  [key: string]: string
}

export default function getQueryParams(search: string): QueryParams {
  if (!search) return {}

  let queriesParams = {}
  new URLSearchParams(search).forEach((value: string, key: string) => {
    queriesParams[key] = value
  })

  return queriesParams
}
