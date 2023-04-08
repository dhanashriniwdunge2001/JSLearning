// function maleMarriageEligibility(gender,age, boyName){
//     if (gender=="Male" && age>=21) {
//        var str = `Hey ${boyName} you are eligible for marriage`;
//        return str;
//     } else {
//         var str = `${boyName} you are not eligible for marriage`;
//         return str;
//     }

// }
// var result = maleMarriageEligibility("Male", 25, "Billgates");
// console.log(result);




function maleMarriageEligibility(gender,age, boyName){
    if (age < 0 || age==undefined ) {
        return `Hey ${boyName} your age ${age} is not valid`;
    }
    if (gender=="Male" && age>=21) {
       var str = `Hey ${boyName} you are eligible for marriage`;
       return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }

}
var result = maleMarriageEligibility("Male", 21, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", -30, "Shivam");
console.log(result);
var result = maleMarriageEligibility("Male", undefined, "Raju");
console.log(result);


function gradecalculation(marks){
    if(marks<=0 || marks>100 || (typeof marks!= "number") ){
console.log(`Please provide the valid  - ${marks}`);
    }
}
gradecalculation(0);
gradecalculation(150);
gradecalculation(-7);
gradecalculation("91");
gradecalculation("seventy two");
gradecalculation(NaN); // invalid data)
gradecalculation(undefined);
gradecalculation(null);

 // JavaScript program to illustrate If-else statement
 var i = 10;
  
 if (i < 15)
 console.log("I am in the if block");
 else
 console.log("I am Not in the if block");