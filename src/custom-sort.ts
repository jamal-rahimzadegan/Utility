type Locale = 'fa' | 'en'
type Order = 'asc' | 'desc'
type Data<T> = T[]

class CustomSort {
  private locale: Locale
  private collator: Intl.Collator
  private sortOptions: object
  private listData: Data<any> = []

  constructor(locale: Locale) {
    this.locale = locale
    this.collator = new Intl.Collator(locale)
    this.sortOptions = { numeric: true }
  }

  sort<T>(data: Data<T>, order: Order, key: string = ''): Data<T> {
    this.listData = [...data]
    const isPrimitiveList = !key

    if (!data.length) return []

    return isPrimitiveList
      ? this.sortPrimitive(this.listData, order)
      : this.sortNested<T>(this.listData, order, key)
  }

  sortStrList(data: Data<string>, order: Order): Data<string> {
    const isDesc = order === 'desc'
    this.listData = [...data]

    return data.sort((a, b) => {
      return this.collator.compare(isDesc ? b : a, isDesc ? a : b)
    })
  }

  private sortPrimitive(data: any[], order: Order) {
    if (order === 'asc') return data.sort((a, b) => a - b)
    if (order === 'desc') return data.sort((a, b) => b - a)

    return data
  }

  private sortNested<T>(data: Data<T>, order: Order, key: string): Data<T> {
    const isDesc = order === 'desc'

    return data.sort((a: T, b: T) => {
      return this.compare<T>(isDesc ? b : a, isDesc ? a : b, key)
    })
  }

  private compare = <T>(a: T, b: T, key: string) => {
    const { sortOptions, locale } = this
    return a[key].toString().localeCompare(b[key], locale, sortOptions)
  }
}

const customSort = new CustomSort('en')
export default customSort
