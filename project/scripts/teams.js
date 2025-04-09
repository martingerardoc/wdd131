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
    "Real Madrid", "Bayern", "Man City", "PSG",
    "Liverpool", "Barcelona", "Chelsea", "Juventus",
    "Inter", "Napoli", "Atletico", "Arsenal",
    "Dortmund", "Milan", "Benfica", "Ajax"
  ];
  
  let leftBracket = teams.slice(0, 8);
  let rightBracket = teams.slice(8, 16);
  
  const leftContainer = document.getElementById("left-bracket");
  const rightContainer = document.getElementById("right-bracket");
  const finalMatch = document.getElementById("final-match");
  const winnerDiv = document.getElementById("winner");
  
  function createMatches(container, teams, round, side) {
    container.innerHTML = `<h2>${round}</h2>`;
    for (let i = 0; i < teams.length; i += 2) {
      const match = document.createElement("div");
      match.classList.add("match");
      
      const teamA = teams[i];
      const teamB = teams[i + 1];
      const matchId = `${side}-${i}`;
  
      match.innerHTML = `
        <strong>${teamA}</strong>
        <input type="number" id="${matchId}-a" placeholder="Goles" min="0">
        vs 
        <input type="number" id="${matchId}-b" placeholder="Goles" min="0">
        <strong>${teamB}</strong>
        <button onclick="submitResult('${side}', '${teamA}', '${teamB}', '${matchId}')">Enviar</button>
      `;
      container.appendChild(match);
    }
  }
  
  let leftWinners = [];
  let rightWinners = [];
  
  function submitResult(side, teamA, teamB, matchId) {
    const scoreA = parseInt(document.getElementById(`${matchId}-a`).value);
    const scoreB = parseInt(document.getElementById(`${matchId}-b`).value);
  
    if (isNaN(scoreA) || isNaN(scoreB)) {
      alert("Por favor ingresa ambos resultados");
      return;
    }
  
    let winner;
    if (scoreA > scoreB) {
      winner = teamA;
    } else if (scoreB > scoreA) {
      winner = teamB;
    } else {
      alert("Empate detectado. Define un ganador (puedes usar penales o repetir).");
      return;
    }
  
    nextRound(side, winner);
  }
  
  function nextRound(side, winner) {
    if (side === "left") {
      leftWinners.push(winner);
      if (leftWinners.length === leftBracket.length / 2) {
        if (leftWinners.length > 1) {
          leftBracket = leftWinners;
          leftWinners = [];
          createMatches(leftContainer, leftBracket, "Siguiente Ronda", "left");
        } else {
          checkFinalists();
        }
      }
    } else {
      rightWinners.push(winner);
      if (rightWinners.length === rightBracket.length / 2) {
        if (rightWinners.length > 1) {
          rightBracket = rightWinners;
          rightWinners = [];
          createMatches(rightContainer, rightBracket, "Siguiente Ronda", "right");
        } else {
          checkFinalists();
        }
      }
    }
  }
  
  function checkFinalists() {
    if (leftBracket.length === 1 && rightBracket.length === 1) {
      const teamA = leftBracket[0];
      const teamB = rightBracket[0];
      finalMatch.innerHTML = `
        <strong>${teamA}</strong>
        <input type="number" id="final-a" placeholder="Goles" min="0">
        vs 
        <input type="number" id="final-b" placeholder="Goles" min="0">
        <strong>${teamB}</strong>
        <button onclick="decideFinal('${teamA}', '${teamB}')">Enviar</button>
      `;
    }
  }
  
  function decideFinal(teamA, teamB) {
    const scoreA = parseInt(document.getElementById("final-a").value);
    const scoreB = parseInt(document.getElementById("final-b").value);
  
    if (isNaN(scoreA) || isNaN(scoreB)) {
      alert("Por favor ingresa ambos resultados");
      return;
    }
  
    if (scoreA === scoreB) {
      alert("Empate en la final. Define un ganador.");
      return;
    }
  
    const winner = scoreA > scoreB ? teamA : teamB;
    winnerDiv.innerHTML = `<h3>🏆 Campeón: ${winner} 🏆</h3>`;
  }
  
  // Iniciar primeras rondas
  createMatches(leftContainer, leftBracket, "Llave Izquierda", "left");
  createMatches(rightContainer, rightBracket, "Llave Derecha", "right");