// NOTE: you can also use `axios` it supports SSR.
async function checkIsOnline(): Promise<boolean> {
  if (typeof document === "undefined") return false;

  try {
    const { status } = await fetch("https://www.google.com");
    return status >= 200 && status < 300;
  } catch (err) {
    console.error("Internet Connection");
    return false;
  }
}
