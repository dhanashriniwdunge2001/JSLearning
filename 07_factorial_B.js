function factorialOfWordsCount(str) {
    if(str==null || str==undefined || isNaN(str) &&typeof str=="number"){
        console.log(`Given string ${str}is invalid`);
    } else{
        console.log(`Given string ${str}is valid`);
        let words = str.split("")
    const totalWords = words.length;
    console.log(totalWords);


      let  factorial =1;
    for(let index = totalWords ; index >= 0; index--) {
      factorial = index * factorial;
}
console.log(`Factorial of"${str}" is ${factorial}`);
return `Factorial of"${str}" is ${factorial}`
}
}
factorialOfWordsCount("Revision is the mother of success");
// factorialOfWordsCount(null);
// factorialOfWordsCount(undefined);
// factorialOfWordsCount(NaN);