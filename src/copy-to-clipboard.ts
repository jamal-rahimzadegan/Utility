
function handleCopy() {
	// This will be executed if the default method fails (is not supported by the browser).
	const retryCopy = (text: string) => {
		let input = document.createElement("input");
		input.setAttribute("value", text);
		document.body.appendChild(input);
		input.select();
		document.execCommand("copy"); // Todo: update it :)
		document.body.removeChild(input);
	};

	return (text: string) => {
		if (!text) return console.error(`---Pass correct text to copy --->`);

		try {
			navigator.clipboard.writeText(text);
		} catch (err) {
			console.error("err in copyToClipboard ", err);
			retryCopy(text);
		}
	};
}

const copyToClipboard = handleCopy();
export default copyToClipboard;

