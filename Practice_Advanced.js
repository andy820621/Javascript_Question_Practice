// Advanced Exercise

// 1. Write a function called "factorPrime" that takes an integer as input, and returns the prime factorization of the input.
// factorPrime(120);
// factorPrime(3064);
function factorPrime(number) {
	let answer = number + " = ";
	let prime = 2;
	while (prime <= number) {
		if (number % prime === 0) {
			number /= prime;
			answer += prime + " x ";
		}
		prime++;
	}
	answer = answer.slice(0, -3);

	console.log(answer);
}
// 2. Write a function called "intersection" that takes 2 arrays, and returns an array of elements that are in the intersection of 2 arrays.
// intersection([1, 3, 4, 6, 10], [5, 1, 1, 4, 3, 100, 144, 0]); // returns [3, 4]
// intersection([3, 3, 3, 1, 3, 4, 6, 10], [3, 4, 3, 5, 11, 4, 3, 100, 144, 3]); // returns [3, 4]
function intersection(arr1, arr2) {
	let resultArray = [];
	for (let v1 of arr1) {
		for (let v2 of arr2) {
			if (v1 === v2) {
				let canPush = true;
				for (let value of resultArray) {
					if (v1 === value) canPush = false;
				}
				if (canPush) resultArray.push(v1);
			}
		}
	}
	console.log(resultArray);
	return resultArray;
}

// 3. Write a function called "flatten" that flattens an array.
// console.log(flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]));
// // returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]
function flatten(array) {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (Array.isArray(element)) {
			newArray.push(...flatten(element));
		} else {
			newArray.push(element);
		}
	}
	return newArray;
}

// 4. Write a function called "flattenObj" that flattens a object to number array.
// const obj = {
// 	a: 1,
// 	b: [2, 3],
// 	c: null,
// 	d: { e: 4 },
// 	f: [5, 6, { g: 7 }],
// };
// console.log(flattenObj(obj));
// expected output [1, 2, 3, 4, 5, 6, 7]

function flattenObj(obj) {
	const results = [];
	function search(obj) {
		switch (typeof obj) {
			case "object":
				if (obj == null) return;
				if (Array.isArray(obj)) obj.forEach((item) => search(item));
				else Object.keys(obj).forEach((key) => search(obj[key]));
				break;
			case "number":
				results.push(obj);
				break;
		}
	}
	search(obj);
	return results;
}
