import { Trivial } from "../../pages/Trivial/Trivial";

// Función que limpia la capa contenedora gameDiv
export const cleanDiv = (idDiv) => {
    
    // Crear la variable id de la capa a limpiar
    const idDivToClean = `#${idDiv}`;

    // Seleccionar el elemento del DOM a limpiar
    const divToClean = document.querySelector(idDivToClean);

    // Limpiar el elemento seleccionado
    if(divToClean !== null) { divToClean.innerHTML = ""; }

}

export const initGame = (gameName) => {
    // seleccionar el div #game-container
    const gameContainer = document.querySelector("#game-container");
    // vaciar el contenido del div
    gameContainer.innerHTML = ``;

    switch (gameName) {
        case "Trivial":
                // pintar la pantalla principal del trivial
                Trivial("Trivial")           ;
            break;
        case "TresEnRaya":
            break;
        case "MemoryGame":
            break;
        default:
            break;
    }

};