// you can only write your code here!
function urutArray(arr){
    return arr.slice().sort((a, b) => a - b);
}

function cariMedian(array) {
    let sorted = urutArray(array);
    let inputLength = array.length;
    let mid = Math.floor(inputLength / 2);
    let odd = inputLength % 2 != 0;
    let median;
        if(odd) {
            median = sorted[mid];
        } else {
            median = (sorted[mid] + sorted[mid - 1]) / 2;
        }
        return median;
}
  
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])) // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])) // 7
console.log(cariMedian([3, 4, 7, 6, 10])) // 7
console.log(cariMedian([1, 3, 3])) // 3
console.log(cariMedian([7, 7, 8, 8])) // 7.5