const max = 6;
function getRandomInt(max) {
	return Math.floor(Math.random() * max + 1);
}

let number = getRandomInt(max);
function addElement(number, i) {

	const newDice = document.createElement("p");
	newDice.setAttribute("id", "dice" + i);
	const diceNumber = document.createTextNode(`${number}`);
	newDice.appendChild(diceNumber);

	const currentDiv = document.getElementById("div1");
	currentDiv.appendChild(newDice);
}

for (i = 0; i < 5; i++) {
	addElement(i, i);
}
let rollsLeft = 3;

const btn = document.getElementById("rollButton");
btn.addEventListener("click", rollDice);


class Dice {
	constructor(value, throwable) {
		this.value = value;	
		this.throwable = true;	
	}

	updateDice() {
		this.value = getRandomInt(max);
	}

	lockDice() {
		this.throwable = false;
	}
}

let dices = [];

while (dices.length < 6) {
	const random = getRandomInt(max);
	const dice = new Dice(random);
	dices.push(dice);
}

function rollDice() {
	for (const dice of dices) {
		if (dice.throwable) {
			dice.updateDice();
			console.log(dice);
		}
	}
}

function keepDice(lock) {
	dices[lock].throw
}





// function rollDice() {
// 	rollsLeft--;
// 	if (rollsLeft > 0) {
// 		for (i = 0; i < 6; i++) {
// 			if (dices[0].throwable != true) {
				const dice = new Dice(getRandomInt(max));
				dices[i] = dice;
				let diceText = document.getElementById(`dice${i}`);
				diceText.textContent = dice.value;
// 			}
// 			console.log(dices[i]);
// 			console.log(rollsLeft);
// 		}
// 	} else {
// 		console.log("you are out of rolls")
// 	}

// }

// throwableDice = document.querySelectorAll("p");
// throwableDice.forEach(throwableDice => {
// 	addEventListener("click", () => {
// 		let Dice = event.target.getAttribute("id");
// 		keptDice = keptDice.replace('dice','');
// 		dices[keptDice].throwable = true;
// 		console.log(keptDice);
// });
	
// });



