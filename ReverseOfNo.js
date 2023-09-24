function reverseNumber(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Reverse the string
  const reversedStr = numStr.split('').reverse().join('');

  // Convert the reversed string back to a number
  const reversedNum = parseInt(reversedStr);

  return reversedNum;
}

// Example usage:
const originalNumber = 12345;
const reversed = reverseNumber(originalNumber);
console.log(reversed); // Output: 54321
