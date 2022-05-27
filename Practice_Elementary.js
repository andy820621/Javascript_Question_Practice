// Simple Exercise II

// 1. Write a function called "stars" which prints out layers of stars in the following pattern:
// stars(1);
// console.log(`--------`);
// // *
// stars(4);
// console.log(`--------`);
// // *
// // **
// // ***
// // ****
function stars(n) {
	for (let i = 0; i <= n; i++) {
		let value = "";
		for (let j = 0; j < i; j++) {
			value += "*";
		}
		console.log(value);
	}
}

// 2. Write a function called "makeStars" which prints out stars in the following pattern:
// makeStars(1); // *
// console.log(`---------`);
// makeStars(2); // *\n**
// console.log(`---------`);
// makeStars(5); // *\n**\n***\n****\n*****
// console.log(`---------`);
function makeStars(number) {
	let result = "*";
	let add = "\n*";
	for (let i = 1; i < number; i++) {
		add += "*";
		result += add;
	}
	console.log(result);
}

// 3. Write a function called "stars2" which prints out layers of stars in the following pattern:
// stars2(1);
// *
// stars2(2);
// *
// **
// *
// stars2(3);
// *
// **
// ***
// **
// *
// stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *
function stars2(n) {
	let value = "";
	for (let i = 0; i < n; i++) {
		value += "*";
		console.log(value);
	}
	for (let i = 0; i < n - 1; i++) {
		value = value.slice(0, -1);
		console.log(value);
	}
}

// 4. Write a function called "table" which takes an input n, and prints out n x 1 to n x 9
// table(3);
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 9 = 27
function table(n) {
	for (let i = 1; i <= 9; i++) {
		console.log(`${n} x ${i} = ${n * i}`);
	}
}

// 5. Write a function called "table9to9" that prints out the multiplication table:
// table9to9();
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ...
// 1 x 9 = 9
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 9 x 9 = 81
function table9to9() {
	for (let i = 1; i <= 9; i++) {
		for (let j = 1; j <= 9; j++) {
			console.log(`${i} x ${j} = ${i * j}`);
		}
	}
}

// 6. Write a function called "fib" that takes an integer $n$ as input, and returns the $n$th element of the Fibonacci Sequence.
// console.log(fib(0)); // returns 0
// console.log(fib(1)); // returns 1
// console.log(fib(2)); // returns 1
// console.log(fib(3)); // returns 2
// console.log(fib(8)); // returns 21
// console.log(fib(24)); // returns 46368

// version recursive function (Fastest execution, but the browser will crash when the parameter is too large)
// function fib(number) {
// 	if (number == 0 || number == 1) {
// 		return number;
// 	}
// 	return fib(number - 1) + fib(number - 2);
// }

// version while (favorite version)
function fib(number) {
	let array = [0, 1];
	let i = 0;
	while (array.length <= number) {
		array.push(array[i] + array[i + 1]);
		i++;
	}
	console.log(array[number]);
}

// version if (a little strange because code by myself)
// function fib(number) {
// 	let n1 = 0,
// 		n2 = 1,
// 		nextInt;
// 	for (let i = 1; i <= number; i++) {
// 		nextInt = n1 + n2;
// 		n1 = n2;
// 		n2 = nextInt;
// 	}
// 	console.log(n1);
// }

// 7. Write a function called "reverse" that takes a string as input, and returns the reverse string.
// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a am I"
function reverse(value) {
	let result = "";
	for (let i = 1; i <= value.length; i++) {
		result += value[value.length - i];
	}
	console.log(result);
	return result;
}

// 8. Write a function called "swap" that takes a string as input, and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.
// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."
function swap(value) {
	let result = "";
	for (let i = 0; i < value.length; i++) {
		result +=
			value[i] === value[i].toUpperCase()
				? value[i].toLowerCase()
				: value[i].toUpperCase();
	}
	console.log(result);
	return result;
}

// 9. Write a function called "findMin" which takes an array as input, and returns the minimum element in the input array.
// findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
// findMin([]); // returns undefined
// findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10
function findMin(array) {
	let min = array[0];
	for (let value of array) {
		if (value < min) min = value;
	}
	console.log(min);
	return min;
}

// 10. Write a function called "findNthMin", which takes an array of integers and another integer n, and returns the nth smallest number in the given array.
// findNthMin([1, 2, 3, 4, 5], 1); // returns 1
// findNthMin([1, 3, 5, 7, 9], 3); // returns 5
// findNthMin([2, -6, -3, 4, 8], 3); // returns 2

function findNthMin(array, int) {
	let min;
	while (int > 0) {
		min = array[0];
		for (let value of array) {
			if (value < min) min = value;
		}
		array.splice(array.indexOf(min), 1);
		int--;
	}
	console.log(min);
	return min;
}

// willson version
// function findNthMin(arr, n) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let count = 0;
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j] < arr[i]) count++;
// 		}
// 		if (count == n - 1) return arr[i];
// 	}
// }
