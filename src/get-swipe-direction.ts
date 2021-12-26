enum STEPS {
  start = 'start',
  move = 'move',
  end = 'end',
}
type DirType = 'up' | 'down' | 'left' | 'right' | null;
type ResultType = null | ((step: keyof typeof STEPS, e?: TouchEvent) => Promise<DirType>);

function handleSwipe(): ResultType {
  let startX: number = 0;
  let startY: number = 0;
  let stopX: number = 0;
  let stopY: number = 0;
  let dir: DirType = null;

  return (step, e) => {
    const { clientX, clientY } = e?.targetTouches?.[0] || {};

    switch (step) {
      case STEPS.start:
        startX = clientX;
        startY = clientY;
        break;
      case STEPS.move:
        stopX = clientX;
        stopY = clientY;
        break;
      case STEPS.end:
        dir = (() => {
          if (stopX !== 0 && stopY !== 0) {
            if (startY - stopY > 75) return 'up';
            if (startY - stopY < -75) return 'down';
            if (startX - stopX < -75) return 'right';
            if (startX - stopX > 75) return 'left';
          }
        })();

        return new Promise((resolve) => resolve(dir));
      default:
        return null;
    }
  };
}

const getSwipeDirection = handleSwipe();
export default getSwipeDirection;
