export default function measurePerf(title: string) {
  const perf = +((performance.now() % 60000) / 1000).toFixed(0);
  console.log(`${title} perf-> `, perf + 's');
}
