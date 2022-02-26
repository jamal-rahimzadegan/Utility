// pass duration as seconds
export default function sleep(seconds: number = 0, cb: Function) {
	const startTime = Date.now();
	let currentTime = null;

	do currentTime = Date.now();
	while (currentTime - startTime < seconds * 1000);
	cb?.(); // runs after sleep
}
