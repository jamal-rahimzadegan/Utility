export default function removeArrDuplicates(arr: any[], keyToCheck?: string) {
  return keyToCheck ? [...new Map(arr.map((item) => [item[keyToCheck], item])).values()] : [...new Set(arr)];
}
