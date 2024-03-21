import { Product, taxCalculator } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia 1",
    price: 270,
  },
  {
    description: "Samsung Galaxy Tab",
    price: 150.0,
  },
];

const tax = 0.8;

const result = taxCalculator({ tax, products: shoppingCart });

console.log(result);