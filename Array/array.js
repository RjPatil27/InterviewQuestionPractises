// Array Basic Operation
// lookup -> O(1)
// push -> O(1)
// insert -> O(n)
// delete -> O(n)

const strings = ['a','b','c','d'];
console.log(strings[2]);

// push method - add value at the end of array 
strings.push('e');          // O(1)    insertion operation
console.log(strings);

// pop method - remove the last item from the array
strings.pop();              // O(1)     deletion operation   
console.log(strings);

// unshift  - add item at the beginning of the array
// ['a', 'b', 'c', 'd'];
//   0    1    2    3
// ['r','a', 'b', 'c', 'd']
//       0    1    2    3
// we have to shift indexes to left position
//  0    1    2    3    4
strings.unshift('r');       // O(n)     insertion operation(at front)
console.log(strings);       

// splice - adds and/or removes array elements
// it also overwrites the original array
// array.splice(index,howmany,item1,..........,itemN);

// ['r','a', 'b', 'c', 'd']
//  0    1    2    3    4
// ['r','a', 'b', 'hello' ,'c', 'd']
//  0   1    2             3    4
// as we put item at 3rd index, we have to left shift index value of array
//  0   1    2      3       4   5
strings.splice(3,0,'hello');    // O(n)     insertion operation(at given index)/ deletion opeartion(at given index) 
console.log(strings)

strings.splice(3,1);
console.log(strings);

// Static vs Dynamic Array
// static array = fixed size
// dynamic array = unfixed size
