const age = 62;
const price = 500;

if(age <=12){
    console.log('you can eat free');
}
else if(age >= 60) {
    // 50% discount
    const discountedAmount = price * 50 / 100;
    const paymentAmount = price - discountedAmount;
    console.log(paymentAmount);
}
else if(age >= 50) {
    // 25% discount
    const discountedAmount = price * 25 / 100;
    const paymentAmount = price - discountedAmount;
    console.log(paymentAmount);
}
else if(age >= 40){
    // 10% discount
    const discountedAmount = price * 10 / 100;
    const paymentAmount = price - discountedAmount;
    console.log(paymentAmount);
}
else{
    console.log(price);
}