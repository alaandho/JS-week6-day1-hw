//codewars 1
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function even_or_odd(number){
    if (number % 2 == 0){
        return 'Even'
    }else {
        return 'Odd'
    }
};
console.log(even_or_odd())



//codewars 2
//https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s){
    if(s.length % 2 == 0){  //checking if r is 0
    }
    if(s.length % 2 > 0){   //checking if r is odd
        console.log(s.slice(s.length /2, s.length /2 +1))
    }
};
console.log(getMiddle('testing'))



//==================Exercise #1 ==========//
/*
    Write a function that takes in the string and the list of dog names, loop through 
    the list and checks that the current name is in the string passed in. The output should be:
    "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
    counter; condition; increm
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];  //looping through list, loops through each string ""

let findWords = () =>{
    for(let i = 0; i <= dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log(dog_names[i])
            break
        }else{
            console.log(`No Matches`)
        }
    }   
};  
console.log(findWords(dog_string, dog_names))

//before break, Max is at 0, should stop at 3 --> keeps looping through for loop until break
//if conditional in if statement is met, continues for loop until break
//loops though dog_names
// if dog_names is in str dog_string
// if no match --> console.log (`No Matches`); 



//============Exercise #2 ============//
/*
    Write a function that takes in an array and removes every value that's double is over 50.
*/
//given_arr = [13, 22, 26, 40, 1, 10];

let replaceEvens = (arr) =>{
    let empty_r = [];
    for(let i = 0; i < arr.length; i++){  //keeps looping until end of length of array
        if(arr[i]*2 < 50){
        empty_r.push(arr[i])
        }
    }
};
console.log(replaceEvens([13, 22, 26, 40, 1, 10]))


 // take in  x*2 < 50
 // take in an array, start counter = 0, bc we're keeping track of every index doubled
 //counter; condition; incrementer

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc. 

