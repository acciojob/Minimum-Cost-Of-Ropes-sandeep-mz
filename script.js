function minCostToConnectRopes(ropes) {
  // Sort the array in ascending order
  ropes.sort((a, b) => a - b);

  let totalCost = 0;

  while (ropes.length > 1) {
    // Take the two shortest ropes
    const shortest1 = ropes.shift();
    const shortest2 = ropes.shift();

    // Combine them and add the cost to the total
    const combined = shortest1 + shortest2;
    totalCost += combined;

    // Insert the combined rope back into the sorted array
    insertSorted(ropes, combined);
  }

  return totalCost;
}

// Helper function to insert an element into a sorted array
function insertSorted(arr, element) {
  let i = 0;
  while (i < arr.length && arr[i] < element) {
    i++;
  }
  arr.splice(i, 0, element);
}

// // Example usage:
// const ropes = [4, 2, 7, 6, 9];
// const minCost = minCostToConnectRopes(ropes);
// console.log(minCost); // Output: 62
