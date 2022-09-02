  type Obj = Record<string, any>

  function iterateObj(obj: Obj): Obj[] {
    const isObject =
      typeof obj === 'object' && !Array.isArray(obj) && obj !== null

    if (!isObject) return []

    return Object.entries(obj).map(([key, value]) => ({
      key,
      value,
    }))
  }
