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
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "./images/Arsenal.png"
    },
    {
      teamName: "Aston Villa",
      location: "Aston Vila, England",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "./images/Aston Villa.png"
    },
    {
      teamName: "Borussia Dortmunt",
      location: "England",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "./images/Borussia Dortmunt.png"
    },
    {
      teamName: "Barcelona",
      location: "Spain",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "./images/Barcelona.png"
    },
    {
      teamName: "Bayer Munchen",
      location: "Germany",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "./images/FAC Bayer Munchen.png"
    },
    {
      teamName: "Inter",
      location: "Italy",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "./images/FC Inter.png"
    },
    {
      teamName: "Paris Saint-Germain.png",
      location: "Paris",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "./images/Paris Saint-Germain.png"
    },
    {
      teamName: "Real Madrid",
      location: "Spain",
      dedicated: "1978, October, 30",
      area: 10497,
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
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.teamName;
    location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.teamName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temple-grid").appendChild(card);
  })};
