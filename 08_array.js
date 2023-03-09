var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
console.log("=== Adding element in the last using push() ===");
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log("===Adding element using in the first using unshift() ===");
arrayOfNumbers.unshift(5);

var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
console.log(arrayOfNumbers);
console.log("==== Removing last element using pop() === ");
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log("==== Removing first element using shift() === ");
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("===slice(startIndex) ===");
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);
console.log("===slice(startIndex, endIndex) ===");
const subArray = arrayOfNumbers.slice(2,5);
console.log(subArray);
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("===slice(startIndex) ===");

console.log("============================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
//delete the element 20
 arrayOfNumbers.splice(1,1);
 console.log(arrayOfNumbers);
arrayOfNumbers.splice(3,1);
console.log(` After removing 15 : ${arrayOfNumbers}`);
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
//delete elements ===> 20, 25
arrayOfNumbers.splice(1,2);
console.log(arrayOfNumbers);


console.log("====== splice to insert element ======");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2,0, 22);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
// 5, 35, 55
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log("===splice() to replace one element=====");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2,1,50,60);
console.log(arrayOfNumbers);

console.log("=====splice() to replace one elements ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 2 ,50,60);
console.log(arrayOfNumbers);

// arraySeasonalFruit[length-1]
// slice(length-3)

console.log("===== Traversing  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum = 0; // 10
for (let index = 0; index < arrayOfNumbers.length; index++) {//1
    const element = arrayOfNumbers[index];
   sum = sum + element;// sum = 0 + 20
    // console.log(element);
}
console.log(`Sum of an Array element is: ${sum}`);