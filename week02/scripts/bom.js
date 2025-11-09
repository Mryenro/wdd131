

/**
 * Book of Mormon - Top 10 Chapter List
 * This script establishes references to key DOM elements for future interaction.
 */

// 1. Reference to the input element (using its unique ID: 'favchap')
// This allows us to read the value the user types into the box.
const input = document.getElementById('favchap');

// 2. Reference to the button element
// Since it's the only button on the page, we can use querySelector to target the tag name.
// We will use this variable to attach an event listener (to detect clicks).
const button = document.querySelector('button');

// 3. Reference to the unordered list (ul) element (using its unique ID: 'list')
// This is where we will dynamically add the new chapter entries.
const list = document.getElementById('list');

// Add the event listener to the button
// We use the 'button' variable we defined earlier.
button.addEventListener('click', () => {

    // 1. Check to make sure the input is not blank
    // The trim() method removes whitespace from both ends of a string.
    if (input.value.trim() !== '') {

        // --- Code to create and add the list item runs ONLY if input is NOT blank ---

        // 2. Create the elements (li for the row, span for the text, and delete button)
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');

        // 3. Populate the elements with content
        // IMPORTANT FIX: Use 'input' here instead of 'imput'
        span.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Add class for styling from your CSS

        // 4. Append the span and button (the actual element variables, not strings) to the li
        li.appendChild(span);
        li.appendChild(deleteButton);

        // 5. Add the li to the main list
        list.appendChild(li);

        // 6. Add event listener to the delete button (as requested)
        deleteButton.addEventListener('click', function () {
            // This is the delete functionality: remove the entire li element
            list.removeChild(li);
            // REQUIREMENT: Focus should be sent to the input after deletion
            input.focus();
        });

        // 7. REQUIREMENT: Clear the input field after successful addition
        input.value = '';

    }

    // 8. REQUIREMENT: Whether or not a list item was created, the focus (active cursor) 
    // should be sent to the input element.
    input.focus();
});