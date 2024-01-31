import "./TicTacToeGrid.css";

// Crear la función que devuelve la cuadrícula del juego
export const TicTacToeGrid = () => {

    // Crear el elemento HTML grid
    const ticTacToe = document.createElement("div");
    ticTacToe.id = "tictactoe-grid";

    // Devolver el elemento creado
    return ticTacToe;

};