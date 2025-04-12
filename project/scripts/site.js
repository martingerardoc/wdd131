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
// Responsive hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const headerTitle = document.querySelector("header h1");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
  headerTitle.classList.toggle("hide");
});

const teams = [
    {
      teamName: "Arcenal",
      location: "Arcenal, England",
      imageUrl:
      "./images/Arsenal.png"
    },
    {
      teamName: "Aston Villa",
      location: "Aston Vila, England",
      imageUrl:
      "./images/Aston Villa.png"
    },
    {
      teamName: "Borussia Dortmunt",
      location: "England",
      imageUrl:
      "./images/Borussia Dortmunt.png"
    },
    {
      teamName: "Barcelona",
      location: "Spain",
      imageUrl:
      "./images/Barcelona.png"
    },
    {
      teamName: "Bayer Munchen",
      location: "Germany",
      imageUrl:
      "./images/FAC Bayer Munchen.png"
    },
    {
      teamName: "Inter",
      location: "Italy",
    
      imageUrl:
      "./images/FC Inter.png"
    },
    {
      teamName: "Paris Saint-Germain.png",
      location: "Paris",
      imageUrl:
      "./images/Paris Saint-Germain.png"
    },
    {
      teamName: "Real Madrid",
      location: "Spain",
      imageUrl: "./images/Real Madrid.png"
    },
   
    
  ];
  

  createTempleCard(teams);
  const nonutahLink = document.querySelector("#nonutah");
  nonutahLink.addEventListener("click", ()=>{
    event.preventDefault();
    createTempleCard(teams.filter(temple => !temple.location.toLowerCase().includes("Utah")));
  });


function createTempleCard(filteredTemples) {
  document.querySelector(".temple-grid").innerHTML="";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.teamName;
    location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.teamName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(img);

    document.querySelector(".temple-grid").appendChild(card);
  })};
