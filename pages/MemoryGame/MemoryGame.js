import { Button } from "../../src/components/Button/Button";
import { GameHeader } from "../../src/components/GameHeader/GameHeader";
import { GameTitle } from "../../src/components/GameTitle/GameTitle";
import { Info } from "../../src/components/Info/Info";
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

    // Crear la capa info anterior del juego
    const info = Info("Datos del juego", "" ,initButton);

    // Inyectar la capa info del juego al gameContainer
    gameContainer.appendChild(info);

}