const MATCHER = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g

export default function formatCardNumber(num: string): string {
  const cardNumber = num ? num.replace(/[^\d]/g, '') : '0000000000000000'

  return cardNumber.replace(MATCHER, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(' - '),
  )
}
