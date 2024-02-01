// Librería de funciones para el juego del 3 en Raya

import { Button } from "../components/Button/Button";
import { TicTacToeGrid } from "../components/TicTacToeGrid/TicTacToeGrid";
import { cleanDiv, initGame } from "./functions";

export const printHeaderGame = () => {

    // Seleccionar el elemento game-title-container del DOM
    const gameTitleContainer = document.querySelector(".game-title-container");

    // Crear cabecera con la info del logo de cada jugador
    const infoPlayers = document.createElement("div");
    infoPlayers.id = "info-players";

    // Crear el elemento HTML h2 para título jugador
    const h2Player = document.createElement("h2");

    // Añadir contenido al textContent
    h2Player.textContent = "Jugador";

    // Crear el elemento HTML h2 para título jugador
    const h2Machine = document.createElement("h2");

    // Añadir contenido al textContent
    h2Machine.textContent = "Máquina";

    // Crear el elemnto h2 para la ficha del jugador
    const h2PlayerImg = document.createElement("h2");

    // Añadir emoji al h2 que representará al jugador 
    h2PlayerImg.textContent = `🐥`;

    // Crear el elemento h2 para la ficha de la máquina
    const h2MachineImg = document.createElement("h2");
    h2MachineImg.textContent = `🤖`;

    // Añadir elementos creados a la capa info-players
    infoPlayers.appendChild(h2Player);
    infoPlayers.appendChild(h2PlayerImg);
    infoPlayers.appendChild(h2MachineImg);
    infoPlayers.appendChild(h2Machine);

    // Añadir infoPlayer a la cabecera del juego
    gameTitleContainer.appendChild(infoPlayers);

};

// Función que pinta la partida
export const printGame = () => {
    
    // Seleccionar el board creado
    const board = document.querySelector("#board");

    // Añadir el elemento cuadrícula.
    const tictactoeGrid = TicTacToeGrid();

    // Inyectar la cuadrícula al board 
    board.appendChild(tictactoeGrid);

    // Seleccionar la cuadrícula del juego
    const grid = document.querySelector('#tictactoe-grid');

    // Crear array de celdas vacío
    const cells = [];

    // Asignar emogi al jugador
    let currentPlayer = '🐥';

    // Crear celdas del tablero
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
            
            // Crear el elemento HTML div para la celda
            const cell = document.createElement('div');
            cell.id = i.toString() + j.toString();
            console.log(cell.id);
            
            // Añadir la clase al elemento
            cell.classList.add('cell');

            // Añadir la propiedad fila al div con el valor de i
            cell.dataset.row = i;

            // Añadir la propiedad columna al div con el valor j
            cell.dataset.col = j;

            // Añadir el escuchador de eventos para pintar el emoji correspondiente en la celda
            cell.addEventListener('click', cellClick);

            // Añadir la celda ocupada al array de tiradas
            cells.push(cell);

            // Inyectar la celda en el grid de la partida
            grid.appendChild(cell);

        }

    }

    // Manejar el clic en una celda
    function cellClick() {

        // Verificar si la celda está vacía
        if (!this.textContent) {

            // Añadir a la celda el emoji del jugador
            this.textContent = currentPlayer;

            // Verificar si hay un ganador
            if (checkWinner()) {
                // Seleccionar el tablero 
                const board = document.querySelector("#board");

                // Borrar el tablero
                board.innerHTML = ``;

                // Crear la capa para el resultado del juego
                const resultGameContainer =  document.createElement("div");
                resultGameContainer.id = "result-game-container";

                // Añadir información del resultado de la partida
                const resultGame = document.createElement("h3");
                resultGame.textContent = `Esta intrépida partida la gana ${currentPlayer}`;

                // Añadir el texto con la info a la capa resultado
                resultGameContainer.appendChild(resultGame);

                // Inyectar la información en la variable en el LOCALSTORAGE
                localStorage.setItem("tresenrayaWinner", currentPlayer);

                // Crear el botón de salir del juego
                const btLeave = Button("Salir del juego", "generic-btn");
                btLeave.addEventListener("click", () => {
                    initGame("TresEnRaya");
                });

                // Añadir el botón de salir del juego a la capa resultado
                resultGameContainer.appendChild(btLeave);

                // Añadir la capa resultado al board
                board.appendChild(resultGameContainer);

            } else {

            // Cambiar al siguiente jugador
            currentPlayer = currentPlayer === '🐥' ? '🤖' : '🐥';

            // Hacer el movimiento de la máquina después de un breve retraso
            setTimeout(machineMove, 500);
            }

        }
    }

    // Movimiento de la máquina
    function machineMove() {

        const emptyCells = cells.filter(cell => !cell.textContent);

        if (emptyCells.length > 0) {

            // Crear un índice al azar
            const randomIndex = Math.floor(Math.random() * emptyCells.length);

            // Elegir una celda vacía
            const randomCell = emptyCells[randomIndex];

            // Inyectar en la celda seleccionada el emogi de la máquina
            randomCell.textContent = currentPlayer;

            // Verificar si hay un ganador
            if (checkWinner()) {
            
                // Seleccionar el tablero 
                cleanDiv("#board");

                // Crear la capa para el resultado del juego
                const resultGameContainer =  document.createElement("div");
                resultGameContainer.id = "result-game-container";

                // Añadir información del resultado de la partida
                const resultGame = document.createElement("h3");
                resultGame.textContent = `Esta intrépida partida la gana ${currentPlayer}`;

                // Añadir el texto con la info a la capa resultado
                resultGameContainer.appendChild(resultGame);

                // Inyectar la información en la variable en el LOCALSTORAGE
                localStorage.setItem("tresenrayaWinner", currentPlayer);

                // Crear el botón de salir del juego
                const btLeave = Button("Salir del juego", "generic-btn");
                btLeave.addEventListener("click", () => {
                    initGame("TresEnRaya");
                });

                // Añadir el botón de salir del juego a la capa resultado
                resultGameContainer.appendChild(btLeave);

                // Añadir la capa resultado al board
                board.appendChild(resultGameContainer);

            } else {

            // Cambiar al siguiente jugador
            currentPlayer = currentPlayer === '🐥' ? '🤖' : '🐥';

            }
        }
    }

// Verificar si hay un ganador
function checkWinner() {

    // Crear array de combinaciones ganadoras
    const winningCombinations = [
        // Filas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columnas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonales
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Devolver si encuentra alguna combinación ganadora usando método some()
    return winningCombinations.some(combination => {

        const [a, b, c] = combination;        

        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
    });
}

};