function findMedian(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });

var length = arr.length;
var midIndex = Math.floor(length / 2);

if (length % 2 === 0) {
    return (arr[midIndex - 1] + arr[midIndex]) / 2;
} else {

    return arr[midIndex];
 } 
}

var array1 = [1, 2, 3, 4, 5];
var median1 = findMedian(array1);
console.log("Median: " + median1);

var array2 = [1, 3, 4, 10, 12, 13];
var median2 = findMedian(array2);
console.log("Median: " + median2);

var array3 = [3, 4, 7, 6, 10];
var median3 = findMedian(array3);
console.log("Median: " + median3);

var array4 = [1, 3, 3];
var median4 = findMedian(array4);
console.log("Median: " + median4);

var array5 = [7, 7, 8, 8];
var median5 = findMedian(array5);
console.log("Median: " + median5);