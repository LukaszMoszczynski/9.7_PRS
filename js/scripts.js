var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener("click", newGame);

var pickRock = document.getElementById("js-playerPick_rock");
	pickPaper = document.getElementById("js-playerPick_paper");
	pickScissors = document.getElementById("js-playerPick_scissors");

pickRock.addEventListener("click", function() { playerPick("Rock"); });
pickPaper.addEventListener("click", function() { playerPick("Paper"); });	
pickScissors.addEventListener("click", function() { playerPick("Scissors"); });

var gameState = "not started",
	player = {
		name: "",
		score: 0
	},
	computer = {
		score: 0
	};

var newGameElem = document.getElementById("js-newGameElement"),
	pickElem = document.getElementById("js-playerPickElement"),
	resultsElem = document.getElementById("js-resultsTableElement");

function setGameElements() {
	switch(gameState) {
		case "started":
			newGameElem.style.display = "none";
			pickElem.style.display = "block";
			resultsElem.style.display = "block";
			break;
		case "ended":
			newGameElem.style.display ="block";
			newGameBtn.innerText = "Play again";
		case "notStarted":
		default:
			newGameElem.style.dispay = "block";
			pickElem.style.dispay = "none";
			resultsElem.style.display = "none";
	}
}
setGameElements();

var playerPointsElem = document.getElementById("js-playerPoints"),
	playerNameElem = document.getElementById("js-playerName"),
	copmuterPointsElem = document.getElementById("js-computerPoints");

function newGame () {
	player.name = prompt("Please enter your name", "Player name");
	if (player.name) {
		player.score = computer.score = 0;
		gameState="started";
		setGameElements();

		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}

function getComputerPick() {
	var possiblePicks = ["Rock", "Paper", "Scissors"];
	return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById("js-playerPick"),
	computerPickElem = document.getElementById("js-computerPick"),
	playerResultElem = document.getElementById("js-playerResult"),
	computerResultElem = document.getElementById("js-computerResult");

function checkRoundWinner (playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = "";

	var winnerIs = "player";
		if (playerPick == computerPick) {
			winnerIs = "none";
		} else if (
			(computerPick == "Rock" && playerPick == "Scissors") ||
			(computerPick == "Scissors" && playerPick == "Paper") ||
			(computerPick == "Paper" && playerPick == "Rock")) {
			winnerIs = "computer";
		}

		if (winnerIs == "player") {
			playerResultElem.innerHTML = "Win!";
			player.score++;
			playerPointsElem.innerHTML = player.score;
		} else if (winnerIs == "computer") {
			computerResultElem.innerHTML = "Win!";
			computer.score++;
			copmuterPointsElem.innerHTML = computer.score;
		}
	endGameCheck ();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    copmuterPointsElem.innerHTML = computer.score;
}

function endGameCheck () {
	if (player.score == 10) {
		alert("Congratulation you win!");
		gameState = "ended";
		setGameElements();
	} else if (computer.score == 10){
		alert("You lose!");
		gameState = "ended";
		setGameElements();
	}

}
