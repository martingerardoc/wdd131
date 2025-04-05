const products = [
	{
	  id: "fc-1888",
	  name: "flux capacitor",
	  averagerating: 4.5
	},
	{
	  id: "fc-2050",
	  name: "power laces",
	  averagerating: 4.7
	},
	{
	  id: "fs-1987",
	  name: "time circuits",
	  averagerating: 3.5
	},
	{
	  id: "ac-2000",
	  name: "low voltage reactor",
	  averagerating: 3.9
	},
	{
	  id: "jj-1969",
	  name: "warp equalizer",
	  averagerating: 5.0
	}
  ];
  
  // Populate the select element with product options
  document.addEventListener("DOMContentLoaded", function () {
	const productSelect = document.getElementById("product");
	products.forEach((product) => {
	  const option = document.createElement("option");
	  option.value = product.id;
	  option.textContent = product.name;
	  productSelect.appendChild(option);
	});
 });
  
  // Review counter with localStorage
  if (window.location.pathname.includes("review.html")) {
	let reviewCount = localStorage.getItem("reviewCount") || 0;
	reviewCount++;
	localStorage.setItem("reviewCount", reviewCount);
	document.getElementById("reviewCount").textContent = reviewCount;
  }const mainnav = document.querySelector('.navigation');
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

