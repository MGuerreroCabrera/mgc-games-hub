import { Button } from "../Button/Button";
import "./Info.css";

// Crear la función que devuelve el modal o capa de información de nuestra última partida.
// Recibirá por parámetros un título, un párrafo y un botón para activar la partida.

export const Info = (title, description, button) => {

    // Crear el elemento HTML div que contendrá los elementos
    const infoContainer = document.createElement("div");
    
    // Asignar id al elemento
    infoContainer.id = "info-container";

    // Crear el elmento HTML h2 para el título de la capa
    const infoTitle = document.createElement("h2");

    // Asignar contenido al elemento h2
    infoTitle.textContent = title;

    // Crear el elemento HTML para el texto del mensaje para el usuario
    const p = document.createElement("p");

    // Asignar contenido al elemento p
    p.textContent = description;

    // Inyectar elementos creados en la capa infoContainer
    infoContainer.appendChild(infoTitle);
    infoContainer.appendChild(p);
    infoContainer.appendChild(button);

    // Devolver el elemento info
    return infoContainer;

};