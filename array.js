



var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
    
var myData = myArray[2][1];


//manipulate arrays with push()

var ourArray = ["Pijoy", "Balqis", "Sofea"];
ourArray.push(["happy", "joy"]);

//new setup

var meArray = [["JJ", 23], ["cat", 69]];
meArray.push(["dog", 99]);

// MANIPULATE ARRAYS WITH pop()

var aArray = [1, 2, 3];
var removedArray = aArray.pop();

//SETUP EXAMPLE

var bArray = [["John", 23], ["cat", 1]];

var removedBArray = bArray.pop();

//MANIPULATE ARRAYS WITH shift()

var cArray = ["Stimpson", "JJ", ["tommy"]];
var removedC = cArray.shift();

//SETUP EXAMPLE

var dArray = [["Jay", 23], ["Jim", 27]];
var removedD = dArray.shift();

//MANIPULATE ARRAYS WITH unshift()

var zArray = ['Kim', 'L', 'cat'];
zArray.shift();
zArray.unshift('Sad');

//SETUP EXAMPLE

var xArray = [['Kim', 23], ['J', 17]];
xArray.shift();
console.log(xArray);
xArray.unshift(['Ismail', 99]);
console.log(xArray);
