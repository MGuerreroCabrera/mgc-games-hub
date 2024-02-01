import { Footer } from './src/components/Footer/Footer';
import { Games } from './src/components/Games/Games';
import { Header } from './src/components/Header/Header';
import './style.css';

// Seleccionar el elemento HTML donde se pintará la aplicación
const divApp = document.querySelector("#app");

// Creamos la cabecera con el menú de navegación
const header = Header();

// Añadimos cabecera la aplicación
divApp.appendChild(header);

// Crear capa contenedora del juego
let gameContainer = document.createElement("div");
gameContainer.id = "game-container";

// Añadir la capa de inicio de partida al divApp   
divApp.appendChild(Games(gameContainer));

// Inyectar el footer en el DOM
Footer();