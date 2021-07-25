function isLeapYear(year) {
    const reminder = year % 4;

    if (reminder == 0) {
        return true;
    }
    else {
        return false;
    }
}
const check2000 = isLeapYear(2000);
console.log(check2000);
const check2983 = isLeapYear(2983);
console.log(check2983);