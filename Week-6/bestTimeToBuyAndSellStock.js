	function bestTimeTOBuySellStock(priceArray) {
        const n = priceArray.length;
		if (n === 1)
			return "0 (Prices must be given for at least two days)";

		// iterating over given price array
        let i, buy, sell = 0;
		while (i < n - 1) {

			// comparing present element to the next element
			while ((i < n - 1) && (priceArray[i + 1] <= priceArray[i]))
				i++;

			// reached the end => no further solution possible => break;
			if (i === n - 1)
				break;

			// Store minimum price index
			buy = i++;

			// comparing to previous element
			while ((i < n) && (priceArray[i] >= priceArray[i - 1]))
				i++;

			// Store max price index
			sell = i - 1;

		}
        const returns = priceArray[sell] - priceArray[buy];
        return `Buy on day ${buy + 1} and sell on ${sell + 1} | estimated returns = ${returns}`;
	}

	// Driver code

	// Stock prices on consecutive days
	let inputArray = [100, 180, 260, 310, 40, 535, 695];

	// Function call
	console.log(bestTimeTOBuySellStock(inputArray)); //?Buy on day 5 and sell on 7 | estimated returns = 655

//? Time Complexity = O(n);
//The outer loop runs till I become n-1. The inner two loops increment the value of I in every iteration.
//So overall time complexity is O(n)
//? Space Complexity = O(1)