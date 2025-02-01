function deepCompare(obj1: any, obj2: any): boolean {
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!obj2.hasOwnProperty(key) || !deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

//Example Usage
const obj1 = { a: 1, b: { c: 3 } };
const obj2 = { a: 1, b: { c: 3 } };
const obj3 = { a: 1, b: { c: 4 } };
const obj4 = { a: 1, b: { c: 3 }, d: () => {} };

console.log(deepCompare(obj1, obj2)); // true
console.log(deepCompare(obj1, obj3)); // false
console.log(deepCompare(obj1, obj4)); // false