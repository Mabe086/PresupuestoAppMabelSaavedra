function getValue(buttonValue) {
    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + key;
}