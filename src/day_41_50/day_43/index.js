function stockOptimizer(prices) {
    let min = prices[0], profit = 0;
    for(let i=1; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        if(profit < prices[i] - min){
            profit = prices[i] - min;
        }
    }
    return profit;
}

module.exports = stockOptimizer
