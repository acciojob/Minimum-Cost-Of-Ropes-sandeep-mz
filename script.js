function calculateMinCost() {
  // Get the input element
  let inputElement = document.getElementById("input");

  // Get the result element
  let resultElement = document.getElementById("result");

  // Get the input value as a comma-separated string
  let input = inputElement.value;

  // Parse the input string to extract rope lengths as an array of integers
  let ropeLengths = input.split(",").map(Number);

  // Initialize a variable to store the total cost
  let totalCost = 0;

  // Convert the ropeLengths array into a Priority Queue (Min Heap)
  let minHeap = new MinHeap(ropeLengths);

  // Continue until there is more than one rope left
  while (minHeap.size() > 1) {
    // Remove the two smallest ropes from the heap
    let rope1 = minHeap.extractMin();
    let rope2 = minHeap.extractMin();

    // Calculate the cost of connecting the two ropes and add it to totalCost
    let cost = rope1 + rope2;
    totalCost += cost;

    // Insert the newly formed rope back into the heap
    minHeap.insert(cost);
  }

  // Display the result in the result element
  resultElement.textContent = `Minimum Cost: ${totalCost}`;
}
