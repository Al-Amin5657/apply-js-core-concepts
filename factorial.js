function factorial(number) {
    let mult = 1;
    for (let i = 1; i < number; i++) {
        mult = mult * i;
        console.log(i, mult);
    }
    return mult;
}
const result = factorial(15);
console.log(result);