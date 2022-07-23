/**
 *  @param {string} sub
 *  @param {string} str
 *  @return {boolean}
 */
function isASubsequence(sub, str) {
    // fill this in
    if(sub.length > str.length) return false;
    let start = 0, end = str.length - 1, matchCount = 0;
    while(start <= end){
        if(str[start] === sub[matchCount]) matchCount++;
        start++;
    }
    return matchCount === sub.length;
}

module.exports = isASubsequence
