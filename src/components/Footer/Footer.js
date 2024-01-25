import "./Footer.css";

// Crear la función que pinta el Footer

export const Footer = () => {

    // Crear el elemento HTML footer
    const footer = document.createElement("footer");
    
    // Crear el elemento HTML h2
    const h2 = document.createElement("h2");

    // Dar contenido al elemento h2
    h2.textContent = "© All rights reserved to ";

    // Crear elemento HTML span
    const span = document.createElement("span");
    
    // Dar contenido al elemento span
    span.textContent = "Manuel Guerrero";
    
    // Inyectar el elemento span en el elemento h2
    h2.appendChild(span);

    // Inyectar elementos h2 y span al elemento footer
    footer.appendChild(h2);

    // Seleccionar el elemento HTML app
    const app = document.querySelector("#app");

    // Inyectar elemento footer en el DOM
    app.appendChild(footer);

}