const form = document.querySelector("#form");
const valueInput = document.querySelector("#form-input");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the form from reloading the page
    const inputValue = valueInput.value; // Gets the value of the input field
    console.log("The value of the form is: " + inputValue);
});