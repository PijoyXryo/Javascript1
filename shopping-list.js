//shopping list

var myList = [['kitkat', 5], ['milk', 2], ['apples', 10], ['juices', 1], ['eggs', 20]];

//write reusable code with function

function ourReusableFunction() {
    console.log('Heyya, World');
}

ourReusableFunction();

// change in code below

function reusableFunction() {
    console.log("Hi, World");
}

reusableFunction();

// PASSING VALUES TO FUNCTIONS WITH ARGUMENTS

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5); // Outputs will be 5

//TRAINING

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5); // Outputs will be 15

// GLOBAL SCOPE AND FUNCTIONS

var myGlobal = 10; // global scope

function fun1() {
    //assign 5 to oopsGlobal here
    oopsGlobal = 5;

}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
}

fun1();
fun2();

// LOCAL SCOPE AND FUNCTIONS

function myLocalScope() {
    var myVar = 5; //declared variables inside a function

    console.log(myVar);
}
myLocalScope();

// Global vs. Local Scope in Functions

var outerWear = 'T-shirt';  //global variable

function myOutfit() {
    var outerWear = "sweater";


    return outerWear;
}

console.log(myOutfit()); // will return local variable inside the function
console.log(outerWear); // will return global variable outside the function


// RETURN A VALUE FROM A FUNCTION WITH RETURN 

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num){
    return num * 5;
}

console.log(timesFive(10));

// UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION

var sum = 0;

function addThree(){
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

console.log(addThree());
console.log(addFive());

// ASSIGNMENT WITH A RETURNED VALUE

var changed = 0;

function change(num){
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

// STAND IN LINE

function nextInLine(arr, item) {
    //My code
    arr.push(item);


    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));