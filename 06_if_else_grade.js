function gradeCalculation(marks) {
  // if marks is 0 or less than 0 or greater than 100 or not in valid number format
  // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
  if (marks <= 0 || marks > 100 || typeof marks != 'number') {
    console.log(`Please provide the valid marks - ${marks}`)
   
} else {
  if (marks>=90){
    console.log(`Excellent marks`);
  }
  if(marks>=75 && marks<90){
    console.log(`Good marks`);

  }
  if(marks>=50 && marks >56 ) {}
}
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation('91')
gradeCalculation('Seventy One')
gradeCalculation(NaN) //
gradeCalculation(undefined) //
gradeCalculation(null) 
}