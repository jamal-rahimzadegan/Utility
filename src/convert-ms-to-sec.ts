export default function convertMsToSec(ms: number): number {
  return +((ms % 60000) / 1000).toFixed(0);
}
