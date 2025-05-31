const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(myArray) {
  let total = 0;
	for (i= 0; i < myArray.length; i++) {
    total += myArray[i];
  }
  return total
};

const multiply = function(myArray) {
  let total = 1;
  for (i = 0; i < myArray.length; i++) {
    total *= myArray[i];
  }
  return total

};

const power = function(a, b) {
	return a ** b
};

const factorial = function fact(a) {
  if( a == 0) {
    return 1
  }
	return a * fact(a - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
