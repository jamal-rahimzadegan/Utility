export default function shortenNumber(num: number): string {
  if (!num) return '';
  return new Intl.NumberFormat('en', { notation: 'compact' }).format(num);
}
