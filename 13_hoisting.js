

console.log(myName); // alowed to access
//console.log(age);  // Not allowed to access
 var myName = "Shree";
 let age = 22;


 show() // Allowed as it is normal function are hoisted
 function show(){
    console.log("show() function");
}


// greet(); // Not allowed as it is FE and FE does not hoisted 
let greet = function(){
    console.log("Good Morning");
}
greet();
