import { loadConfigFromFile } from "vite";
import { gameThemes } from "../../data/trivial/dataTrivial";
import { Board } from "../../src/components/Board/Borad";
import { Button } from "../../src/components/Button/Button";
import { GameHeader } from "../../src/components/GameHeader/GameHeader";
import { GameTitle } from "../../src/components/GameTitle/GameTitle";
import { Info } from "../../src/components/Info/Info";
import { cleanDiv } from "../../src/functions/functions";
import { printCards } from "../../src/functions/trivialFunctions";
import "./Trivial.css";

// Crear la función que pinte la página de Trivial

export const Trivial = (gameName) => {

    // Crear la cabecera del juego
    const titleGameContainer = GameTitle(gameName);

    // Seleccionar el contenedor del juego
    const gameContainer = document.querySelector("#game-container");

    // Inyectar cabecera del juego en el contenedor
    gameContainer.appendChild(titleGameContainer);

    // Crear el Botón para iniciar la partida
    const initButton = Button("Iniciar Partida", "generic-btn");

    // Recoger información del localStorage
    //const lastScore = localStorage.getItem("trivialScore");    
   
    // Crear la capa info anterior del juego
    const info = Info("Datos del juego", "No se han encontrado datos registrados de otras partidas en este dispositivo" , initButton, );
    // const info = Info("Datos del juego", localStorage.getItem("trivialScore"), initButton, );

    // Inyectar la capa info del juego al gameContainer
    gameContainer.appendChild(info);

    // Añadir escuchador de eventos al button para iniciar partida
    initButton.addEventListener("click", () => {

        // Vaciar el contenido de la capa gameContainer
        cleanDiv("game-container");

        // Añadir el título de nuevo        
        gameContainer.appendChild(titleGameContainer);

        // Crear elemento HTML select para las temáticas
        let themesSelect = document.createElement("select");
        themesSelect.name = "gameThemes";
        themesSelect.id = "game-themes";        

        // Crear elemento HTML option para añadir la opción -seleccionar
        const firstOption = document.createElement("option");
        firstOption.value = 0;
        firstOption.textContent = "👇 Selecciona un tema 👇"

        // Inyectar option de inicio
        themesSelect.appendChild(firstOption);

        // Recorrer el array de temáticas
        for(let i = 0; i < gameThemes.length; i++) {          

            // Crear elemento HTML option para añadir al select
            const optionGame = document.createElement("option");

            // Asignar valor al option
            optionGame.value = gameThemes[i].gameArray;

            // Texto del option
            optionGame.textContent = gameThemes[i].name;

            // Inyectar elemento option en el select
            themesSelect.appendChild(optionGame);

        }

        // Seleccionar la capa contenedora de la cabecera
        const gameHeaderContainer = document.querySelector(".game-title-container");
        
        // Inyectar desplegable a la cabecera del juego
        gameHeaderContainer.appendChild(themesSelect);

        // Añadir escuchador de eventos para cambiar el tablero
        themesSelect.addEventListener("change", (e) => {

            // Seleccionar el tablero
            const cleanBoard = document.querySelector("#board");

            if(cleanBoard){
                // Limpiar el tablero
                cleanBoard.innerHTML = ``;

                // Pintar las cartas
                printCards(e.target.value);
            }else {
                // Pintar partida
                Board("#f7ecdd");

                // Pintar las cartas
                printCards(e.target.value);
            }    
        });

    });

}