export default function addLeadingZero(number?: number) {
	return String(number).padStart(2, "0");
}
