function isPrime(num){
for (let index = 2; index < num; index++) {
   if (num%index ==0) {
    return false;
    
   }
    
}
return true;
}
let result = isPrime(7);

console.log(`Is 7 Prime Number: ${result} ? "YES":"NO"`);
