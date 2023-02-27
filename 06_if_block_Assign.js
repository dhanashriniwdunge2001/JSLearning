console.log("*****maleMarriageEligibility*****");
    function maleMarriageEligibility(gender, age,boyName){
    if (gender=="Male" && age>=21) {
        console.log(`Hey ${boyName} You are eligible for Marraige`);
    } else {
        console.log(` Unfortunately ${boyName} Not Eligible`);
    }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Stew Jobs");


console.log("*****femaleMarriageEligibility*****");
function femaleMarriageEligibility(gender, age,girlName){
    if (gender=="female" && age>=18) {
        console.log(`Hey ${girlName} You are eligible for Marraige`);
    } else {
        console.log(` Unfortunately ${girlName} Not Eligible`);
    }
}
femaleMarriageEligibility("female", 24, "vidya");
femaleMarriageEligibility("female", 16, "saniya");