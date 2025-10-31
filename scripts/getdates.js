const currentYearSpan = document.querySelector("#currentyear");

// use the date object
const today = new Date();

// 3. Use the getFullYear() method to retrieve the four-digit year (e.g., 2025).
// We use .textContent to insert only text, which is safer and faster than .innerHTML.
// Correction: We only assign the year number, removing the extra text you had.
currentYearSpan.textContent = today.getFullYear();


document.getElementById("lastModified").innerHTML = document.lastModified;