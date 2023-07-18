function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word)
  if (word === reverseString(word)) {
  return true
  }
  else {
    return false
  }
};

function reverseString(word) {
  let splitString = word.split("");
  let reverseString = splitString.reverse();
  let glueLetters = reverseString.join("");
  return glueLetters;
}

/* 
  Add your pseudocode here
 reverse the input string
 if the reversed string is same as the input string (backwards)
 return true
 otherwise return false
  */

/*
  Add written explanation of your solution here
  function 'reverseString' splits the letters of the string apart into an array
  and then reverses the array so that the orginial string is now backwards,
  it then rejoins the seperate letters in the array back into a reversed verion 
  of the original input string.

  Then the function 'isPalindrome' checks to see if the original
  input string and the newly returned input sting are a palindrome
  and returns true if so, otherwise returns false.

  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
