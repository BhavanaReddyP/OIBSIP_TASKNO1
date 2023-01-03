// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
function backspace(){
    var bsp = document.getElementById("result").value;
    document.getElementById("result").value=bsp.substring(0,bsp.length-1);
}
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}