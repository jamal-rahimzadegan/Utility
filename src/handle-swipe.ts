let touchStartX = 0;
let touchStartY = 0;
let touchStopX = 0;
let touchStopY = 0;
let dir = null;

type SwipeType = 'start' | 'move' | 'end';

export default function handleSwipe(step: SwipeType, e?: TouchEvent) {
  if (step === 'start') {
    touchStartX = e.targetTouches[0].clientX;
    touchStartY = e.targetTouches[0].clientY;
  }

  if (step === 'move') {
    touchStopX = e.targetTouches[0].clientX;
    touchStopY = e.targetTouches[0].clientY;
  }

  if (step === 'end') {
    if (touchStopX !== 0) {
      if (touchStartX - touchStopX > 75) dir = 'left';
      if (touchStartX - touchStopX < -75) dir = 'right';
    }

    if (touchStopY !== 0) {
      if (touchStartY - touchStopY > 75) dir = 'up';
      if (touchStartY - touchStopY < -75) dir = 'down';
    }

    return new Promise((resolve) => {
      resolve(dir);

      touchStartX = 0;
      touchStartY = 0;
      touchStopX = 0;
      touchStopY = 0;
      dir = null;
    });
  }
}
