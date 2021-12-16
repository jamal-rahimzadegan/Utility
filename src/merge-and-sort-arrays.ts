export default function mergeAndSortArrays(type: 'des' | 'asc', arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  return type === 'asc' ? newArr.sort((a, b) => a - b) : newArr.sort((a, b) => b - a);
}
