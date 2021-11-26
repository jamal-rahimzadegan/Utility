type SortDataType = string[];
type LocaleType = 'fa' | 'en' | 'ar' | 'de';

export default function sortAlphabetically(data: SortDataType, locale: LocaleType = 'fa'): SortDataType {
  const collator = new Intl.Collator(locale);
  return data.sort(collator.compare);
}
