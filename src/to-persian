const EN_NUM = /[0-9]/g
const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
 
export default function convertEnToFa(str:string) {
  if (typeof str === 'string') {
    return str.replace(EN_NUM, (w) => persianDigits[+w]);
  }

  return str || '';
}
