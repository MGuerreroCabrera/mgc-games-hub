import { Board } from "../../src/components/Board/Borad";
import { Button } from "../../src/components/Button/Button";
import { GameTitle } from "../../src/components/GameTitle/GameTitle";
import { infoTresEnRaya } from "../../src/components/Info/Info";
import { cleanDiv } from "../../src/functions/functions";
import { printGame, printHeaderGame } from "../../src/functions/tresenrayaFunctions";
import "./TresEnRaya.css";

// Crear la función que pinte la página del MemoryGame

export const TresEnRaya = (gameName) => {

     // Crear la cabecera del juego
     const titleGameContainer = GameTitle(gameName);

     // Seleccionar el contenedor del juego
     const gameContainer = document.querySelector("#game-container");
 
     // Inyectar cabecera del juego en el contenedor
     gameContainer.appendChild(titleGameContainer);

     // Crear el Botón para iniciar la partida
    const initButton = Button("Iniciar Partida", "generic-btn");

    // Recoger información del localStorage
    const lastWinner = localStorage.getItem("tresenrayaWinner");

    // Crear la capa info anterior del juego
    const info = infoTresEnRaya("Datos del juego", lastWinner, initButton);

    // Inyectar la capa info del juego al gameContainer
    gameContainer.appendChild(info);

    // Añadir escuchador de eventos al button para iniciar partida
    initButton.addEventListener("click", () => {

        // Vaciar el contenido de la capa gameContainer
        cleanDiv("game-container");

        // Añadir el título de nuevo        
        gameContainer.appendChild(titleGameContainer);

        // Pintar la cabecera del juego
        printHeaderGame();

        // Crear un tablero
        Board("#171717");        

        // Pintar partida
        printGame();

    });

}