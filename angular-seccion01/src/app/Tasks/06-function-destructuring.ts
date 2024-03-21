export interface Product {
    description: String;
    price: number;
  }
  
  const phone: Product = {
    description: "Nokia 1",
    price: 270.0,
  };
  
  const tablet: Product = {
    description: "Samsung Galaxy Tab",
    price: 150.0,
  };
  
  const shoppingCart = [phone, tablet];
  const tax = 0.8;
  
  taxCalculator({ tax, products: shoppingCart });
  
  interface TaxCalculationOptions {
    tax: number;
    products: Product[];
  }
  
  export function taxCalculator(options: TaxCalculationOptions): number {
    let total = 0;
  
    options.products.forEach((product) => {
      total += product.price;
    });
    let result = total * options.tax;
    console.log("CALCULADO: " + result);
    return result;
  }