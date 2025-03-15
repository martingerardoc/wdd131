const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Obtener el año actual para el copyright
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Obtener la última fecha de modificación del documento
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});