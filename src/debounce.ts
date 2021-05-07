export default function debounce(fn: Function, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args) => {
    if (!timer) fn.apply(this, args);

    clearTimeout(timer);
    timer = setTimeout(() => (timer = undefined), timeout);
  };
}
