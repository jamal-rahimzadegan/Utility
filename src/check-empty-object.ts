export default function checkEmptyObject(obj: { [key: string]: any }): boolean | string {
  return typeof obj === 'object' ? Object.entries(obj)?.length === 0 : 'not an object';
}
