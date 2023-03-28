




const array = [3, 4, 5, 6, 1];

array.forEach( (currentValue)=> (
arrayTransformed.push(currentValue+2)
));
console.log(arrayTransformed);

array.map( (element) => {
    return element +2;
})
console.log(arrayNew);


const arrayOfNames = ["Rupesh Dhumal", "Rutuja Pawar", "Nayan", "Pralhad"];
const arrayNamesTransform = arrayOfNames.map( (element) => {
    return element.length;
 } )
 console.log(arrayNamesTransform);

 