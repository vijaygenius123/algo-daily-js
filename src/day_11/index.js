function sumDigits(num) {
    if (num <= 9)
        return num;
    else {
        return sumDigits(num.toString().split('').reduce((prev, curr) => prev + parseInt(curr, 10), 0));
    }
}

module.exports = sumDigits
