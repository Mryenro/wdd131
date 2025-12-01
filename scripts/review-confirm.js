// This script runs on the review.html page after form submission

document.addEventListener('DOMContentLoaded', () => {
    // 1. Increment the count
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    // 2. Display the new total count
    const reviewCountElement = document.getElementById("reviewCount");
    if (reviewCountElement) {
        reviewCountElement.textContent = count;
    }

    // Logic for current year and last modified date
    const currentYear = document.getElementById("currentyear");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
});