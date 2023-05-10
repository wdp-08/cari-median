function cariMedian(arr) {
    // Mengurutkan array secara ascending menggunakan bubble sort
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Menukar posisi elemen jika elemen sebelumnya lebih besar dari elemen berikutnya
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    let len = arr.length;
    let median;
  
    if (len % 2 === 0) {
      // Jika panjang array genap, ambil rata-rata dari dua nilai tengah
      let middleRight = arr[len / 2];
      let middleLeft = arr[len / 2 - 1];
      median = (middleRight + middleLeft) / 2;
    } else {
      // Jika panjang array ganjil, ambil nilai tengah
      median = arr[Math.floor(len / 2)];
    }
  
    return median;
  }
  
//   contoh penggunaan
  let arr = [1, 2, 3, 4, 5];
  console.log(cariMedian(arr));
  
  arr = [1, 2, 3, 4];
  console.log(cariMedian(arr));