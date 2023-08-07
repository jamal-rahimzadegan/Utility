export default function replaceAllStr(
  str: string = '',
  target: string = '',
  replacement: string = '',
): string {
  return str.split(target).join(replacement);
}
