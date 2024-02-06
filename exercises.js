const arrays = [[1, 2, 3], [4, 5], [6]];

const flattenedArray = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); 


function loop(value, test, update, body) {
    while (test(value)) {
      body(value);
      value = update(value);
    }
};
  
loop(
    3, 
    (n) => n > 0, 
    (n) => n - 1, 
    console.log 
);


function everyLoop(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false;
      }
    }
    return true;
};
  
function everySome(array, test) {
    return !array.some(element => !test(element));
};
  
console.log(everyLoop([1, 3, 5], n => n < 10)); 
console.log(everyLoop([2, 4, 16], n => n < 10)); 
console.log(everyLoop([], n => n < 10)); 