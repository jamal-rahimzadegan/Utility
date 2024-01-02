type Direction = 'right' | 'left' | 'top' | 'bottom';
type Output = {
  isInScreen: boolean;
  dir: Direction[];
};

export default function checkElementInScreen(id: string = ''): Output {
  const element = document.getElementById(id);
  if (!element)
    return {
      dir: [],
      isInScreen: true
    };

  const rect = element.getBoundingClientRect();

  const dir: Direction[] = (() => {
    const tempDir: Direction[] = [];

    if (rect.top < 0) tempDir.push('top');
    if (rect.left < 0) tempDir.push('left');
    if (rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
      tempDir.push('bottom');
    }
    if (rect.right > (window.innerWidth || document.documentElement.clientWidth)) {
      tempDir.push('right');
    }

    return tempDir;
  })();

  const isInScreen =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  return {
    dir,
    isInScreen
  };
}
