function sortedTwoSum(nums, goal) {
    let start = 0, end = nums.length - 1;
    while (start < end){
       const sum = nums[start] + nums[end];
        if(sum < goal){
            start++;
        } else if (sum > goal){
            end--;
        } else {
            return [start, end];
        }
    }
    return [];
}

module.exports = sortedTwoSum
