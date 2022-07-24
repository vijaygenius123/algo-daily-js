function shortestPalindrome(s) {
    let sArr = s.split(''), start = 0, end = sArr.length - 1, chars = {}, count = 0
    while (start < end) {
        if (sArr[start] === sArr[end]) {
            start++;
            end--;
        } else {
            chars[count + start] = sArr[end];
            count++;
            end--;
        }
    }
    Object.entries(chars).map(([idx, val]) =>
       sArr.splice(parseInt(idx, 10), 0, val)
    )
    return  sArr.join('');
}

module.exports = shortestPalindrome
