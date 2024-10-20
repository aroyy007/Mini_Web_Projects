const display11 = document.getElementById("display");

function appendToDisplay(value) {
    display11.value += value;
}

function clearDisplay() {
    display11.value = "";
}

function backspace() {
    display11.value = display11.value.slice(0, -1);
}

function calculate() {
    try {
        display11.value = eval(display11.value);
    } catch (error) {
        display11.value = "Error";
    }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
