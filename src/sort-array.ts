
type Data = any[]
type Order = 'asc' | 'desc' | 'reverse'
type ReturnedFn = (data: Data, order?: Order, key?: string) => Data

// TODO: check for arr of strings

function sortBy(): ReturnedFn {
  let sortedArr = []
  const options = { numeric: true }
  const locales = 'en'

  const compare = (x: any, y: any, key: string) => {
    if (!key) return
    // if (!key) return x - y // TODO: improve types
    return x[key].toString().localeCompare(y[key], locales, options)
  }

  return (data = [], order = 'asc', key = '') => {
    sortedArr = [...data]

    switch (order) {
      case 'asc':
        return sortedArr.sort((a, b) => compare(a, b, key))
      case 'desc':
        return sortedArr.sort((a, b) => compare(b, a, key))
      case 'reverse':
        alert('revese')
        return sortedArr.reverse()
      default:
        return sortedArr
    }
  }
}

const sortCustom = sortBy()

export default sortCustom
