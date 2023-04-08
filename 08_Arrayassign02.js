  // Declaring and initializing arrays
  var arr = [10, 20, 30, 40, 50]; // number array
  var arr1 = [110, 120, 130, 140];
  var string_arr = ["Alex", "peter", "chloe"]; // string array
  
  // push: Adding elements at the end of the array
  arr.push(60);
  console.log("After push op " + arr + "</br>");
  
  // unshift() Adding elements at the start of the array
  arr.unshift(0, 10);
  console.log("After unshift op " + arr + "</br>");
  
  // pop: removing elements from the end of the array
  arr.pop();
  console.log("After pop op" + arr + "</br>");
  
  // shift(): Removing elements from the start of the array
  arr.shift();
  console.log("After shift op " + arr + "</br>");
  
  // splice(x,y): removes x number of elements starting from index y
  arr.splice(2, 1);
  console.log("After splice op" + arr + "</br>");
  
  // reverse(): reverses the order of elements in array
  arr.reverse();
  console.log("After reverse op" + arr + "</br>");
  
  // concat(): merges two or more array
  console.log("After concat op" + arr.concat(arr1));