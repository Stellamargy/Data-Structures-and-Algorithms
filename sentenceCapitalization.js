const sentenceCapitalization=(str)=>str.lowercase().split(' ').map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(" ");
console.log(sentenceCapitalization("hi, my name is stella margy"))