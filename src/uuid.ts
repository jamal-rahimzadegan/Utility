function uuid(): string {
  const unitInt32 = window.crypto.getRandomValues(new Uint32Array(1))[0]
  return unitInt32.toString(16)
}


// Usage:
// const user = {name: "test" , age:2023 , id: uuid()}
