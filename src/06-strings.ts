(() => {
  let producTitle: string = "My Product" // string NOT String
  producTitle = "Other product"

  const isNew = false

  const summary = `
    title: ${producTitle}
    isNew: ${isNew}
  `
  console.log(summary);

})()
