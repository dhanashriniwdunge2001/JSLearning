console.log("---step1---");
function maleMarriageEligibility(gender,age, boyName){
    if (age < 0 || age==undefined ) {
        return `Hey ${boyName} your age ${age} is not valid`;
    }
    if (gender=="Male" && age>=21) {
       var str = `Hey ${boyName} you are eligible for interview drive`;
       return str;
    } else {
        var str = `${boyName} you are not eligible for interview drive`;
        return str;
    }

}
var result = maleMarriageEligibility("Male", 21, "shree");
console.log(result);

var result = maleMarriageEligibility("Male", -17, "Shiv");
console.log(result);
var result = maleMarriageEligibility("Male", undefined, "shambhu");
console.log(result);


function gradecalculation(marks){
    if(marks<=0 || marks>100 || (typeof marks!= "number") ){
console.log(`Please provide the valid  - ${marks}`);
    }
}

console.log("----step2----");
  
if (ageForVote >= 18) {}
    var ageForVote = 20
console.log(`Your is:${ageForVote}, You are eligible for voting`)
var ageForVote = 34
console.log(`Your Age is:${ageForVote}, You are eligible for voting`);
var ageForVote = 16
console.log(`Your Age is:${ageForVote}, You are eligible not for voting`);
var ageForVote = 18
console.log(`Your Age is:${ageForVote}, You are eligible for voting`)

console.log('End of next if block');

function voteEligibility(age) {
    if(age =0 || age > 120 ); 
   {
      console.log(` "invalid data" ,Please provide the valid marks - ${age}`)
    }
  }
  voteEligibility(45)
voteEligibility(17)
  voteEligibility(8)
  voteEligibility(200)
  voteEligibility(-10)
  voteEligibility(0)
 voteEligibility(undefined) 
  voteEligibility(null);