const HAS_HTML = /<\/?[a-z][\s\S]*>/i;

export default function sanitizeInput(inpTxt: string): string {
  if (HAS_HTML.test(inpTxt)) {
    console.log('Your input is not valid');
    return '';
  } else return inpTxt;
}
