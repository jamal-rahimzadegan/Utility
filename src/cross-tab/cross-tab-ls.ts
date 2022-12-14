//  Todo: fix wrong executions

type MSG = {
  key: string
  oldValue: string | null
  newValue: string | null
}

class CrossTabLs {
  readonly KEY: string
  private msg: MSG

  constructor(key = 'cross-tab') {
    this.KEY = key

    this.msg = {
      key,
      oldValue: null,
      newValue: this.currentValue,
    }

    window.addEventListener('storage', this.receiveMessage.bind(this))
  }

  sendMsg(message: string) {
    localStorage.removeItem(this.KEY)
    localStorage.setItem(this.KEY, message)
  }

  private receiveMessage(e: any) {
    const { key, newValue, oldValue } = e

    if (key !== this.KEY) return
    console.log(`--- storage has changed, update UI ----> `)

    this.msg = { key, newValue, oldValue }
  }

  get msgBody(): MSG {
    return this.msg
  }

  get currentValue(): string | null {
    return localStorage.getItem(this.KEY)
  }

  revokeMsg() {
    window.removeEventListener('storage', this.receiveMessage)
    localStorage.removeItem(this.KEY)
  }
}

export default new CrossTabLs()

// Example:
// <>
//  <button onClick={() => crossTab.sendMsg("msg " + Math.random())}>
//    set msg
//  </button>;
//  <button onClick={() => console.log(`--- msg ----> `, crossTab.msgBody)}>
//    get msg
//  </button>
// </>
