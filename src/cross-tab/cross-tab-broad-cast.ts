
// Check browser support before usage

type BroadcastCallback = (this: BroadcastChannel, e: MessageEvent) => any

class CrossTabBroadcast {
  private readonly bc: BroadcastChannel
  private msg: MessageEvent | null

  constructor(name: string = 'cross-tab-bc') {
    this.msg = null
    this.bc = new BroadcastChannel(name)
    this.bc.onmessage = (msg:MessageEvent) => (this.msg = msg)
  }

  get channel() {
    return this.bc
  }

  sendMsg(msg: any) {
    this.bc.postMessage(msg)
  }

  get incomingMsg() {
    return this.msg
  }

  close() {
    this.bc.close()
  }
}

export default new CrossTabBroadcast()

/**
 Usage:
 In tab-1 --> crossTab.sendMsg("Sent from class");
 In tab-2 --> console.log(`---sent msg----> `, crossTab.incomingMsg);
 *  */
