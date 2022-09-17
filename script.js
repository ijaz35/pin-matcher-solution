function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('calculator-body').addEventListener('click', function (event) {
    const newNumber = event.target.innerText;
    const calculatorDisplayNumber = document.getElementById('calculator-display');
    if (isNaN(newNumber)) {
        if (newNumber == 'C') {
            calculatorDisplayNumber.value = '';
        }
    } else {
        const previousNumber = calculatorDisplayNumber.value;
        const displayNumber = previousNumber + newNumber;
        calculatorDisplayNumber.value = displayNumber;
    }
});
function verifyPin() {
    const pin = document.getElementById('display-pin');
    const typedNumber = document.getElementById('calculator-display');
    const errorMessage = document.getElementById('error-notify');
    const successMessage = document.getElementById('success-notify');
    if (pin.value == typedNumber.value) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}