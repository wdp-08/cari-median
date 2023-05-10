function cariMedian(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 == 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}

let Array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let Median = cariMedian(myArray);
console.log(cariMedian([1, 2, 3, 4, 5]));
console.log(cariMedian([1, 2, 3, 4, 10, 12, 13]));
console.log(cariMedian([3, 4, 7, 6, 10]));
console.log(cariMedian([1, 3, 3]));
console.log(cariMedian([7, 7, 8, 8]));
