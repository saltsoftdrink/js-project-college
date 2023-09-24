function countVowels(str) {
  // Use a regular expression to match all lowercase and uppercase vowels
  const matches = str.match(/[aeiouAEIOU]/g);

  // If matches is null (no vowels found), return 0; otherwise, return the count of matches
  return matches ? matches.length : 0;
}

// Example usage:
const myString = "Hello Nigga! My Name is Samyak Bumb";
const vowelCount = countVowels(myString);
console.log("Number of vowels:", vowelCount); // Output: Number of vowels: 8
