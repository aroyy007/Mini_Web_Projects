const display11 = document.getElementById("display");

function appendToDisplay(value) {
    display11.value += value;
}

function clearDisplay() {
    display11.value = "";
}

function calculate() {
    try {
        display11.value = eval(display11.value);
    }
    catch (error) {
        display11.value = "Error";
    }
}
