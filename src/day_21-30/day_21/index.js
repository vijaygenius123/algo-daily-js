function subarraySum(nums, n) {
    let sumsMap = {0: 1}; // hash of prefix sums
    let sum = 0;
    for (let num of nums) {
        sum += num; // increment current sum
        if (sumsMap[sum - n]) {
            return true;
        }
        // store sum so far in hash with truthy value
        sumsMap[sum] = true;
    }
    return false;
}

module.exports = subarraySum
