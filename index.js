function cariMedian(arr) {
    if (arr.length % 2 === 0) {
      let i = (arr.length / 2) - 1;
      let j = i + 1;
      let med = (arr[i] + arr[j]) / 2;
      return med;
    } else {
      let i = (arr.length - 1) / 2;
      let med = arr[i];
      return med;
    }
  }
  
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5