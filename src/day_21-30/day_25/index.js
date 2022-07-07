function twoSum(arr, goal) {
    const results = [];
    const hash = {};

    for(let idx in arr){
        const difference = goal - arr[idx];
        if(Object.hasOwn(hash, arr[idx])){
            results[0] = parseInt(hash[arr[idx]]);
            results[1] = parseInt(idx);
        } else {
            hash[difference] = idx;
        }
    }
    return results;
}

module.exports = twoSum;
