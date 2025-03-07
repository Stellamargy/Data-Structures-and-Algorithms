// function reverseString(str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     const character = str.charAt(i);
//     reversedString = reversedString + character;
//   }
//   return reversedString;
// }
// console.log(reverseString("Hello"));


// convert the string to an array  using split 
// reverse the array using reverse() ,
// join the items in the array using join ()

const reversedString = (str)=>str.split("").reverse().join("")
console.log(reversedString("Stella"))

