function swap(arr, firstIdx, secIdx) {
    let temp = arr[firstIdx];
    arr[firstIdx] = arr[secIdx];
    arr[secIdx] = temp;
}

function leastMissingPositive(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            swap(nums, i, nums[i] - 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== i + 1){
            return i + 1;
        }
    }

    return nums.length + 1;
}

module.exports = leastMissingPositive
