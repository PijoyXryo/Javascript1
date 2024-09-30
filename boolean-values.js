function welcomeToBooleans() {
    return true;
}

//use conditional logic with IF statements

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}

trueOrFalse(true); //change to console.log
ourTrueOrFalse(false); //change to console.log

// COMPARISON WITH THE EQUALITY OPERATOR

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not equal";
}

testEqual(10); //change to console.log

// COMPARISON WITH THE STRICT EQUALITY OPERATOR

function testStrict(val){
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10); //change to console.log


// PRACTICE COMPARING DIFFERENT VALUES

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10"); // Change to console.log

// COMPARISON WITH THE INEQUALITY OPERATOR

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10); // CHANGE TO CONSOLE.LOG

// COMPARISON WITH THE STRICT INEQUALITY OPERATOR

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10); // CHANGE TO CONSOLE.LOG

// Comparisons With The Logical And Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    
    if (val > 10) {
        return "Over 10";
    }
    
    return "10 or under";
}

testGreaterThan(10); // CHANGE TO CONSOLE.LOG

// Comparisons With The Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    
    if (val >= 10)  {
        return "10 or Over";
    }
    
    return "Less than 10";
}
testGreaterOrEqual(10); // CHANGE TO CONSOLE.LOG

// Comparisons With The Less Than Or Equal To Operator

function testLessOrEqual(val) {
    if (val < 20) {
        return "Under 25";
    }
    
    if (val < 10)  {
        return "Under 55";
    }
    
    return "55 or Over";
}
testLessOrEqual(10); // CHANGE TO CONSOLE.LOG