function cariMedian(arr) {
    const len = arr.length; //panjang data
    const middle = Math.floor(len / 2); //rumus median

if (len % 2 === 0) {
return (arr[middle - 1] + arr[middle]) / 2; //kalau genap
} else {
return arr[middle];
}
}
console.log(cariMedian([1, 2, 3, 4, 5])) // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])) // 7
console.log(cariMedian([3, 4, 7, 6, 10])) // 7
console.log(cariMedian([1, 3, 3])) // 3
console.log(cariMedian([7, 7, 8, 8])) // 7.5