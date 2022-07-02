function intersection(nums1, nums2){
    let result = []
    const nums = nums1.reduce((prev, curr) => {
        return {
            ...prev,
            [curr] : true
        }
    }, {})
    for(let i =0; i< nums2.length; i++){
        if(nums2[i] in nums) result.push(nums2[i])
    }
    return result
}

module.exports = intersection
