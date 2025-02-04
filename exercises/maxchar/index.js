// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// original solution
// function maxChar(str) {
//   const chars = {};

//   for (let char of str) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }

//   let bigChar = "";
//   let bigNum = 0;
//   for (let char in chars) {
//     if (chars[char] > bigNum) {
//       bigNum = chars[char];
//       bigChar = char;
//     }
//   }

//   return bigChar;
// }

// refactored
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
    // alternatively:
    // boolean expression
    // define chars[c] as incrementing by 1 but if its valsy (aka undefined), make it 1
    // charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
