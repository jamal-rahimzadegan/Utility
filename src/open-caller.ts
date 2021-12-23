import { IS_SSR } from 'constant';

type CallerType = 'mail' | 'phone' | 'sms';

export default async function openCaller(type: CallerType, number?: string, msg?: string) {
  const CALLER_SET = {
    mail: 'mailto:""?subject=""&body="',
    phone: 'tel:' + number,
    sms: `sms://${number}/?body=${msg}`,
  };

  if (!IS_SSR) window.open(CALLER_SET[type], '_self');
}
