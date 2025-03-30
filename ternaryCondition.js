/* 

*TERNARY = 3 PARTS
*condition ? do something when true : do something when false

*/

// situation 1

const age = 13;
// if else formation
if(age >= 18) {
    console.log('vote dite paro');
}
else{
    console.log('jao baccha ghumao');
}
// ternary formation
age >= 18 ? console.log('vote dao'): console.log('jao ghumao');



// situation 2
// if else formation
let price = 500;
const isLeader = true;

if(isLeader == false) {
    console.log(price = 0);
}
else{
    console.log(price + 100);
}
// ternary formation
(isLeader==false) ? console.log(price = 0):console.log(price+100);

// *************************************************************************

// situation 3 (semi-advance) {feel free to ignore this one}
// if else formation

let balance = 1400;
const isEmployee = true;

if (isEmployee == true) {
    if(balance >= 1000) {
        console.log(balance = balance / 2 );
    }
    else{
        console.log(balance = 0);
    }
}
else{
    console.log(balance = balance + 100);
}

// ternary formation

// 1st layer problem
// (isStudent == true) ? '2nd layer' : money = money + 100;
// 2nd layer problem
// (money >= 1000) ? money = money / 2 : money = 0;

// layer merged solution
let money = 1400;
const isStudent = true;

(isStudent == true) ?
   console.log (money >= 1000 ? (money = money /2) : (money = 0)) :
   console.log (money = money + 100);