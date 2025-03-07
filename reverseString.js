function reverseString(str){
    let reversedString=""
    for(let i=(str.length-1) ; i>=0 ; i--){
        const character=str.charAt(i)
        reversedString = reversedString + character
        // console.log(reversedString)
       
    }
    
    // console.log(reversedString)
    return reversedString

}
console.log(reverseString("Margy"))
