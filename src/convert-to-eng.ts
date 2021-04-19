
function convertToEng(txt:string, type:string = "per"):string {
 const AR_MATCH = /[٠١٢٣٤٥٦٧٨٩]/g;
 const PER_MATCH = /[۰۱۲۳۴۵۶۷۸۹]/g;
 const replacePer = (char) => char.charCodeAt(0) - 1776;
 const replaceArabic = (char) => char.charCodeAt(0) - 1632;

 if (!txt) return "";

 if (type === "per") return txt.replace(PER_MATCH, replacePer);

 if (type === "ar") return txt.replace(AR_MATCH, replaceArabic);

 if (type === "both") {
   return txt.replace(AR_MATCH, replaceArabic).replace(PER_MATCH, replacePer);
 }
}