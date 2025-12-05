// --------------------------------------------------
// MOBILE NAVIGATION
// --------------------------------------------------
const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

// Check if elements exist before adding listeners (important for pages without a menu)
if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });
}


// --------------------------------------------------
// FEATURED PRODUCTS DATA (Single Source of Truth)
// --------------------------------------------------
const featuredProducts = [
    {
        id: "ag-001",
        name: "Knight Steel Armor",
        price: 799,
        image: "images/armor-steel.jpg",
        description: "A handcrafted 15th-century plated armor set forged using traditional blacksmith methods."
    },
    {
        id: "ag-002",
        name: "Templar Longsword",
        price: 349,
        image: "images/templar-sword.jpg",
        description: "Battle-ready longsword modeled after real Templar knight weapons."
    },
    {
        id: "ag-003",
        name: "Viking Battle Axe",
        price: 289,
        image: "images/viking-axe.jpg",
        description: "A brutal yet elegant axe forged for strength, balance, and authentic Viking appearance."
    },
    {
        id: "ag-004",
        name: "Crusader Shield",
        price: 259,
        image: "images/crusader-shield.jpg",
        description: "Wood-and-steel shield with a classic crusader cross. Perfect for reenactments."
    }
];


// --------------------------------------------------
// SHOP & INDEX PAGE: GENERATE PRODUCT CARDS
// --------------------------------------------------
function loadFeaturedProducts() {
    const grid = document.querySelector("#featuredGrid");

    if (!grid) return; // Exit if not on index or shop page

    featuredProducts.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" loading="lazy" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <p>${product.description}</p>
                <button class="btn-primary" data-id="${product.id}">View Details</button>
            </div>
        `;
    });
}

loadFeaturedProducts();


// --------------------------------------------------
// REVIEW PAGE: POPULATE DROPDOWN
// --------------------------------------------------
function populateProductDropdown() {
    const selectElement = document.getElementById('product');

    if (!selectElement) return; // Exit if not on the review page

    featuredProducts.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });

    // Add event listener to update the preview on selection change
    selectElement.addEventListener('change', updatePreview);
}

// REVIEW PAGE: UPDATE PRODUCT PREVIEW
function updatePreview() {
    const selectElement = document.getElementById('product');
    const previewImage = document.getElementById('previewImage');
    const previewName = document.getElementById('previewName');

    const selectedId = selectElement.value;
    const selectedProduct = featuredProducts.find(product => product.id === selectedId);

    if (selectedProduct) {
        previewImage.src = selectedProduct.image;
        previewImage.alt = selectedProduct.name;
        previewName.textContent = selectedProduct.name;
    } else {
        // Fallback for "Select a Product" option
        previewImage.src = "images/placeholder-armor.jpg";
        previewImage.alt = "Product preview";
        previewName.textContent = "Select a product to view details.";
    }
}

// Call the function when the script runs
populateProductDropdown();


// --------------------------------------------------
// EVENT LISTENER EXAMPLE
// --------------------------------------------------
document.addEventListener("click", (event) => {
    if (event.target.matches(".btn-primary") && event.target.dataset.id) {
        const id = event.target.dataset.id;
        alert(`Product selected: ${id}`);
    }
});


// --------------------------------------------------
// LOCAL STORAGE: REVIEW COUNT
// --------------------------------------------------

// Initialize the count if it doesn't exist
if (!localStorage.getItem("visitCount")) {
    localStorage.setItem("visitCount", 0);
}

const reviewForm = document.getElementById('reviewForm');

if (reviewForm) {
    reviewForm.addEventListener('submit', function (event) {
        // Increment the count upon successful submission
        let currentCount = parseInt(localStorage.getItem("visitCount"), 10);
        currentCount++;
        localStorage.setItem("visitCount", currentCount);

        // The form will now submit and redirect to review-confirmation.html
    });
}

