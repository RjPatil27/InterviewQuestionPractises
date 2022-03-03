//Interview Question: 
// Given two array find an if they contain any common element
// array1 = ['a','b','c','x']
// array2 = ['z','x','y']
// find if any element of array1 exist in array2
// 

// Naive Approach 
// Apply 2 for loops , so array1[i] will match with every element of array2. if the element from array1 exist in array2 then it will return true else false
// Code ->

function NaiveAppraoch1(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                return true;
            }
        }
    }
    return false;
}

// After we write Naive Approach code, check if our solution is feasible and calculate time complexity
// For our solution, we have two nested for loop, so it has quadratic time complexity i.e. O(n^2)
//Think about more feasible solution.

array1 = ['a','b','c','x'];
array2 = ['z','x','y'];

console.log(NaiveAppraoch1(array1,array2));

// Approach 2 
// we can use hashmap for this approach. 
// for array1, we will create one hashmap which will have key as elements of array one and values as true.
// {
//     'a' : true,
//     'b' : true,
//     'c' : true,
//     'x' : true
// }
// then we have to write for loop which will check if value from array2 exists in hash object. If it exist then return true else false

function FeasibleApproach(arr1,arr2){
    let map = {};

    for(let i=0;i<arr1.length;i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }
    // console.log(map);

    for(let i=0;i<arr2.length;i++){
        if(map[arr2[i]]){
            return true;
        }
    }
    return false
}

console.log(FeasibleApproach(array1,array2))
