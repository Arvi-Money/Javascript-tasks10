// // Task - 1
// let words = "apple, girl, name";

// function reverseString(arg) {
//     let arr = arg.split('');
//     let reversedArr = arr.reverse();
//     let reversedStr = reversedArr.join('');
    
//     return reversedStr;
//   }
  
//   // Example usage

//   console.log(reverseString(words));
  


// // Task - 2
// let sentence = "Find the longest word";

// function findLongestWord(arg) {
//     let words = arg.split(' ');
//     let longestWord = '';

//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
    
//     return longestWord;
//   }
  
//   console.log(findLongestWord(sentence)); 
  


// // Task - 3
// let sentence = "Count the vowels";
// const letters = sentence.split("");
// let vowels = ["a", "i", "o", "e", "u"];
// let counter = 0;

// function CountVowels(arg) {
//     for (const value of letters){
//         if(vowels.indexOf(value) != -1){
//             counter++
//         }
//     }
//     return counter
// }

// console.log(CountVowels(sentence));



// // Task - 4
// let words = prompt("Enter word");

// function PalindromeWords(arg) {
//     let reverseWord = Array.from(words).reverse().join("");

//     if(words == reverseWord){
//         return "It's palindrome word"
//     }
//     else{
//         return "It isn't palindrome word"
//     }

// }
// console.log(PalindromeWords(words));



// // Task - 5
// const array = [1, 2, 3, 2, 3];

//    function removeDuplicates(arr) {
//     let newArray = [];
//     for (let i of arr) {
//         if (newArray.indexOf(i) === -1) {
//             newArray.push(i);
//         }
//     }
//      return newArray
// }

// console.log(removeDuplicates(array));



// // Task - 6
// let sentence = "hi barbie";

// function capitalizeWords(arg) {
//     let letters = sentence.split(" "); 
//         for (let i = 0; i < letters.length; i++) {
//             letters[i] = letters[i][0].toUpperCase() + letters[i].substring(1);
//     }
    
//     let capitalizedSentence = letters.join(" ");
//     console.log(letters);
//     return capitalizedSentence;
//   }
//   console.log(capitalizeWords(sentence)); 
  


// // Task - 7
// let nums = [1, 2, 4, 6, 3, 7, 8, 10, 5];

// function findMissingNumber(arr) {
//     let n = arr.length + 1;
//     let totalSum = (n * (n + 1)) / 2;
//     let arraySum = arr.reduce((sum, num) => sum + num, 0);
//     return totalSum - arraySum;
//   }
  

//   console.log(findMissingNumber(nums)); //9
  
  