import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: "a",
  createdAt: new Date(),
  stock: 1
})
console.log(products);

const total = calcStock()
console.log(total);
