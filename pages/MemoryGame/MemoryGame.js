import { Board } from "../../src/components/Board/Borad";
import { Button } from "../../src/components/Button/Button";
import { GameTitle } from "../../src/components/GameTitle/GameTitle";
import { infoMemory } from "../../src/components/Info/Info";
import { cleanDiv } from "../../src/functions/functions";
import { createMemoryGame } from "../../src/functions/memorygameFunctions";
import "./MemoryGame.css";

// Crear la función que pinte la página del MemoryGame

export const MemoryGame = (gameName) => {

    // Crear la cabecera del juego
    const titleGameContainer = GameTitle(gameName);

    // Seleccionar el contenedor del juego
    const gameContainer = document.querySelector("#game-container");

    // Inyectar cabecera del juego en el contenedor
    gameContainer.appendChild(titleGameContainer);

    // Crear el Botón para iniciar la partida
    const initButton = Button("Iniciar Partida", "generic-btn");    

    // Recoger la variable del localStorage para el mensaje
    const lastScore = localStorage.getItem("memoryShoot");

    // Crear la capa info anterior del juego
    const info = infoMemory("Datos del juego", lastScore, initButton);

    // Inyectar la capa info del juego al gameContainer
    gameContainer.appendChild(info);

    // Añadir escuchador de eventos al button para iniciar partida
    initButton.addEventListener("click", () => {

        // Vaciar el contenido de la capa gameContainer
        cleanDiv("game-container");

        // Añadir el título de nuevo        
        gameContainer.appendChild(titleGameContainer);       

        // Crear un tablero
        Board("#171717");        

        // Pintar partida
        createMemoryGame();
        
    });

}