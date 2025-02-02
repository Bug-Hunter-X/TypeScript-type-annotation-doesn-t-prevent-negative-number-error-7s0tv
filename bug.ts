function printNumber(num: number): void {
  if (num < 0) {
    throw new Error('Number must be non-negative');
  }
  console.log(num);
}

printNumber(5); // Works fine
printNumber(-5); // Throws an error