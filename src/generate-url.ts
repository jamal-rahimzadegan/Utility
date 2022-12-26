type Payload = [base: string, params?: { [key: string]: any }]

export default function generateUrl(...payload: Payload): URL {
  const [base = '', params] = payload

  const url = new URL(base)

  if (params) {
    Object.entries(params).map(([key, value]) =>
      url.searchParams.set(key, value),
    )
  }

  return url
}
