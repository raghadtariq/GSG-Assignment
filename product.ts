//Task 4:
interface Product {
    name: string;
    price: number;
  }
  
  function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Example on Task 4:
  const products: Product[] = [
    { name: "T-shirt", price: 15.0 },
    { name: "Hat", price: 5.0 },
    { name: "Shoes", price: 42.0 },
  ];
  console.log("Total Price:", calculateTotalPrice(products)); 
  
  // Task 5:
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Example usage for Task 5:
  console.log(isValidEmail("raghad@gmail.com")); 
  console.log(isValidEmail("raghad-email")); 
  