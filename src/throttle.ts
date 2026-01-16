// Throttle: Executes immediately, then ignores all calls for X time - > Like an elevator—waits for the last person to get on before moving.
// Debounce: Ignores all calls until there is a "silence" of at least X time. -> Like a security guard—lets one person in, then closes the door for 300ms. -> Example: "Double-Click" Prevention

export default function throttle(fn: Function, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args) => {
    if (!timer) fn.apply(this, args);

    clearTimeout(timer);
    timer = setTimeout(() => (timer = undefined), timeout);
  };
}
