// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my original solution
function reverseInt(n) {
  //  determine symbol (-)
  let symbol = n > 0 ? 1 : -1;
  if (symbol === -1) {
    n = n * -1;
  }
  // reverse number by turning it into an array and using reverse helper
  const reversed = Array.from(String(n), Number).reverse().join("");
  // parse array into number, base 10 to prevent errors with '0'
  let newNumber = parseInt(reversed, 10);
  if (newNumber !== 0) {
    newNumber = newNumber * symbol;
  }

  return newNumber;
}

// refactored
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
