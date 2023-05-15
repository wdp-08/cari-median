function cariMedian(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("Array Yang sudah Di urutkan: " + arr);
  
    let length = arr.length;
    let hasil = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return (arr[hasil - 1] + arr[hasil]) / 2;
    } else {
      return arr[hasil];
    }
  }
  
  console.log(cariMedian([1, 2, 3, 4, 5])); 
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); 
  console.log(cariMedian([3, 4, 7, 6, 10])); 
  console.log(cariMedian([1, 3, 3])); 
  console.log(cariMedian([7, 7, 8, 8])); 