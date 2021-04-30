type RegionType = 'ar' | 'per' | 'both';

const AR_MATCH: RegExp = /[٠١٢٣٤٥٦٧٨٩]/g;
const PER_MATCH: RegExp = /[۰۱۲۳۴۵۶۷۸۹]/g;

const replacePer = (char) => char.charCodeAt(0) - 1776 + '';
const replaceAr = (char) => char.charCodeAt(0) - 1632 + '';

export default function convertToEng(txt: string, type: RegionType = 'per'): string {
  if (!txt) return '';

  if (type === 'per') return txt.replace(PER_MATCH, replacePer);

  if (type === 'ar') return txt.replace(AR_MATCH, replaceAr);

  if (type === 'both') {
    return txt.replace(AR_MATCH, replaceAr).replace(PER_MATCH, replacePer);
  }
}
