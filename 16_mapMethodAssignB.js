// <!DOCTYPE html>
// <html>
// <body>
// <h1 style="color: green">
// 	JavaScript Data Transformation methods
// </h1>
// <p>
// 	The Array.map() method creates a new
// 	array from the results of calling a
// 	function for every element.
// </p>
// <p id="demo"></p>
// <h3>The filter() Method</h3>
// <p>
// 	Get every element in the array
// 	that has a value of 18 or more:
// </p>
// <p id="demo1"></p>
// <h3>The reduce method</h3>
// <p>
// 	Subtract the numbers in the array,
// 	starting from the left:
// </p>
// <p id="demo2"></p>
// <script>
	const num = [16, 25];
	
	/* Using JS map() Method */
	document.getElementById("demo")
	.innerHTML = num.map(Math.sqrt);

	const ages = [19, 37, 16, 42];
	
	/* Using JS filter() Method */
	document.getElementById("demo1")
	.innerHTML = ages.filter(checkAdult);

	function checkAdult(age) {
	return age >= 18;
	}
	
	/* Using JS reduce() Method */
	const numbers = [165, 84, 35];
	document.getElementById("demo2")
	.innerHTML = numbers.reduce(myFunc);

	function myFunc(total, num) {
	return total - num;
	}
// </script>
// </body>
// </html>
