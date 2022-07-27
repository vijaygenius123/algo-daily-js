function inversions(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if(list[i] > list[j]) count++;
        }
    }
    return count;
}

module.exports = inversions;
