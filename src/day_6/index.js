function majorityElement(nums) {
    return nums.sort()[Math.floor(nums.length / 2)]
}

module.exports = majorityElement
