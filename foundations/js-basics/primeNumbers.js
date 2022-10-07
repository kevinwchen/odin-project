function getPrimes(n) {
  n = Math.floor(n);
  
  if (n <= 1) {
    console.log("No primes")
    return;
  }

  for (let i = 2; i <= n; i++) {
    if (checkPrime(n)) {
      console.log(i + " ")
    }
  }
}

function checkPrime(n) {
  if (n == 2) {
    return true;
  } else {

  }
}

getPrimes(13)