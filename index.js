// 1 - reverse a string
// function reverse (strIn) {

//     let arrRev = []
//     for(let i = strIn.length - 1; i >= 0 ; i--){
//         arrRev.push(strIn[i])
//     }
//     //console.log(arrRev.join('')) // correction
//     //return arrRev.toString() // wrong
//     return arrRev.join('')
// }
// const test = 'Hello'
// console.log(reverse(test));

// 2 - how many jewels are stones

// givin a jewel, the match of one or more in a stone is considered a jewel

// function findJewels (jString, sString) {
//     let counter = 0
//     for(let i = 0 ; i < sString.length; i++){
//         for (let j = 0; j < sString.length; j++){
//             (sString[i]===jString[j])? counter++ : 0
//         }
//     }
//     return(counter)
// }
// console.log(findJewels("aA","aAAbbbb"))

// 3 - return an array of evens

// let arr = [5, 10, 20, 7, 9, 13]
// function retArrOfEvens (arr) {
//     let arrOfEvens = []
//     arr.map ((ele) => {
//         if (ele % 2 === 0)
//             arrOfEvens.push(ele)
//     })
//     return arrOfEvens
// }
// console.log(retArrOfEvens(arr))

// 4 - given an array of items called shopping list (milk, bread, eggs)
// and an array of items called cart (beer, chips, salsa, milk), creat a new list of items
// in shopping list that are not in cart.
// write a function that works for any 2 lists

// const shoppingList = ['milk','bread','eggs']
// const shoppingCart = ['beer', 'chips', 'salsa','milk']

// function missingItems (list, cart){

//     list.map((item) => {
//         if (!cart.includes(item))
//              missingItemsList.push(item)
//     })
//     return missingItemsList
// }
// let missingItemsList = []
// console.log('Missing List: ' + missingItems(shoppingList,shoppingCart))
// missingItemsList = []
// console.log('Missing List: ' + missingItems(shoppingCart,shoppingList))

// missingItemsList = []
// missingItemsList = shoppingList.filter(item => (!shoppingCart.includes(item)))
// console.log(missingItemsList)

// 5 - Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

// Example 1:

// Input:
// N = 5
// Arr[] = {15, 2, 45, 12, 7}
// Output: 2
// Explanation: Only Arr[2] = 2 exists here.
// Example 2:

// Input:
// N = 1
// Arr[] = {1}
// Output: 1
// Explanation: Here Arr[1] = 1 exists.

// Your Task:
// You don't need to read input or print anything.
// Your task is to complete the function valueEqualToIndex() which takes the array of
// integers arr[] and n as parameters and returns an array of indices where the given
// conditions are satisfied. When there is not such element exists then return an empty
// array of length 0.

// function valueEqualToIndex(arr, n) {
//     let output = []
//     for (let i=0; i < n; i++){
//         (arr[i] === i)? output.push(i) : 0
//     }
//     return output.join(',')
// }

// let n = 5, arr = [15, 9, 2, 12, 4]
// console.log(valueEqualToIndex(arr, n))

// n = 2, arr = [2, 1]
// console.log(valueEqualToIndex(arr, n))

// n = 9, arr = [0, 5, 3, 9, 6, 8, 12, 6, 10]
// console.log(valueEqualToIndex(arr, n))

// 6 - Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order.

// Example 1:

// Input :
// a[] = {2, 8, 7, 1, 5}
// Output :
// 1 2 5
// Explanation :
// The output three elements have two or
// more greater elements.
// Example 2:

// Input :
// a[] = {7, -2, 3, 4, 9, -1}
// Output :
// -2 -1 3 4

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function findElements() which takes the array A[] and its size N as inputs and return the vector sorted values denoting the elements in array which have at-least two greater elements than themselves.

// function findElements (arr, n){
//     arr.sort()
//     const max1 = arr.pop()
//     const max2 = arr.pop()
//     return (arr)
// }

// let arr = [2, 8, 7, 1, 5], n = 5
// console.log(findElements (arr, n))

// arr = [7, -2, 3, 4, 9, -1], n = 6
// console.log(findElements (arr, n))

// arr = [-10, -2, -5, -4, -9, -8], n = 6
// console.log(findElements (arr, n))

// 7 - given a string or number
// tell if it is a palindrome

// madam im adam (12)
// 120959021 (9)

// if the number of characters is even, compare the pairs (first,last)
// if the number is odd
// remove the spaces

// function isPalindrome (input){
//     const j = input.length - 1
//     for (let i=0; i < j ; i++){
//         if(input[i]!==input[j-i]){
//             return 'Not Palindrome'
//         }

//     }
//     return 'Palindrome'
// }

// let palindrome = '1209599021'

// console.log(isPalindrome(palindrome))

// 8 - Given a number N, for each integer I in the range from 1 to N inclusive, print one value per line as follows
//
// if I is a multiple of 3 and 5, print FizzBuzz
// if I is a multiple of 3 (but not 5), print Fizz
// if I is a multiple of 5 (but not 3), print Buzz
// if I is not a multiple of 3 or 5, print the value of I

// const n = 37

// for(let i=1; i <= n; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log('FizzBuzz')
//     } else {
//         if (i%3 === 0) {
//             console.log('Fizz')
//         } else {
//             if (i%5 === 0) {
//                 console.log('Buzz')
//             } else {
//                 console.log(i)
//             }
//         }
//     }
// }

// M D C L X V I
// 1000 500 100 50 10 5 1

// function romanValue(a) {
//   switch (a) {
//     case "M":
//       return 1000;
//     case "D":
//       return 500;
//     case "C":
//       return 100;
//     case "L":
//       return 50;
//     case "X":
//       return 10;
//     case "V":
//       return 5;
//     default:
//       return 1;
//   }
// }

// function romanToInt(s) {
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     j = i + 1;
//     const firstElem = romanValue(s[i]);
//     const nextElem = romanValue(s[j]);
//     // console.log(i, s[i], "=", firstElem, s[j], "=", nextElem);
//     if (firstElem < nextElem) {
//       sum += nextElem - firstElem;
//       i++;
//     } else {
//       sum += firstElem;
//     }
//     // console.log(sum);
//   }
//   return sum;
// }

// let s = "III";
// console.log(romanToInt(s));
// s = "LVIII"; // 58
// console.log(romanToInt(s));
// s = "MCMXCIV"; // 1994
// console.log(romanToInt(s));
