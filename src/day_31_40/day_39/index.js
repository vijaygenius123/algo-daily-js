function maxProductOfThree(unsorted) {
    let start = 0, end = unsorted.length - 1, result = 1, count = 0
    const sorted = unsorted.sort((a, b) => a - b)
    while (start < end) {
        if (count === 3) break
        if ((Math.abs(sorted[start]) > Math.abs(sorted[end])) || result < 0) {
            result *= sorted[start];
            start++;
            count++;
        } else {
            result *= sorted[end];
            end--;
            count++;
        }
    }
    return result;
}

module.exports = maxProductOfThree
