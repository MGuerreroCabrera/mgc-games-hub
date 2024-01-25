import "./GameTitle.css"

// Crear la función que devuelve el Título del juego

export const GameTitle = (title) => {

    // Crear el elemento HTML div que contendrá el título del juego
    const gameTitleContainer = document.createElement("div");
    
    // Añadir clase al elemento creado
    gameTitleContainer.className = "game-title-container";

    // Crear el elemento HTML h2 para el título del juego
    const gameTitle = document.createElement("h2");

    // Añadir contenido al elemento h2 
    gameTitle.textContent = title;

    // Inyectar el elemento h2 en el div
    gameTitleContainer.appendChild(gameTitle);

    // Devolver el componente GameTitle
    return gameTitleContainer;

};