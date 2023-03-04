function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = isLeapYear(1940);
console.log('My Year:', myYear);
