const abbreviates = ['', 'k', 'M'];

export default function socialFormatter(number: number): string {
  const symbol = (Math.log10(number) / 3) | 0;
  const suffix = abbreviates[symbol];
  if (symbol === 0) return number.toString();
  let scale = Math.pow(10, symbol * 3);
  let formattedNumber = number / scale;
  return formattedNumber.toFixed(1) + suffix;
}
