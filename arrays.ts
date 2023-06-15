function maxSumWithOddDigitSum(numbers: number[]): number {
    let maxSum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      const num1 = numbers[i];
  
      for (let j = i + 1; j < numbers.length; j++) {
        const num2 = numbers[j];
  
          const sum = num1 + num2;
          if (sum > maxSum && hasOddDigitSum(sum)) {
            maxSum = sum;
          }
      }
    }
  
    return maxSum;
}
  
function hasOddDigitSum(input: number): boolean {
return input % 2 !== 0;
}
  
var x2 = maxSumWithOddDigitSum([19, 2, 42, 18]);
console.log(x2);
console.log(x2 === 61);

var z2 = maxSumWithOddDigitSum([61, 32, 51]);
console.log(z2);
console.log(z2 === 93);

// tested on https://www.typescriptlang.org/play