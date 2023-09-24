function countSpaces(str) {
  // Split the string by spaces and count the resulting segments
  const spaceCount = str.split(' ').length - 1;

  return spaceCount;
}

// Example usage:
const myString = "K R $ S N A";
const spaces = countSpaces(myString);
console.log("Number of spaces:", spaces); // Output: Number of spaces: 6
