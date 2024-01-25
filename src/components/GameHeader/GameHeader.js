import "./GameHeader.css";

// Crear la función que pinta la cabecera del juego.

export const GameHeader = (gameName) => {

    // Seleccionar la capa contenedora del juego
    const gameContainer = document.querySelector("#game-container");   

    // Crear el título del juego
    const gameTitle = document.createElement("h2");
    gameTitle.textContent = gameName;

    // Añadir el título del juego en la capa contenedora del juego
    gameContainer.appendChild(gameTitle);

}