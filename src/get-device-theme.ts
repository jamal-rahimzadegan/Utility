export default function getDeviceTheme(theme: 'dark' | 'light'): boolean | void {
  if (!window?.matchMedia) return console.error('matchMedia is not available')
  return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches
}
