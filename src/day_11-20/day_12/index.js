function detectSubstring(str, subStr) {
    let result = -1;
    for(let i=0; i<= str.length - subStr.length; i++){
        if(str[i] === subStr[0]){
            const strSlice = str.slice(i, i+ subStr.length )
            if(strSlice === subStr)
                return i;
        }
    }
    return result;
}

module.exports = detectSubstring

