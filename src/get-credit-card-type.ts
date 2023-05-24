export function getCreditCardType(cc: string): string {
  cc = cc.replace(/ /g, '')

  const amex = new RegExp('^3[47][0-9]{13}$')
  const visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$')
  const cup1 = new RegExp('^62[0-9]{14}[0-9]*$')
  const cup2 = new RegExp('^81[0-9]{14}[0-9]*$')

  const mastercard = new RegExp('^5[1-5][0-9]{14}$')
  const mastercard2 = new RegExp('^2[2-7][0-9]{14}$')

  const disco1 = new RegExp('^6011[0-9]{12}[0-9]*$')
  const disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$')
  const disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$')

  const diners = new RegExp('^3[0689][0-9]{12}[0-9]*$')
  const jcb = new RegExp('^35[0-9]{14}[0-9]*$')

  if (visa.test(cc)) return 'VISA'
  if (amex.test(cc)) return 'AMEX'
  if (mastercard.test(cc) || mastercard2.test(cc)) return 'MASTERCARD'
  if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) return 'DISCOVER'
  if (diners.test(cc)) return 'DINERS'
  if (jcb.test(cc)) return 'JCB'
  if (cup1.test(cc) || cup2.test(cc)) return 'CHINA_UNION_PAY'

  return 'unknown'
}
