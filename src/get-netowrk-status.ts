type StatusType = 'online' | 'offline' | 'unknown';

export default async function getNetworkStatus(): Promise<StatusType> {
  if (typeof document === 'undefined') return 'unknown';

  try {
    const { status } = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return status >= 200 && status < 300 ? 'online' : 'offline'; //  true or false
  } catch (err) {
    return 'offline';
  }
}
