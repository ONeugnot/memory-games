const startGame = document.querySelector(".btn-start-game");
const backgroundPosition = document.querySelector(".start-game");
const burgerPopUp = document.querySelector(".burger");
const burgerLogo = document.getElementById("burger-jsp");
const backDisplayBurger = document.getElementById("comeback-btn");
const text1 = document.getElementById("jsp1");	
const text2 = document.getElementById("jsp2");	
const text3 = document.getElementById("jsp3");	
const text4 = document.getElementById("jsp4");	
startGame.addEventListener("click", () => {
	backgroundPosition.remove();
});

burgerLogo.addEventListener("click", () => {
	burgerPopUp.style.display = "flex";
});

backDisplayBurger.addEventListener("click", () => {
	burgerPopUp.style.display = "none";
});

function updateText() {
	if (window.matchMedia("(min-width: 768px)").matches) {
		text1.textContent = "Player1";
		text2.textContent = "Player2";
		text3.textContent = "Player3";
		text4.textContent = "Player4";
	} else {
		text1.textContent = "P1";
		text2.textContent = "P2";
		text3.textContent = "P3";
		text4.textContent = "P4";
	}
}

updateText();		
window.addEventListener("resize", updateText);


// main js 

let score = 0 
const player1  = document.getElementById("jsp1")
const player2  = document.getElementById("jsp2")
const player3  = document.getElementById("jsp3")
const player4  = document.getElementById("jsp4")

const tableauChiffre = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "",""]
