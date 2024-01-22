import { Header } from './src/components/Header/Header';
import './style.css';

// Seleccionar el elemento HTML donde se pintará la aplicación
const divApp = document.querySelector("#app");

// Creamos la cabecera con el menú de navegación
const header = Header();

// Añadimos cabecera la aplicación
divApp.appendChild(header);

const btTest = document.createElement("button");
btTest.textContent = "Mostrar menú";

const headerDos = document.querySelector("#app-header");

btTest.addEventListener("click", () => {
    headerDos.style.marginTop = 0;
});

divApp.appendChild(btTest);