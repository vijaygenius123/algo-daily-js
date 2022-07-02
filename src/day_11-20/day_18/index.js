function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumOfPrimes(n) {
    let primes = [0];
    for (let i = n; i >= 1; i--) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.reduce((prev, curr) => prev + curr);
}

module.exports = sumOfPrimes
