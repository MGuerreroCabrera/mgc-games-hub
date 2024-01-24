import { Games } from './src/components/Games/Games';
import { Header } from './src/components/Header/Header';
import './style.css';

// Crear variable que controlará si hay algún juego. En el caso de no haber ningún juego o es la primera entrada a la aplicación pintará la pantalla principal.
let activeGame = false;

// Crear función que limpia la capa contenedora gameDiv
export const cleanGameDiv = () => {

    // Seleccionar la capa contenedora del juego
    const gameDiv = document.querySelector("#game-container");

    // Limpiar el contenido
    gameDiv.innerHTML = ``;

}

// Seleccionar el elemento HTML donde se pintará la aplicación
const divApp = document.querySelector("#app");

// Creamos la cabecera con el menú de navegación
const header = Header();

// Añadimos cabecera la aplicación
divApp.appendChild(header);

// Crear capa contenedora del juego
let gameContainer = document.createElement("div");
gameContainer.id = "game-container";

// Segun valor de activeGame (true / false) se pinta el juego o la pantalla principal
switch (activeGame) {
    case false:

        // Añadir la capa de inicio de partida al divApp   
        divApp.appendChild(Games(gameContainer));

        break;

    case true:
        break;

    default:
        break;
}