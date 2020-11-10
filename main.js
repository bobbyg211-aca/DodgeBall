const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

// Player constructor
class Player {
  constructor(name, age, skill){
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
}

// TeamMember constructor extended from Player
class TeamMember extends Player {
  constructor(name, age, skill, team){
    super(name,age,skill);
    this.team = team;
  }
}

const listPeopleChoices = (btn) => {
  btn.remove();

  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person, this)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

// Create new player using player class, add to all players array, display list on screen
const makePlayer = (person, btn) => {
  btn.parentElement.remove();

  for(let i = 0; i < arrOfPeople.length; i++) {
    if (arrOfPeople[i].name === person.name) {
      arrOfPeople.splice(i,1);
    }
  }

  // Create new player
  let newPlayer = new Player(person.name, person.age, person.skillSet)
  listOfPlayers.push(newPlayer);
  let players = document.getElementById("players");

  // Create player HTML and append to the page
  let li = document.createElement("li");
  let redBtn = document.createElement("button");
  let blueBtn = document.createElement("button");

  // Player name
  li.innerText = `${newPlayer.name}`;

  // Red team button
  redBtn.innerText = "Red Team";
  redBtn.className = "red-team";
  redBtn.addEventListener("click", function() {addTeam(newPlayer, "red", this)});

  // Blue team button
  blueBtn.innerText = "Blue Team";
  blueBtn.className = "blue-team";
  blueBtn.addEventListener("click", function() {addTeam(newPlayer, "blue", this)});

  // Add all content to page
  players.appendChild(li);
  li.appendChild(redBtn);
  li.appendChild(blueBtn);

  console.log("People", arrOfPeople);
  console.log("Players", listOfPlayers);
}

// Assign player to team based on color button clicked
const addTeam = (player, color, btn) => {
  btn.parentElement.remove();

  for(let i = 0; i < listOfPlayers.length; i++) {
    if (listOfPlayers[i].name === player.name) {
      listOfPlayers.splice(i,1);
    }
  }
   
  let newMember = new TeamMember(player.name, player.age, player.skill, color);

  // Check if red or blue and then append to appropriate area on page
  if (color === "blue") {
    blueTeam.push(newMember);
    let blue = document.getElementById("blue");
    let li = document.createElement("li");

    // Player name
    li.innerText = `${newMember.name}`;
  
    // Add all content to page
    blue.appendChild(li);
  } else if (color === "red") {
    redTeam.push(newMember);
    let red = document.getElementById("red");
    let li = document.createElement("li");

    // Player name
    li.innerText = `${newMember.name}`;
  
    // Add all content to page
    red.appendChild(li);
  }

  console.log("Players",listOfPlayers);
  console.log("Blue Team",blueTeam);
  console.log("Red Team",redTeam);
}

// Test Explanations
  // See README.md file