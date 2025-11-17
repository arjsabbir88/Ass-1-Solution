

function formatValue(
  value: string | number | boolean
): string | number | boolean | null {
  const checkValid =
    typeof value !== "string" &&
    typeof value !== "number" &&
    typeof value !== "boolean";

  if (checkValid) {
    return null;
  }

  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return false;
    } else {
      return true;
    }
  }
}









function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}














class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}









type Items = {
  title: string;
  rating: number;
};

function filterByRating(items: Items[]): Items[] {
  return items.filter(
    (item) =>
      !(
        item.rating < 0 ||
        item.rating > 5 ||
        typeof item.rating !== "number" ||
        typeof item.title !== "string"
      ) && item.rating >= 4
  );
}










type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: Users[]): Users[] {
  return users.filter((user) => user.isActive);
}









interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(b: Book) {
  console.log(
    `Title: ${b.title}, Author: ${b.author}, Published: ${b.publishedYear}, Available: ${b.isAvailable}`
  );
}








function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  function exits(value: string | number): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] == value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!exits(arr1[i])) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exits(arr2[i])) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}









type Products = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
}


function calculateTotalPrice(products: Products[]): number {

    if(products.length === 0){
        return 0;
    }

    return products.reduce((total, p) => {
        const productsPrice = p.price * p.quantity;
        const discount = p.discount ?? 0;
        const discountPrice = (productsPrice * discount) / 100;
        return total + (productsPrice - discountPrice);
    }, 0);
}


