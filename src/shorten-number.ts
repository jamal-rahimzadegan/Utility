function shorten(): Function {
  const LONG_NUM_FORMAT = new Intl.NumberFormat('en', { notation: 'compact' });

  return (num: number): string => {
    if (!num) return '';
    return LONG_NUM_FORMAT.format(num);
  };
}

const shortenNumber = shorten();

export default shortenNumber;
