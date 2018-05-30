function filter(arr, func) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

function inBetween(num1, num2) {
  return (function(a) {
    return num1 >= a || num2 <= a;
  });
};

function inArray(smthArr) {
  return (function(a) {
    return smthArr.includes(a);
  });
};

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

filter(arr, inBetween(3, 6)); // 3,4,5,6
console.log(arr)

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2
