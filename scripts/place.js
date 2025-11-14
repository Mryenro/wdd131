// Temperature and Wind Speed
const temperatureC = 10;
const windSpeedKmh = 5;

// Wind chill formula (Celsius version)
function calculateWindChill(T, V) {
    return (13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16)).toFixed(1);
}

function displayWindChill() {
    const output = document.querySelector("#windChillValue");

    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        output.textContent = `${calculateWindChill(temperatureC, windSpeedKmh)} °C`;
    } else {
        output.textContent = "N/A";
    }
}

displayWindChill();
