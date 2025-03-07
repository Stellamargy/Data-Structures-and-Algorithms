const palindromeString = (str)=>{
    const reversedString=str.split('').reverse().join('');
    const isPalindromeString = reversedString === str ? true:false;
    return isPalindromeString;
    

}
//test
// console.log(palindromeString("Stella"))