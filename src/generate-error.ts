export default function generateError(msg: string, code?: number, cb?: Function): never {
  !!cb && cb();
  throw { msg, code };
}
