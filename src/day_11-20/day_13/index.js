function dollarDelete(str){
    const arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '$') {
            const newStr = [...arr.slice(0, i-1),...arr.slice(i+1, arr.length)].join('');
            return dollarDelete(newStr);
        }
    }
    return arr.join('');
}

function isDollarDeleteEqual(arr){
    return dollarDelete(arr[0]) === dollarDelete(arr[1])
}

module.exports = isDollarDeleteEqual;
