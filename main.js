function addElement(i) {
	const dicePara = document.createElement("p");
	dicePara.setAttribute("id", "dice" + i);
	const diceNumber = document.createTextNode(i +1);
	dicePara.appendChild(diceNumber);
	const currentDiv = document.getElementById("div1");
	currentDiv.appendChild(dicePara);
}
for (i = 0; i < 5; i++) {
	addElement(i);
}

const nameTable = document.getElementById("playerName");
const playerNameTable = document.createTextNode("you");
nameTable.appendChild(playerNameTable);

const max = 6;
function getRandomInt(max) {
	return Math.floor(Math.random() * max + 1);
}

const btn = document.getElementById("rollButton");
btn.addEventListener("click", () => {
	rollDice();
	fillScoreboard();
});

const rollClass = document.querySelectorAll(".saveRoll");
let choosePoints = false;
rollClass.forEach((roll) => {
	roll.addEventListener("click", () => {
			if (rollsLeft < 3 && choosePoints === false) {
				let lockPoint = roll.id - 1;
				combinations[lockPoint].locked = true;
				roll.style.fontWeight = 'bold';
				roll.style.color = 'black';
				choosePoints = true;
				rollsLeft = 3;
				btn.disabled = false;
				btn.style.opacity =	 '1';
				for (i=0; i<5; i++) {
					let diceText = document.getElementById(`dice${i}`);
					diceText.textContent = i+1;
					console.log(i);
				}
		}
	});
});


class Dice {
	constructor(value, throwable) {
		this.value = value;	
		this.throwable = true;	
	}
}

const dice1 = new Dice();
const dice2 = new Dice();
const dice3 = new Dice();
const dice4 = new Dice();
const dice5 = new Dice();
const dices = [dice1, dice2, dice3, dice4, dice5];

let rollsLeft = 3;
function rollDice() {
	if (rollsLeft > 0) {
		for (i = 0; i < 5; i++) {
			if (dices[i].throwable === true) {
				dices[i].value = getRandomInt(max);
				diceText = document.getElementById(`dice${i}`);
				diceText.textContent = dices[i].value;
			} 
			if (rollsLeft === 1) {
				btn.style.opacity = '0.5';
				btn.disabled = true;
			} else {
				btn.style.opacity = '1';
				btn.disabled = false;
			}
		}
	} else {
		console.log("you are out of rolls")
	}
	rollsLeft--;
	console.log(`rolls ` + rollsLeft);
	choosePoints = false;
}

const throwableDice = document.querySelectorAll('p');
throwableDice.forEach((id) => {
	id.addEventListener("click", () => {
		if (rollsLeft < 3) {	
			let = lockDice = id.id;
			id.style.opacity = '0.5';
			id.style.background = 'grey';
			lockDice = lockDice.replace('dice','');
			if (dices[lockDice].throwable === true) {
				dices[lockDice].throwable = false;
				console.log(lockDice);
				console.log(dices[lockDice].throwable);
			} else {
				dices[lockDice].throwable = true;
				id.style.opacity = '1';
				id.style.background = 'white';
			}

		} 
	});
});

class Scoreboard {
	constructor(value, locked) {
		this.value = 0;
		this.locked = false;
	}
}

let ones = new Scoreboard();
let twos = new Scoreboard();
let threes = new Scoreboard();
let fours = new Scoreboard();
let fives = new Scoreboard();
let sixes = new Scoreboard();
let combinations = [ones, twos, threes, fours, fives, sixes];

function fillScoreboard() {

	for (j=1; j<=6; j++) {
		if (combinations[j-1].locked === false) {
			let rollTd = document.getElementById(j);
			rollTd.textContent = "";
			combinations[j-1].value = 0;
		} 
	}
	let i = 0;
	while (i < dices.length) {
		let currentContent = 0;
		for (x=1; x<=6; x++) {
			let rollTd = document.getElementById(x);
			if(combinations[x-1].locked === false) {
				if (dices[i].value === x) {
					rollTd.style.color = 'red';
					switch(dices[i].value) {
						case 1: 
						currentContent = parseInt(rollTd.textContent) || 0;
						rollTd.textContent = (currentContent + dices[i].value).toString();
						combinations[0].value = Number(rollTd.textContent);
							break;
						case 2: 
						currentContent = parseInt(rollTd.textContent) || 0;
						rollTd.textContent = (currentContent + dices[i].value).toString();
						combinations[1].value = Number(rollTd.textContent);
							break;
						case 3: 
						currentContent = parseInt(rollTd.textContent) || 0;
						rollTd.textContent = (currentContent + dices[i].value).toString();
						combinations[2].value = Number(rollTd.textContent);
							break;
						case 4: 
						currentContent = parseInt(rollTd.textContent) || 0;
						rollTd.textContent = (currentContent + dices[i].value).toString();
						combinations[3].value = Number(rollTd.textContent);
							break;
						case 5: 
						currentContent = parseInt(rollTd.textContent) || 0;
						rollTd.textContent = (currentContent + dices[i].value).toString();
						combinations[4].value = Number(rollTd.textContent);
							break;
						case 6: 
						currentContent = parseInt(rollTd.textContent) || 0;
						rollTd.textContent = (currentContent + dices[i].value).toString();
						combinations[5].value = Number(rollTd.textContent);
							break;
					}
				}
			}
		}
		i++;
	}
}






