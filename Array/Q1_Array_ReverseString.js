// Reverse a string
// input= "Hello"
// output = "olleh"


// Solution 1 
function Reverse(string){
    // input validation
    if(!string || string.length < 2 || typeof string != "string"){
       return "Wrong Input!!" 
    }

    // Solution
    const prevstr = string.split("");
    const newstr = [];
    // console.log(prevstr);
    for(let i=0; i<prevstr.length;i++){
        // one way
        newstr[i] = prevstr[prevstr.length - (i+1)];
        // second way
        // newstr[i] = string[string.length - (i+1)];

    }
    // console.log(newstr.join(""))
    return newstr.join("");    
}

// Solution 2 - Using built methods
function Reverse2(string){
    // input validation
    if(!string || string.length < 2 || typeof string != "string" ){
        return "Wrong Input!!"
    }
    return string.split('').reverse().join('');
}

const string = "Stay Strong , Stay Healthy !!";
console.log(string," | " ,Reverse(string));

const string2 = "Stay Strong , Stay Healthy !!";
console.log(string2, " | ", Reverse2(string2));
