function reverseString(str){
    let newStr = ""
    for(let i = str.length - 1; i >= 0 ; i--)
        newStr += str[i]
    return newStr
}
/*
hello
01234
42310
olleh
*/
module.exports = reverseString
