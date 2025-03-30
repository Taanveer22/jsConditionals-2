const price = 5000;

// situation 1
// if(price >= 5000) {
//     // 10% discount logic
//     const discount = price * 10 / 100;
//     const payment = price -discount;
//     console.log(payment);
// }
// else{
//     console.log(price);
// }


// situation 2
if(price >= 4000) {
    // 50% discount logic
    const discount = price * 50 / 100;
    const payment = price - discount;
    console.log(payment);
}
else if(price >= 2000){
    //  25% discount logic
    const discount = price * 25 / 100;
    const payment = price -discount;
    console.log(payment);
}
else{
    console.log(price);
}