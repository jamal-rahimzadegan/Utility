import { isSSR } from 'constant';
import { convertMsToSec } from 'utils';

export default function measurePerf(title: string) {
  console.log(`${title} perf-> `, !isSSR && convertMsToSec(performance.now()) + 's');
}
