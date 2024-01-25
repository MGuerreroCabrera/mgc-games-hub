import { games } from "../../../data/header/dataHeader";
import { MemoryGame } from "../../../pages/MemoryGame/MemoryGame";
import { TresEnRaya } from "../../../pages/TresEnRaya/TresEnRaya";
import { Trivial } from "../../../pages/Trivial/Trivial";
import { cleanDiv } from "../../functions/functions";
import "./Header.css";

// Crear la función que devuelve el header
export const Header = () => {

    // Crear elemento HTML header
    const header = document.createElement("header");
    
    // Le indicamos su id a través del cual le daremos estilos.
    header.id = "app-header";
    
    // Crear menu de navegación
    const ul = document.createElement("ul");
    ul.className = "header-menu-nav";

    // Crear elementos de navegación recorriendo el array de elementos
    for(let i = 0; i < games.length; i++){

        // Crear elementos HTML li y a
        const li = document.createElement("li");
        const a = document.createElement("a");

        // Añadir id a los elementos li
        li.id = games[i].page;

        // Dar valores a los enlaces
        a.src = games[i].path;
        a.textContent = games[i].name;

        // Añadir escuchador de eventos para pintar la page que corresponda.
        a.addEventListener("click", () => {
            // Limpiar la capa gameContent
            cleanDiv("game-container");

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

        // Añadir los enlaces a los elementos HTML li
        li.appendChild(a);

        // Añadir el elemento HTML creado al ul
        ul.appendChild(li);

    }

    // Añadir el menú de navegación al elemento HTML header
    header.appendChild(ul);

    // Devolver el header
    return header;
}