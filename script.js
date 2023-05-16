function cariMedian(arr = []) {
    let lenArr = arr.length - 1;
    let median;

    for (let i=0; i< arr.length; i++, lenArr--) {
        if (lenArr === i) {
            median = arr[i];
        } else if (lenArr - i === 1) {
            median = (arr[i] + arr[lenArr]) / 2;
        }
    }
    return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5