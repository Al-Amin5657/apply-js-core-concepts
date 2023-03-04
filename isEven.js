function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumber = isEven(23);
console.log(myNumber);
const herNumber = isEven(20);
console.log(herNumber);