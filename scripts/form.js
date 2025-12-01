const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


// Get current count or start from 0
let count = Number(localStorage.getItem("reviewCount")) || 0;

/* NOTE: The count should ideally only increment on a successful form submission,
    but for this assignment, we increment it on page load to demonstrate localStorage.
    
    To ensure the count is displayed immediately on the form page,
    the display logic is moved here.
*/

// Display the current count before incrementing (optional, depending on requirements)
// document.querySelector("#reviewCount").textContent = count; 

// The count should only be incremented if the form submits successfully.
// Since this is a basic setup, we'll keep the increment on page load 
// but ensure the display element exists (as added in the HTML update).

if (document.querySelector("#reviewCount")) {
    // Only display the current count for the user to see how many have been submitted.
    document.querySelector("#reviewCount").textContent = count;
}

/* If you want the count to go up by 1 *after* submission, 
    you would put the increment logic on the review.html (submission landing) page.
*/