function generateRandomNumber() {

    return Math.floor(Math.random() * 100) + 1;

}

function Addition(number1, number2) {

    return number1 + number2

}

module.exports = {
    generateRandomNumber,
    Addition,
}
