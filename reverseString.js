function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join it back into a string
  return str.split('').reverse().join('');
}

// Example usage:
const myString = "Example Text Here";
const reversedString = reverseString(myString);
console.log(reversedString); // Output: "!dlroW ,olleH"
