const CARD_NUMBER_REGEX = /^(\d{1,4})(\d{1,4})(\d{1,4})(\d{1,4})$/

export default function formatCardNumber(num: string): string {
  const isValidNumber = !!num && num.length === 16
  const cardNumber = isValidNumber ? num : '0000000000000000'

  const groups = cardNumber.match(CARD_NUMBER_REGEX)?.slice(1) ?? []
  return groups.filter(Boolean).join(' - ')
}
