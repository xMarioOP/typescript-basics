(() => {

  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password);
  }

  login({
    email: "nico@example.com",
    password: "123"
  })

  const products: any[] = []

  type Sizes = "S" | "M" | "L" | "XL"

  const addProduct = (data:
    {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    }) => {
    products.push(data)
  }

  addProduct({
    title: "a",
    createdAt: new Date(),
    stock: 1
  })
  console.log(products);


})()
