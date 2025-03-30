const salary = 25000;
const height = 66;
const isBCS = true;
const hasCar = false;

// situation 1
// if(salary >= 20000) {
//     console.log('supatro chele paici');
// }
// else{
//     console.log('onno chele khuji');
// }

// situation 2
// if(salary >= 20000 && height >=65 ) {
//     console.log('selected bride');
// }
// else{
//     console.log('rejected bride');
// }

// situation 3
// if(salary >= 30000 || height >= 70) {
//     console.log('poro baba kobul');
// }
// else {
//     console.log('vaag tui mokbul');
// }

// situation 4
// if(salary >= 35000 || height >= 70 || isBCS == false) {
//     console.log('perfect bor');
// }
// else{
//     console.log('badass bor');
// }

// situation 5
// if((salary > 30000 && hasCar == true) || isBCS == true) {
//     console.log('14 gusti raji');
// }
// else{
//     console.log('kono gustir moddhe pore na patro');
// }

// situation 6
if ((salary > 30000 || hasCar == true) && isBCS == true){
    console.log('bcs thaklei cholbe');
}
else{
    console.log('cader chara biya dimu na');
}