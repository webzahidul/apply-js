
function isPrime(n){
    for (var i = 2; i < n; i++) {
        // console.log(i, n % i);
        if(n % i == 0){
            return "Not a prime number";
            
        }
    }
    return "Your number is a Prime Number";
}
var result = isPrime(139);
console.log(result);