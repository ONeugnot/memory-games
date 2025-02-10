const startGame = document.querySelector(".btn-start-game");
const backgroundPosition = document.querySelector(".start-game");
const burgerPopUp = document.querySelector(".burger");
const burgerLogo = document.getElementById("burger-jsp");
const backDisplayBurger = document.getElementById("comeback-btn");
startGame.addEventListener("click", () => {
	backgroundPosition.remove();
});

burgerLogo.addEventListener("click", () => {
	burgerPopUp.style.display = "flex";
});

backDisplayBurger.addEventListener("click", () => {
	burgerPopUp.style.display = "none";
});
