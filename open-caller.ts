import { IS_SSR } from 'constant';

type CallerType = 'phone' | 'mail';

export default async function openCaller(type: CallerType, value?: string) {
  const url = (() => {
    switch (type) {
      case 'mail':
        return 'mailto:""?subject=""&body="';
      case 'phone':
        return 'tel:' + value;
      default:
        return '';
    }
  })();

  if (!IS_SSR && url) window.open(url, '_self');
}
