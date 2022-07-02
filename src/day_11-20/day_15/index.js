function maxOfMinPairs(nums) {
    const sortedPairs = nums.sort();
    let pairs = [];
    for (let i = 0; i < sortedPairs.length; i += 2) {
        pairs.push([sortedPairs[i], sortedPairs[i + 1]]);
    }
    return pairs.reduce((prev, curr) => prev + curr[0], 0);
}

module.exports = maxOfMinPairs
