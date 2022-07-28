/**
 * @param {number[]} nums
 * @return {boolean}
 */
function maxLeaps(nums) {
    let current = 0;
    while(current < nums.length){
        if(nums[current] + current === nums.length) return true;
        current++;
    }
    return false;
}

module.exports = maxLeaps
