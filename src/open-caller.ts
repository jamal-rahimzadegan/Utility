type CallerType = "mail" | "phone" | "sms";
type Params = [type: CallerType, address?: string, msg?: string, title?: string];

export default async function openCaller(...params: Params) {
	const [type, address, msg = "", title = ""] = params;

	if (!type || !address) return;

	const CALLER_SET = {
		mail: `mailto:${address}?subject=${title}&body=${msg}`,
		phone: "tel:" + address,
		sms: `sms://${address}/?body=${msg}`,
	};

	let opener = document.createElement("a");
	Object.assign(opener, { href: CALLER_SET[type], target: "_blank", rel: "noopener" });

	opener.click();
}
