// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// iterate through, check character on left
function capitalize(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || str[i - 1] === undefined) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;

// // mine
// function capitalize(str) {
//   const arr = str.split(" ");
//   const capitalized = [];

//   for (let word of arr) {
//     let newWord = word.slice(0, 1).toUpperCase() + word.slice(1);
//     capitalized.push(newWord);
//   }
//   return capitalized.join(" ");
// }

// // refactored
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
// }
