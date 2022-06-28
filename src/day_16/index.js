function missingInUnsorted(arr, lowerBound, upperBound) {
    // fill in this method
    let total = (upperBound * (upperBound - 1) / 2) - (lowerBound * (lowerBound - 1) / 2) - lowerBound;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lowerBound && arr[i] < upperBound) {
            total -= arr[i];
        }
    }
    return total;
}

module.exports = missingInUnsorted;
