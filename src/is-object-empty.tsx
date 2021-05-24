type ComplexObject = { [key: string]: any };

export default function isObjectEmpty(obj: ComplexObject): boolean | string {
  return typeof obj === "object"
    ? Object.entries(obj).length === 0
    : "not an object";
}
