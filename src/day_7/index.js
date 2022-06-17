function majorityElement(nums) {
    const len = Math.floor(nums.length / 2)
    return nums.reduce((prev, curr) => {
            if(prev[curr] >= len)  return curr
            if (!prev[curr]) {
                return {
                    ...prev,
                    [curr]: 1
                }
            } else {
                return {
                    ...prev,
                    [curr]: prev[curr] + 1
                }
            }
        }
        , {})
}

module.exports = majorityElement
