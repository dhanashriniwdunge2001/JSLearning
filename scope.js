
let z=3
function foo() {
	if (true) {
		var x = '1'; // Exist in function scope
		const y = '2'; // Exist in block scope
	}
	console.log(x);
	console.log(y);
	console.log(z); // Exist in global scope
}
foo();

