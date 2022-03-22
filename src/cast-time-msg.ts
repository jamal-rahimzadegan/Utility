type TimePayloadType = [
  time: number,
  unit: Intl.RelativeTimeFormatUnit,
  locale?: 'en' | 'fa',
  options?: Intl.RelativeTimeFormatOptions
];

export default function castTimeMsg(...payload: TimePayloadType) {
  const [time = 0, unit, locale = 'en', options = {}] = payload;
  return new Intl.RelativeTimeFormat(locale, options).format(time, unit);
}
