// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Alternative using .sort() solution
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    let lastChunk = chunked[chunked.length - 1];

    if (!lastChunk || lastChunk.length === size) {
      chunked.push([element]);
    } else {
      lastChunk.push(element);
    }
  }
  return chunked;
}

module.exports = chunk;

// first iteration
// function chunk(array, size) {
//   let chunked = [];

//   for (let element of array) {
//     const lastChunk = chunked[chunked.length - 1];

//     if (!lastChunk || lastChunk.length === size) {
//       chunked.push([element]);
//     } else {
//       lastChunk.push(element);
//     }
//   }
//   return chunked;
// }

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }
