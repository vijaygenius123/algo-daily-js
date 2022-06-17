
function isAlphaNumeric(c){
    return new RegExp(/[a-z0-9]/i).test(c)
}

function isPalindrome(str) {
    let strArr = str.split(''),
        start = 0,
        end = strArr.length - 1;
    while (start < end) {
        if(!isAlphaNumeric(strArr[start])) start++;
        if(!isAlphaNumeric(strArr[end])) end--;
        if (strArr[start].toLowerCase() !== strArr[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

module.exports = isPalindrome
