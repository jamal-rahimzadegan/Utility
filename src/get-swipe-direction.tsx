type StepType = 'start' | 'move' | 'end';
type DirType = null | 'up' | 'down' | 'left' | 'right';

let touchStartX: number = 0;
let touchStartY: number = 0;
let touchStopX: number = 0;
let touchStopY: number = 0;
let dir: DirType = null;

export default function getSwipeDirection(step: StepType, e?: TouchEvent): null | Promise<DirType> {
  switch (step) {
    case 'start':
      touchStartX = e.targetTouches[0].clientX;
      touchStartY = e.targetTouches[0].clientY;
      break;
    case 'move':
      touchStopX = e.targetTouches[0].clientX;
      touchStopY = e.targetTouches[0].clientY;
      break;
    case 'end':
      if (touchStopX !== 0 && touchStopY !== 0) {
        if (touchStartY - touchStopY > 75) dir = 'up';
        if (touchStartY - touchStopY < -75) dir = 'down';
        if (touchStartX - touchStopX < -75) dir = 'right';
        if (touchStartX - touchStopX > 75) dir = 'left';
      }

      return new Promise((resolve) => {
        resolve(dir);

        touchStartX = 0;
        touchStartY = 0;
        touchStopX = 0;
        touchStopY = 0;
        dir = null;
      });
    default:
      return null;
  }
}
