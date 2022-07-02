function reverseString(str){
    let strArr = str.split('')
    let start = 0
    let end = strArr.length - 1

    while (start < end){
        const temp = strArr[start]
        strArr[start] = strArr[end]
        strArr[end] = temp
        start++;
        end--;
    }
    return strArr.join('')
}
/*
hello
01234
42310
olleh
*/
module.exports = reverseString
