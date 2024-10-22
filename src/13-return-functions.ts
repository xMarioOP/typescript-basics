(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0

    prices.forEach(item => {
      total + item
    })
    return total
  }

  const rta = calcTotal([1, 2, 3])

  const printTotal = (prices: number[]):void =>{
    const rta = calcTotal(prices)
    return rta // VOID
  }

  const rta2 = printTotal([1,2,3])

})()
