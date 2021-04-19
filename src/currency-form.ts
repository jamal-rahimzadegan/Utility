function currencyForm(price:string):string {
    Number(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
