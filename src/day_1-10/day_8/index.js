function lonelyNumber(numbers) {

    let result = 0;
        numbers.forEach(num => result ^= num)
    return result
    // const numsObj = numbers.reduce((prev, curr) => {
    //     if (prev[curr]) {
    //         return {
    //             ...prev,
    //             [curr]: prev[curr] + 1
    //         }
    //     } else {
    //         return {
    //             ...prev,
    //             [curr]: 1
    //         }
    //     }
    // }, {})
    // return parseInt(Object.entries(numsObj).filter(num => num[1] === 1)[0], 10)
}

module.exports = lonelyNumber
