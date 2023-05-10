// function cariMedian(arr) {
//   const sorted = arr.sort((a, b) => a - b);
//   const middle = Math.floor(arr.length / 2);

//   if (arr.length % 2 === 0) {
//     return (sorted[middle - 1] + sorted[middle]) / 2;
//   } else {
//     return sorted[middle];
//   }
// }

// const bilangan = [1, 2, 3, 4, 5];
// const hasilMedian = cariMedian(bilangan);
// console.log(`Median dari bilangan ${bilangan} adalah ${hasilMedian}`);

function cariMedian(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) / 2 : arrSorted[Math.floor(arrSorted.length / 2)];
}

const data1 = [1, 2, 3, 4, 5];
const data2 = [1, 3, 4, 10, 12, 13];
const data3 = [3, 4, 7, 6, 10];
const data4 = [1, 3, 3];
const data5 = [7, 7, 8, 8];

console.log(`Median: ${cariMedian(data1)}`);
console.log(`Median: ${cariMedian(data2)}`);
console.log(`Median: ${cariMedian(data3)}`);
console.log(`Median: ${cariMedian(data4)}`);
console.log(`Median: ${cariMedian(data5)}`);
