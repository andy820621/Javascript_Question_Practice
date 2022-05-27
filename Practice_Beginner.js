// Simple Exercise I
// 1. Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.
// printMany();
// // 1
// // 2
// // ...
// // 100
function printMany() {
	for (let i = 1; i <= 100; i++) {
		console.log(i);
	}
}
// 2. Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
// printEvery3();
// // 1
// // 4
// // ...
// // 88
function printEvery3() {
	for (let i = 1; i <= 88; i += 3) {
		console.log(i);
	}
}
// 3. Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
// stars(3); // ***
// stars(10); // **********
function stars(value) {
	let result = "";
	for (let i = 0; i < value; i++) {
		result += "*";
	}
	console.log(result);
	return result;
}
// 4. Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
// isUpperCase("ABCD"); // returns true
// isUpperCase(""); // returns false
// isUpperCase("aBCD"); // returns false
function isUpperCase(value) {
	if (typeof value == "string") {
		let result = value == "" ? false : value[0] === value[0].toUpperCase();
		console.log(result);
		return result;
	}
}
// 5. Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJKLm"); // returns false
function isAllUpperCase(value) {
	if (typeof value == "string") {
		let result = true;
		if (value === "") return false;
		for (let i = 0; i < value.length; i++) {
			if (value[i] !== value[i].toUpperCase()) return false;
		}
		return result;
	}
}
// 6. Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
// console.log(position("abcd")); // prints -1
// console.log(position("AbcD")); // prints A 0
// console.log(position("abCD")); // prints C 2
function position(value) {
	if (typeof value === "string") {
		for (let i = 0; i < value.length; i++) {
			if (value[i] === value[i].toUpperCase()) {
				return value[i] + " " + i;
			}
		}
		return -1;
	}
}
// 7. Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.
// findSmallCount([1, 2, 3], 2); // returns 1
// findSmallCount([1, 2, 3, 4, 5], 0); // returns 0
function findSmallCount(array, int) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < int) count++;
	}
	return count;
}
// 8. Write a function called "findSmallerTotal" that takes one array of integers and one integer as input, and returns the sum of all elements in the array that are smaller than the input integer.
// findSmallerTotal([1, 2, 3], 3) // returns 3
// findSmallerTotal([1, 2, 3], 1) // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999) // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0) // returns 0
function findSmallerTotal(array, int) {
	let initial = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < int) initial += array[i];
	}
	return initial;
}
// 9. Write a function called "findAllSmall" that takes one array of integers and another integer as input, and returns an array of integers that contains all elements that are smaller than the input integer.
// findAllSmall([1, 2, 3], 10); // returns [1, 2, 3]
// findAllSmall([1, 2, 3], 2); // returns [1]
// findAllSmall([1, 3, 5, 4, 2], 4); // returns [1, 3, 2]
function findAllSmall(array, int) {
	let smalls = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < int) smalls.push(array[i]);
	}
	return smalls;
}
// 10. Write a function called "sum" that takes one array of numbers, and return the sum of all elements in the input array.
// sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // returns 55
// sum([]); // return 0
// sum([-10, -20, -30]); // return -60
function sum(array) {
	let result = 0;
	for (let value of array) {
		result += value;
	}
	console.log(result);
	return result;
}
