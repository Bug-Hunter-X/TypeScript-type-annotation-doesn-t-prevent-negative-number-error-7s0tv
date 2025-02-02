function printNumber(num: number): void {
  if (num < 0) {
    throw new Error('Number must be non-negative');
  }
  console.log(num);
}

//This is incorrect as the type annotation should prevent this. 
printNumber(5); // Works fine
printNumber(-5); // Throws an error

//Solution
function printNumberSafe(num: number): void {
  if (num < 0) {
    throw new Error('Number must be non-negative');
  }
  console.log(num);
}

//Improved type annotation prevents the issue
function printNumberImproved(num: number): asserts num >=0{
  if (num < 0) {
    throw new Error('Number must be non-negative');
  }
}

let x:number = 5
printNumberImproved(x)
console.log(x)

let y:number = -5
//printNumberImproved(y) //This throws error at compile time
console.log(y)