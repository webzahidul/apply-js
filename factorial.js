function factorial(n){
    var fact = 1;
for (var i = 1; i <= n; i++) {
    fact = fact * i;
}
return fact;
}
var result = factorial(10);
console.log(result);

//jog korar somoy initial value hobe 0,
//gun korar somoy initial value hobe 1.