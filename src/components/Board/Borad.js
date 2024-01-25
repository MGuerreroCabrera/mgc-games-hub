import "./Board.css";

// Crear función que devuelve el componente Board
export const Board = (bgColor) => {

    // Crear elemento HTML div que será el tablero
    const board = document.createElement("div");

    // Asignarle un id
    board.id = "board";

    // Añadir estilo en línea para darle bgColor
    board.style.backgroundColor = bgColor;

    // Seleccionar la capa contenedora del juego
    const gameContainer = document.querySelector("#game-container");

    // Inyecta el tablero creado
    gameContainer.appendChild(board);

};