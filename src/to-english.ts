export function toEnglish(str: string): string {
  let PER_NUM = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];

  if (typeof str === 'string') {
    let i = 0;
    for (i ; i < 10; i++) {
      str = str.replace(PER_NUM[i], i);
    }
  }
  return str || '';
}
