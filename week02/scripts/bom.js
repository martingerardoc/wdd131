// 1. Declare variables for input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

// 2. Add an event listener for the button click event
button.addEventListener('click', () => {
    // 3. Check if the input field is not empty
    if (input.value !== '') {
        // 4. Create a new li element to hold the chapter
        const li = document.createElement('li');

        // 5. Populate the li element's textContent with the input value
        li.textContent = input.value;

        // 6. Create a delete button and set its content to "❌"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Add the delete class for styling

        // 7. Append the delete button to the li element
        li.append(deleteButton);

        // 8. Append the li element to the unordered list
        list.append(li);

        // 9. Add functionality to the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Remove the li element when the delete button is clicked
        });

        // 10. Clear the input field and refocus it for the next entry
        input.value = '';
        input.focus();
    }
});