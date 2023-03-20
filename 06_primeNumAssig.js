// function isPrime(n) {
//     // Corner case
//     if (n <= 1)
//         return false;

//     // Check from 2 to n-1
//     for (let i = 2; i < n; i++)
//         if (n % i == 0)
//             return false;

//     return true;
// }

// // Driver Code

// isPrime(11) 
//     ? console.log("true") 
//     : console.log("false");


//     //second way
//     function sieve_Of_Eratosthenes(n) {
//         const sieve = []
//         const primes_set = []
//         for (let i = 2; i <= n; ++i) {
//           if (!sieve[i]) 
//            {  
//              primes_set.push(i)
//              for (let j = i << 1; j <= n; j += i) 
//               { 
//               sieve[j] = true
//             }
//           }
//         }
//         return primes_set
//       }
//       console.log(sieve_Of_Eratosthenes(5))
//       console.log(sieve_Of_Eratosthenes(11))
//       console.log(sieve_Of_Eratosthenes(30))

