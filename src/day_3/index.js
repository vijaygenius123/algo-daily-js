function isAlphabet(char) {
    return new RegExp(/[a-zA-Z]/).test(char)
}

function reverseOnlyAlphabetical(str) {
    let arr = str.split('');
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (isAlphabet(arr[start]) && isAlphabet(arr[end])) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        } else if (!isAlphabet(arr[start])) start++;
        else if (!isAlphabet(arr[end])) end--;
        else {
            start++;
            end--;
        }
    }
    return arr.join('');
}

module.exports = reverseOnlyAlphabetical
