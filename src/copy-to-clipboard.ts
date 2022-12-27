const runFallbackCopy = (text: string) => {
  let input = document.createElement('input')
  input.setAttribute('value', text)
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

export default function copyToClipboard(text: string) {
  if (!text) return console.error(`---Pass correct text to copy --->`)

  try {
    navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('err in copyToClipboard ', err)
    console.info('Try to copy using fallback method')
    runFallbackCopy(text)
  }
}
