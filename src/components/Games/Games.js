import { games } from "../../../data/header/dataHeader";
import { MemoryGame } from "../../../pages/MemoryGame/MemoryGame";
import { TresEnRaya } from "../../../pages/TresEnRaya/TresEnRaya";
import { Trivial } from "../../../pages/Trivial/Trivial";
import { cleanDiv } from "../../functions/functions";
import "./Games.css";


// Crear función que devuelve la capa gameContainer rellena.

export const Games = (gameContainer) => {
    
    // Limpiar la capa gameContainer
    cleanDiv("game-container");

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
            cleanDiv("game-container");

            // Seleccionar el header
            const header = document.querySelector("#app-header");

            // Mostrar el menú superior
            header.style.marginTop = 0;

            // Cargar la pantalla del juego
            // Seleccionar la página a pintar
            const pageToPrint = games[i].page;

            // Pintar la página correspondiente al juego
            switch (pageToPrint) {
                case "TresEnRaya":
                    TresEnRaya("Tres En Raya");
                    break;
                case "MemoryGame":
                    MemoryGame("Memory Game");
                    break;
                case "Trivial":
                    Trivial("Trivial");
                    break;
                default:
                    break;
            }

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