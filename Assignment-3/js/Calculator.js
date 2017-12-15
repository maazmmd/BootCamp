function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

function input(val) {
    var display = document.getElementById("display");

    if ((display.value == "") && val == "0") {
        return;
    }
    else {
        for (i = 0; i < display.value.length; i++)
            if (display.value.charAt(i) == '.') {
                return;
            }
        display.value += val;
    }
}

function calculate() {
    var display = document.getElementById("display");
    display.value = eval(display.value);
}