function checkPrime(n) {
  if (n < 2) {
    return false;
  } else {
    let divisibleCount = 0;
    
    for (i = 2; i <= n; i++) {
      if (n % i == 0) {
        divisibleCount += 1;
      }
    }

    if (divisibleCount == 1) {
      return true;
    } else {
      return false;
    }
  }
}

function getPrimes(n) {
  n = Math.floor(n);
  
  if (n < 2) {
    console.log("No primes")
    return;
  } else {
    let primesList = [];
    for (let i = 2; i <= n; i++) {
      if (checkPrime(i)) {
        primesList.push(i);
      }
    }
    console.log(primesList);
    }
}

getPrimes(100)