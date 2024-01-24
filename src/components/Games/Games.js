import { cleanGameDiv } from "../../../main";
import "./Games.css";

// Array de juegos disponibles en la aplicación.
const games = [
    {
        name: "TRIVIAL",
        icon: "🤓"
    },
    {
        name: "3 EN RAYA",
        icon: "⭕️❌⭕️"
    },
    {
        name: "MEMORY GAME",
        icon: "🤔"
    }
];

// Crear función que devuelve la capa gameContainer rellena.

export const Games = (gameContainer) => {
    
    // Limpiar la capa gameContainer
    gameContainer.innerHTML = ``;
    

    // Recorrer el array de juegos
    for(let i = 0; i < games.length; i++) {

        // Crear capa por cada juego
        const gameDiv = document.createElement("div");
        
        // Dar la clase a la capa
        gameDiv.className  = "game-div";

        // Crear el elemento HTML título del juego
        const gameTitle = document.createElement("h2");

        // Dar estilo a título
        gameTitle.className = "game-title";

        // Añadir contenido al título
        gameTitle.textContent = games[i].name;

        // Crear el elemento HTML imagen del juego
        const gameImage = document.createElement("p");

        // Dar estilo a la imagen del juego
        gameImage.className = "game-image";

        // Añadir contenido a la imagen del juego
        gameImage.textContent = games[i].icon;

        // Añadir escuchador de eventos para mostrar menú superior
        gameImage.addEventListener("click", () => {
            
            // Limpiar la capa contenedora del juego
            cleanGameDiv();

            // Seleccionar el header
            const header = document.querySelector("#app-header");

            // Mostrar el menú superior
            header.style.marginTop = 0;
        });

        // Añadir título a la capa game-div
        gameDiv.appendChild(gameTitle);

        // Añadir imagen del juego a la capa game-div
        gameDiv.appendChild(gameImage);

        // Añadir game-div a appContainer
        gameContainer.appendChild(gameDiv);

    }
    
    // Devolver appContainer
    return gameContainer;

}