// merge sorted arrays
// [0,3,4,31] [4,6,30]
// [0,3,4,4,6,30,31]

function mergeSortedArray(arr1,arr2){
    const finalArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i=1;
    let j=1;

    // Input Check
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    while(arr1Item || arr2Item){
        // console.log(arr1Item, arr2Item);
        // to make it more readable you can create different function to check if condition
        if(!arr2Item || arr1Item < arr2Item){
            // we are checking with !arr2Item because while comparing items, it may happen that one of the array index come to an end
            // at that time we have to append remaining other array to final merged array as there is no item remain to compare.
            finalArr.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }else{
            finalArr.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return finalArr
}

let arr1 = [0,3,4,31];
let arr2 = [3,4,6,30];
console.log(mergeSortedArray(arr1,arr2));
