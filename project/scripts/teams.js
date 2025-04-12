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

const resultados = {
  "round-1-left": [
    [2, 1],
    [1, 3],
    [2, 0],
    [1, 0] // suponemos que gana Chelsea
  ],
  "round-1-right": [
    [3, 1],
    [1, 2],
    [0, 1],
    [4, 2]
  ],
  "round-2-left": [
    [2, 1], // Real Madrid vs PSG
    [1, 1]  // Liverpool vs Chelsea (gana Chelsea por penales)
  ],
  "round-2-right": [
    [2, 0],
    [3, 2]
  ],
  "semis-left": [
    [3, 1] // Real Madrid vs Chelsea
  ],
  "semis-right": [
    [2, 2] // Inter vs Benfica (gana Benfica)
  ],
  "final": [
    [1, 2] // Real Madrid vs Benfica → gana Benfica
  ]
};

const rounds = {
  "round-1-left": teams.slice(0, 8),
  "round-1-right": teams.slice(8, 16)
};

const nextRounds = {
  "round-1-left": "round-2-left",
  "round-2-left": "semis-left",
  "semis-left": "final",
  "round-1-right": "round-2-right",
  "round-2-right": "semis-right",
  "semis-right": "final"
};

let roundWinners = {
  "round-1-left": [],
  "round-2-left": [],
  "semis-left": [],
  "round-1-right": [],
  "round-2-right": [],
  "semis-right": [],
  "final": []
};

function simulateRound(roundName) {
  const equipos = rounds[roundName];
  const resultadosRound = resultados[roundName];
  const ganadores = [];

  const container = document.getElementById(roundName);
  container.innerHTML = "";

  for (let i = 0; i < equipos.length; i += 2) {
    const teamA = equipos[i];
    const teamB = equipos[i + 1];
    const [golesA, golesB] = resultadosRound[i / 2];

    const ganador = golesA > golesB ? teamA : teamB;
    ganadores.push(ganador);

    const match = document.createElement("div");
    match.classList.add("match");
    match.innerHTML = `
      <div><strong>${teamA}</strong> ${golesA}</div>
      <div><strong>${teamB}</strong> ${golesB}</div>
      <div>Ganador: <strong>${ganador}</strong></div>
    `;
    container.appendChild(match);
  }

  const next = nextRounds[roundName];
  if (next) {
    rounds[next] = ganadores;
    simulateRound(next);
  } else {
    // final jugada
    document.getElementById("champion").innerHTML = `🏆 Campeón: <strong>${ganadores[0]}</strong>`;
  }
}

simulateRound("round-1-left");
simulateRound("round-1-right");

const equipos = [
  "River", "Boca", "Man City", "PSG",
  "Liverpool", "Barcelona", "Chelsea", "Juventus",
  "Inter", "Napoli", "Atletico", "Arsenal",
  "Dortmund", "Milan", "Benfica", "Ajax"
];

const results = {
  "round-1-left": [
    [2, 1],
    [1, 3],
    [2, 0],
    [1, 0] // suponemos que gana Chelsea
  ],
  "round-1-right": [
    [3, 1],
    [1, 2],
    [0, 1],
    [4, 2]
  ],
  "round-2-left": [
    [2, 1], // Real Madrid vs PSG
    [1, 1]  // Liverpool vs Chelsea (gana Chelsea por penales)
  ],
  "round-2-right": [
    [2, 0],
    [3, 2]
  ],
  "semis-left": [
    [3, 1] // Real Madrid vs Chelsea
  ],
  "semis-right": [
    [2, 2] // Inter vs Benfica (gana Benfica)
  ],
  "final": [
    [1, 2] // Real Madrid vs Benfica → gana Benfica
  ]
};

const round = {
  "round-1-left": teams.slice(0, 8),
  "round-1-right": teams.slice(8, 16)
};

const nextRound = {
  "round-1-left": "round-2-left",
  "round-2-left": "semis-left",
  "semis-left": "final",
  "round-1-right": "round-2-right",
  "round-2-right": "semis-right",
  "semis-right": "final"
};

let roundWinner = {
  "round-1-left": [],
  "round-2-left": [],
  "semis-left": [],
  "round-1-right": [],
  "round-2-right": [],
  "semis-right": [],
  "final": []
};

function simulateRound(roundName) {
  const equipos = rounds[roundName];
  const resultadosRound = resultados[roundName];
  const ganadores = [];

  const container = document.getElementById(roundName);
  container.innerHTML = "";

  for (let i = 0; i < equipos.length; i += 2) {
    const teamA = equipos[i];
    const teamB = equipos[i + 1];
    const [golesA, golesB] = resultadosRound[i / 2];

    const ganador = golesA > golesB ? teamA : teamB;
    ganadores.push(ganador);

    const match = document.createElement("div");
    match.classList.add("match");
    match.innerHTML = `
      <div><strong>${teamA}</strong> ${golesA}</div>
      <div><strong>${teamB}</strong> ${golesB}</div>
      <div>Ganador: <strong>${ganador}</strong></div>
    `;
    container.appendChild(match);
  }

  const next = nextRounds[roundName];
  if (next) {
    rounds[next] = ganadores;
    simulateRound(next);
  } else {
    // final jugada
    document.getElementById("champion").innerHTML = `🏆 Campeón: <strong>${ganadores[0]}</strong>`;
  }
}

simulateRound("round-1-left");
simulateRound("round-1-right");