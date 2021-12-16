export default function sortArray(arr: any[], order: 'des' | 'asc', property?: string) {
  // sort by property
  let newArr = [];
  if (property) {
    if (order === 'asc') newArr = arr.sort((a, b) => a[property] - b[property]);
    if (order === 'des') newArr = arr.sort((a, b) => b[property] - a[property]);
  } else {
    if (order === 'asc') newArr = arr.sort((a, b) => a - b);
    if (order === 'des') newArr = arr.sort((a, b) => b - a);
  }
  return newArr;
}
