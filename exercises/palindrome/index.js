// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My original solution
function palindrome(str) {
  const arr = str.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] != arr[i]) {
      return false;
    }
  }

  return true;
}

//ideal solution
function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

// using Array.each()
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
