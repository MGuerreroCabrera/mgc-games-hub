import { navElements } from "../../../data/header/dataHeader";
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
    for(let i = 0; i < navElements.length; i++){

        // Crear elementos HTML li y a
        const li = document.createElement("li");
        const a = document.createElement("a");

        // Dar valores a los enlaces
        a.src = navElements[i].path;
        a.textContent = navElements[i].name;

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