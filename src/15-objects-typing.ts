(() => {
  type Sizes = "S" | "M" | "L" | "XL"
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: "a",
    createdAt: new Date(),
    stock: 1
  })
  console.log(products);


})()
