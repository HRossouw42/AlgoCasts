// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// alternative
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// my first attempt
// function anagrams(stringA, stringB) {
//   const mapA = {};
//   const mapB = {};
//   let strA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   let strB = stringB.replace(/[^\w]/g, "").toLowerCase();

//   if (strA.length !== strB.length) {
//     return false;
//   }

//   for (let char of strA) {
//     if (mapA[char]) {
//       mapA[char] + 1;
//     } else {
//       mapA[char] = 1;
//     }
//   }

//   for (let char of strB) {
//     if (mapB[char]) {
//       mapB[char] + 1;
//     } else {
//       mapB[char] = 1;
//     }
//   }

//   for (let char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// refactored
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   console.log(aCharMap, bCharMap);
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }
