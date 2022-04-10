type UrlPayloadType = [base: string, params?: { [key: string]: any }];

export default function generateUrl(...urlPayload: UrlPayloadType): URL {
  const [base = '', params] = urlPayload;

  const url = new URL(base);
  if (params) Object.entries(params).map(([key, value]) => url.searchParams.set(key, value));
  return url;
}
