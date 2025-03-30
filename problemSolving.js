// problem 1

let burgerPrice = 550;

if(burgerPrice >= 500 ) {
    console.log('coke = free');
}
else{
    console.log('coke = 30 taka');
}

// ..........................................................................

// problem 2

let BMI = 27;

if(BMI < 18.5) {
    console.log('you are underweight');
}
else if(BMI >= 18.5 && BMI <= 24.9) {
    console.log('you are nornal');
}
else if(BMI >= 25 && BMI <=29) {
    console.log('you are overweight');
}
else{
    console.log('you are obese');
}

// .........................................................................

// problem 3

let marks = 79;

if(marks >= 90) {
    console.log('grade A');
}
else if(marks >= 80) {
    console.log('grade B');
}
else if(marks >= 70) {
    console.log('grade C');
}
else if(marks >= 60) {
    console.log('grade D');
}
else{
    console.log('grade F');
}

// ............................................................................

// problem 4

let myScore = 88;
let friendScore = 76;

if(myScore >= 80) {
    if(friendScore > 80){
        console.log('go for a lunch with friend');
    }
    else if(friendScore < 80 && friendScore >= 60){
        console.log('better luck next time for friend');
    }
    else if(friendScore < 60 && friendScore >= 40) {
        console.log('keep friend message unseen');
    }
    else{
        console.log('block your friend');
    }

}
else{
    console.log('go to home then act sad and sleep');
}

// ..................................................................................

// problem 5

let num1 = 34;
let num2 = 5;
let result;

if(num1 > num2) {
    console.log(result = num1 * 2);
}
else{
    console.log(result = num1 + num2);
}
// problem 5 solved using ternary operator
num1 > num2 ? console.log(result = num1 *2): console.log(result = num1 + num2);

// ......................................................................................

// problem 6

let age = 25;
let ticketFare = 800;

// free fare for children
if (age <= 10) {
    console.log(ticketFare = 0);
}
// 50% discount for students
else if(age <= 30) {
    console.log(ticketFare = ticketFare * (50 / 100));
}
// 15% discount for senior citizens
else if(age >= 60) {
    console.log(ticketFare = ticketFare * (15 / 100));
}
else{
    console.log(ticketFare);
}



