function convertCtoF() {
    var tempC = document.getElementById('tempC').value;
    var fahrenheit = (tempC * 9/5) + 32;
    alert(tempC + "°C is " + fahrenheit.toFixed(2) + "°F.");
}

function convertFtoC() {
    var tempF = document.getElementById('tempF').value;
    var celsius = (tempF - 32) * 5/9;
    alert(tempF + "°F is " + celsius.toFixed(2) + "°C.");
}
