(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7, 8]
  // prices.push("a")
  // prices.push(false)  // Prices is an number array.
  // prices.push({})
  prices.push(9, 10)

  let mixed = [1, 2, 3, "hi", false]
  mixed.push("a")
  mixed.push(false)  // mixed is an array of string, number and boolean
  mixed.push(4)

  let anotherMixed: (number | string | boolean | Object)[] = ["hi", false]
  anotherMixed.push("a")
  anotherMixed.push(false)  // anotherMixed is an array of string, number and boolean
  anotherMixed.push(1)
  anotherMixed.push({})

  let numbers = ["a", "b"]
  // numbers.map(item => item * 2)
})()
