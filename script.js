function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    // Validate input as a number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temperature
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature = unit === "celsius" ? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;

    // Display the result
    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;
}
