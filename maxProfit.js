const maxProfit = (arrOfStockPrices) =>{
    // Assuming the minPrice
    let minPrice=arrOfStockPrices[0];
    let maxProfit =0;
    for (let i =1 ; i<arrOfStockPrices.length ; i++){
        const currentPrice=arrOfStockPrices[i];
        // console.log(currentPrice)
        // console.log(minPrice,currentPrice)
        minPrice=Math.min(minPrice,currentPrice)
        const potentialProfit = currentPrice - minPrice
    //    console.log(potentialProfit)

       maxProfit = Math.max(maxProfit,potentialProfit)
       
        
    }
    return maxProfit
}

console.log(maxProfit([7,4,8,1]))