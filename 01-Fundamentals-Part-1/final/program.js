// Fibonacci number

// A fibonacci is a sequencce of numbers where each number is the sum of the previous 2 numbers

// op: 0,1,1,2,3,5,8,13

// function fibo(n) {
//     let a = 0, b = 1
//     let result = []
//     for (let i = 0; i < n; i++) {
//         result.push(a)
//         let next = a + b
//         a = b
//         b = next
//     }
//     return result
// }

// console.log(fibo(6))


// Recursive
// function fibonacciRecursive(n) {
//     if (n <= 1) return n;
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }


// console.log(fibonacciRecursive(6))




// Factorial 
// the product of all positive integers from 1 up to a given number (n)

// n! = n * (n-1) * (n-2) * ... * 1

//op 5! = 5 * 4 * 3 * 2 * 1

// function factorial(n) {
//     if (n < 0) return "Invalid number"
//     let result = 1
//     for (let i = 1; i <= n; i++) {
//         result *= i
//         console.log(result)
//     }
//     return result
// }


// function factorial1(n) {
//     if (n < 0) return "Invalid number"
//     let result = 1
//     for (let i = n; i >= 1; i--) {
//         result *= i
//         console.log(result)
//     }
//     return result
// }

// console.log(factorial(5))

// console.log(factorial1(5))


// Recursive
// function factorialRecursive(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorialRecursive(n - 1);
// }

// console.log(factorialRecursive(5)); // 120



// 3. Remove duplicates from an array or Array of object with some Key as unique (using loop or filter method)
//  Input: [1, 2, 2, 3, 4, 4]
//  Output: [1, 2, 3, 4]

// function removeDuplicates(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }


// console.log(removeDuplicates([1, 2, 3, 4, 4, 5]))


// Using filter method

// function removeDuplicatesFilter(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index)
// }

// console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4]));


// 3️⃣ Best & Optimized Way – Using Set ⭐
// function removeDuplicatesSet(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4]));




// For Objects remove duplicates
// const users = [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" },
//     { id: 1, name: "A" },
//     { id: 3, name: "C" }
// ];

// function uniqueByKeyLoop(arr, key) {
//     let map = {};
//     let result = [];

//     for (let item of arr) {
//         if (!map[item[key]]) {
//             map[item[key]] = true;
//             // console.log(map)
//             result.push(item);
//         }
//     }
//     return result;
// }

// console.log(uniqueByKeyLoop(users, "id"));


// using Filter
// function uniqueByKeyFilter(arr, key) {
//   return arr.filter(
//     (item, index, self) =>
//       index === self.findIndex(obj => obj[key] === item[key])
//   );
// }

// console.log(uniqueByKeyFilter(users, "id"));
