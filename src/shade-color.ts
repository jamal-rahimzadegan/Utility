// lighter: amount > 0
// darker: amount < 0
export default function shadeColor(color, amount) {
  if (!color) return '';
  const adjust = (color) => {
    return ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2);
  };

  return '#' + color.replace(/^#/, '').replace(/../g, adjust);
}
