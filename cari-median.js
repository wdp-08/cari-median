function cari_median(array){
    const long = array.length;
    let medianResult;
    for(let i = 0; i < long; i++){
        for(let j = 0; j < long -1; j++){
            if(array[j+1] < array[j]){
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
        }
    }

    if(long % 2 === 0){
        const a = array[long/2 -1];
        const b = array[long/2];
        medianResult = (a+b)/2;
    }else{
        const tengah = (long - 1) /2
        const c = array[tengah];
        medianResult = c;
    }
    console.log(array);
    return `Median: ${medianResult}`;
}

console.log(cari_median([1, 2, 3, 4, 5])); //3
console.log(cari_median([1, 3, 4, 10, 12, 13])); //7
console.log(cari_median([3, 4, 7, 6, 10])); //7
console.log(cari_median([1, 3, 3])); //3
console.log(cari_median([7, 7, 8, 8]));//7.5