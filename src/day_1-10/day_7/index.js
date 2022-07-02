function powerOfThree(num) {
   while(num % 3 === 0){
       num/=3
   }
   return num === 1
}

module.exports = powerOfThree
