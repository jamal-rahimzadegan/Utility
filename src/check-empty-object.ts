export default function checkEmptyObject(obj: object): boolean {
  return !!Object.entries(obj)?.length;
}
