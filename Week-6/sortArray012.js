// aim - to sort an array of 0s, 1s and 2s into ascending order.

	function sortArray012(arr)
	{
		let low = 0;
		let high = arr.length - 1;
		let mid = 0;
		let temp = 0;
		while (mid <= high)
		{
			// If the element is 0
			if(arr[mid] === 0)
			{
				temp = arr[low];
				arr[low] = arr[mid];
				arr[mid] = temp;
				low++;
				mid++;
			}
			// If the element is 1
			else if(arr[mid] === 1)
			{
				mid++;
			}
			// If the element is 2
			else
			{
				temp = arr[mid];
				arr[mid] = arr[high];
				arr[high] = temp;
				high--;
			}
			
		}
        return arr;
	}
	
	/*input*/
	let arr= [0, 2, 1, 2, 0];
	
	console.log(sortArray012(arr));
	
//? Time Complexity = O(n)
//? Space Complexity = O(1)