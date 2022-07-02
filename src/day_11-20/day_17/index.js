function missingNumbers(numArr) {
    let missing = [];
    for (let i = numArr[0]; i <= numArr[numArr.length-1]; i++){
        if(numArr.indexOf(i) === -1)
            missing.push(i);
    }
    return missing;
}

module.exports = missingNumbers
