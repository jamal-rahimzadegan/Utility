
interface Params {
  type: "mail" | "phone" | "sms";
  address: string;
  title?: string;
  msg?: string;
}

export default async function openCaller(params: Params) {
  const { type, address, title = "", msg = "" } = params;

  if (!type || !address) return;

  const CALLER_SET = {
    mail: `mailto:${address}?subject=${title}&body=${msg}`,
    phone: "tel:" + address,
    sms: `sms://${address}/?body=${msg}`,
  };

  const opener = document.createElement("a");
  Object.assign(opener, {
    href: CALLER_SET[type],
    target: "_blank",
    rel: "noopener,noreferrer",
  });

  opener.click();
}
