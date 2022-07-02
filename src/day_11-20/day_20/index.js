function uniques(array) {
    // Fill in this method
    for (let i = 0; i < array.length; i++) {
        while (array.indexOf(array[i], i + 1) !== -1) {
            array.splice(array.indexOf(array[i], i + 1), 1);
        }
    }
    return array;
}

module.exports = uniques
