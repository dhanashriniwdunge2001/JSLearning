// var num1 ='100';
// function swapVariables(){//var value1=num1,var value2=num2
//     console.log("Before swap:", value1,value2);
//     var temp = value1;
//     value1= value2;
//     value2 = temp;
//     console.log("After Swap:", value1,value2);
//     return"Swapping variable successfully completed";
// }
// var swapResult = swapVariables( num1,num2); //function call or invoke 
// console.log(swapResult);
// var swapResult2 = swapVariables(str1,str2);
// console.log(swapResult2);

// function display(num){
//     console.log(num);//100
//     var result = typeof num;  //number
//     return result;

// }
// var displayResult = display(100);
// console.log(displayResult2);


//function with no arguments and no return value
function showFullName(){
    console.log("My full name is : Dhanashri Niwdunge");
}
showFullName();//Function call or invoke

// Function with no arguments and no return value
function showAge(age){
console.log("My age is:", age);

}
showAge(21);

// Function with no arguments and no return value
function fullName(){
    var name ="Dhanashri Niwdunge"
    return name;
}
var fullName = fullName();
console.log(fullName);

// Function with no arguments and no return value
function sumOfNumbers(num1, num2, num3){
 var sum =num1+ num2 +num3;
 return sum;
}
var sumResult = sumOfNumbers(10, 45,79);
console.log(sumResult);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1 = "Akshay";
var name2 = "shiv";


function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
}
var swapResult = swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);

var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);