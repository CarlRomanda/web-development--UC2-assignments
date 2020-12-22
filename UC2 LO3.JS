// break and continue
for (i = 0; i < 10; i++) {

    if(i === 5 || i === 3){

        continue;

    }

    console.log(i);

    if(i === 7) {

        break;

    }

}

console.log("I have broken out of the loop");


// Practical Example using Loops
var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++) {

    links[i].className = "link" + i;

}


// functions
var links = document.getElementByTagName("a");

for (i = 1; i <= links.lenght; i++) {

    console.log("this is link number" + i);

}

    document.write("all links now looped");


    function getAverage (a,b,c,d,e,f) {

    var average = (a + b + c + d + e + f) / 6;
    console.log(average);
    return average;

}

var myResult = getAverage(7,8,9,10,11,12,);
console.log("the average is" + myResult);


// variable scope
var average = 0

function getAverage (a,b) {

    average = (a + b) / 2;
    console.log(average);
    return average;

}

var myResult = getAverage(7,11); // global variable


function logResult() {

    console.log("the average is" + myResult + "inside the function");
}

logResult();


// Numbers
var a = 7
var b = 5;

console.log(a + b);

console.log(Math.PI);


// NaN (Not a Number)
var a = "hello";
var b = 5;

// double negative
if (!isNaN(a)){

    console.log("meaning of life is " + (a + b));

}


// Strings
var string1 = "Abc";
var string2 = "Bcd";

console.log(string1 < string2);


