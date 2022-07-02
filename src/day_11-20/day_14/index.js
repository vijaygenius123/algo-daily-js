function firstNonRepeat(str) {
    if(str==='')
        return ''
    const charCount = Object.entries(str.split('').reduce((prev, curr) => {
       if(prev[curr]){
           return {
               ...prev,
               [curr]: prev[curr] + 1
           }
       } else {
           return {
               ...prev,
               [curr]: 1
           }
       }
   }, {}))
    for(i=0;i<charCount.length; i++){
        if(charCount[i][1] === 1) return charCount[i][0]
    }
}

module.exports = firstNonRepeat
