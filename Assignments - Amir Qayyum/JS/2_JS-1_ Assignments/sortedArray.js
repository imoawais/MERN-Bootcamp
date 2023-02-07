function arraySortedOrNot(arr, n)
{

	if (n == 1 || n == 0)
		return 1;

	if (arr[n - 1] < arr[n - 2])
		return 0;

	return arraySortedOrNot(arr, n - 1);
}

let arr = [ 20, 23, 23, 45, 78, 88 ];
let n = arr.length;

if (arraySortedOrNot(arr, n) != 0)
	console.log("Yes");
else
	console.log("No");


