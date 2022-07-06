function productExceptSelf(numArray) {
    const product = numArray.reduce(function (prev, curr){
        return prev * curr;
    }, 1);

    return numArray.map(function (num){
        return product/num;
    });
}

module.exports = productExceptSelf
