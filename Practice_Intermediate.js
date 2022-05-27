// Intermediate Exercise

// 1. Write a function called "mySort" that takes an array of integers as input, and returns the sorted version of the input array.
// mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]
function mySort(array) {
	let newArray = [array[0]];
	while (array.length > 0) {
		array.splice(0, 1);
		let compare = array[0];
		for (let i = 0; i < newArray.length; i++) {
			if (compare <= newArray[i]) {
				newArray.splice(i, 0, compare);
				break;
			}
		}
	}
	console.log(newArray);
	return newArray;
}

// 2. Write a function called "isPrime" that takes an integer as input, and returns a boolean value that indicates if the input number is prime.
// isPrime(1); // returns false
// isPrime(5); // returns true
// isPrime(37); // returns true
// isPrime(57); // returns false
// isPrime(79); // returns true
// isPrime(91); // returns false
// isPrime(1000000); // returns false
function isPrime(value) {
	let result = true;
	if (value == 1) result = false;
	for (let i = 2; i < value; i++) {
		if (value % i == 0) {
			result = false;
			break;
		}
	}
	console.log(result);
	return result;
}

// 3. Write a function called "confirmEnding" that takes 2 strings as input, and returns a boolean value that indicates if the first input ends with the second input.
// confirmEnding("Bastian", "n"); // true
// confirmEnding("Connor", "n"); // false
// confirmEnding("Open sesame", "same"); // true
function confirmEnding(s1, s2) {
	let checkLength = s2.length;
	let checkWord = s1.slice(-checkLength);
	let checkBoolean = true;
	let i = 0;
	do {
		if (checkWord[i] !== s2[i]) {
			checkBoolean = false;
			break;
		}
		i++;
	} while (i < checkWord.length - 1);
	console.log(checkBoolean);
}

// 4. Write a function called "findDuplicate" that an array of integers as inputs, and check if there's any duplicate values in the array.
// findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
// findDuplicate([]); // returns false
// findDuplicate([3, 4, 5, 6, 7, 10000, 0]); // returns false
function findDuplicate(array) {
	for (let i = 0; i < array.length; i++) {
		let check_1 = array[i];
		for (let j = 0; j < array.length; j++) {
			if (i == j) continue;
			let check_2 = array[j];
			if (check_1 === check_2) {
				console.log(true);
				return true;
			}
		}
	}
	console.log(false);
	return false;
}

// 5. Write a function called "palindrome" that checks if the input string is a palindrome. (Search on google if you don't know what a palindrome is.)
// palindrome("bearaeb"); // true
// palindrome("Whatever revetahw"); // true
// palindrome("Aloha, how are you today?"); // false
function palindrome(value) {
	let i = 0,
		j = value.length - 1;
	while (i < j) {
		if (value[i].toUpperCase() !== value[j].toUpperCase()) {
			console.log(false);
			return false;
		}
		i++;
		j--;
	}
	console.log(true);
	return true;
}

// 6. Write a function called "pyramid" that takes an integer as input, and prints a pyramid in the following pattern:
// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******
function pyramid(n) {
	let i = 0;
	let initial = n;
	let baseStar = "*";
	while (i < n) {
		initial--;
		let stars = "";
		for (let j = 0; j < initial; j++) {
			stars += " ";
		}
		for (let k = 0; k < i; k++) {
			stars += "**";
		}
		stars += baseStar;
		console.log(stars);
		i++;
	}
}

// 7. Write a function called "inversePyramid" that draws pyramid upside down.
// inversePyramid(4);
// // *******
// //  *****
// //   ***
// //    *
function inversePyramid(n) {
	let max = n * 2 - 1;
	let i = 0;
	while (i < n) {
		let stars = "";
		for (let j = 0; j < i; j++) {
			stars += " ";
		}
		for (let k = 0; k < max; k++) {
			stars += "*";
		}
		console.log(stars);
		max -= 2;
		i++;
	}
}
