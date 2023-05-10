function cariMedian(arr){
        let length = arr.length
        
        // sorting
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length - i - 1; j++){
                if(arr[j + 1] < arr[j]){
                    [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
                }
            }
        };
        
        if(length % 2 == 0) {
            const a = arr[length / 2]
            const b = arr[length / 2 - 1]
            
            return (a + b) / 2 
        } else {
            length -= 1
            return arr[length / 2]
        }
    }
    
    console.log(cariMedian([1, 2, 3, 4, 5])) 
    console.log(cariMedian([1, 3, 4, 10, 12, 13])) 
    console.log(cariMedian([3, 4, 7, 6, 10])) 
    console.log(cariMedian([1, 3, 3])) 
    console.log(cariMedian([7, 7, 8, 8]))