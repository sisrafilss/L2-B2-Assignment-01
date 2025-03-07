// soution 1
type numberOrStringType = number | string;
function tsTestFunction(param: numberOrStringType): numberOrStringType {
  if (typeof param === "string") return param.length;
  else return param * param;
}

// solution 2
interface Person {
  name: string;
  phone?: number;
  address?: {
    city: string;
    street: string;
  };
}
function getAddressCity(person: Person) {
  return person?.address?.city;
}

// solution 3
class Cat {
  constructor(public name: string, public age: number) {}
}
function isCat(cat: object) {
  if (cat instanceof Cat) console.log("yes, it's a cat");
  else console.log("no, it's not a cat.");
}

// solution 4
type mixedDataType = (number | string)[];
function calulateSum(mixedData: mixedDataType): number {
  let sum = 0;
  mixedData.forEach((item: number | string) => {
    if (typeof item === "number") sum += item;
  });
  return sum;
}

// solution 5
interface Car {
  make: string;
  model: string;
  year: number;
}
interface Driver {
  name: string;
  licenseNumber: string;
}
function combineCarAndDriver(car: Car, driver: Driver): Car & Driver {
  return { ...car, ...driver };
}

// solution 6
const checkArrayType = (param: unknown) => {
  if (Array.isArray(param) && param.every((item) => typeof item === "number")) {
    const sum = param.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum;
  } else {
    console.log("Provided data is wrong!");
  }
};

// solution 7
function findFirstOccurrence<T>(arr: T[], searchKey: T) {
  return arr.findIndex((item) => item === searchKey);
}

// solution 8
interface Product {
  name: string;
  price: number;
  quantity: number;
}

const totalCost = (products: Product[]) => {
  let total = 0;
  products.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};
