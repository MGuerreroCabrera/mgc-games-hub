import { Footer } from './src/components/Footer/Footer';
import { Games } from './src/components/Games/Games';
import { Header } from './src/components/Header/Header';
import './style.css';

// Crear variable que controlará si hay algún juego. En el caso de no haber ningún juego o es la primera entrada a la aplicación pintará la pantalla principal.
let activeGame = false;

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
        // Inicializar la variable activeGame a true
        //activeGame = true;

        // Añadir la capa de inicio de partida al divApp   
        divApp.appendChild(Games(gameContainer));

        break;

    case true:
        // Inicializar la variable gameContainer a flase
        //activeGame = false;

        // Limpiar la capa contenedora de los juegos        

        // Pintar la capa que contiene la pantalla de inicio

        break;

    default:
        break;
}

// Inyectar el footer en el DOM
Footer();