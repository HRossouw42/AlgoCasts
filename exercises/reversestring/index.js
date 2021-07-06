// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// my original solution
function reverse(str) {
  let reversed = [];

  //important to get the i in there too when it's zero since arrays start at `0`
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
}

// Built in methods
function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
}

// or as a oneliner
function reverse(str) {
  return str.split("").reverse().join("");
}

//adding to array from front
function reverse(str) {
  let reversed = [];

  for (let char in str) {
    reversed.unshift(str[char]);
  }
  return reversed.join("");
}

// purely with strings
function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// using array.reducer
function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

// simplified syntax
function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;
