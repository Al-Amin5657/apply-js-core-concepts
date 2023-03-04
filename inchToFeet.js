// const myInch = 12;
// const myFeet = myInch / 12;
// console.log(myFeet);

// const dadaInch = 144;
// const dadaFeet = dadaInch / 12;
// console.log(dadaFeet);

function inchToFeet(inches) {
    const feet = inches / 12;
    const fixedFeet = feet.toFixed(2);
    const int = parseInt(fixedFeet);
    return int;
}
const dadaInch = 154;
const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet);

const nanaInch = 156;
const nanaFeet = inchToFeet(nanaInch);
console.log('Nana Feet', nanaFeet);