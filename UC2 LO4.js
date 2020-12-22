// Creating a new JavaScript Object
var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){ console.log("now driving");};

myCar.drive();

var myCar2 = {

    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time){
        console.log(speed * time);
    }

};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);


// THIS Keyword
var myCar2 = {

    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time) {
        console.log("speed * time");
    }

};



myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);


// Constructor Functions
var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };

}

var myCar = newCar(70, "Ninja Man");
var myCar2 = newCar(40, "Humpty Dumpty");
var myCar3 = newCar(10, "Shaun");
var myCar4 = newCar(90, "James Bond");

myCar.drive(30, 5);
myCar3.logDriver();


// The Date Object
var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

// get the month of the date (0 - 11)
console.log(birthday.getMonth());

// get full year(YYYY)
console.log(birthday.getFullYear());

// get the date of the month (1 - 31)
console.log(birthday.getDate());

// get the day of the week (0 - 6)
console.log(birthday.getDay());

// get the hour of the date (0 - 23)
console.log(birthday.getHours());

// get the number of milliseconds since Jan 1970 (1 - 31)
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){

    console.log("birthdays are equal");

} else{

    console.log("birthdays are not equal");

}


