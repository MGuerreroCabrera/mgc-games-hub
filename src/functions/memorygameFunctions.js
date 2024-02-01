import { Button } from "../components/Button/Button";
import { cleanDiv, initGame } from "./functions";

// Emojis para el juego
const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🦊', '🐼', '🐨', '🐯'];

// Array para almacenar las cartas volteadas
let flippedCards = [];

// Crear variable que almacena el número de cartas adivinadas para controlar el final de la partida
let controlGame = 0;

// Crear variable para llevar control de tiradas
let COUNT = 0;

// Función para mezclar un array
const shuffleArray = array => {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];

  }

  return array;
};

// Función para crear el juego de memoria
export const createMemoryGame = () => {

  // Obtener el contenedor del juego
  const board = document.querySelector("#board")

  const gridContainer = document.createElement("div");
  gridContainer.id = "memory-game";

  // Crear un array con emojis duplicados y mezclarlo
  const shuffledEmojis = shuffleArray([...emojis, ...emojis]);

  // Iterar sobre cada emoji y crear una carta
  shuffledEmojis.forEach((emoji, index) => {

    // Crear un elemento de carta
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Crear dos elementos para mostrar el emoji en la parte frontal y trasera
    const front = document.createElement('div');
    front.classList.add('face', 'front');
    card.appendChild(front);

    const back = document.createElement('div');
    back.classList.add('face', 'back');
    back.textContent = emoji;
    card.appendChild(back);

    // Agregar un evento de clic a la carta
    card.addEventListener('click', () => flipCard(card));

    // Agregar la carta al gridContainer
    gridContainer.appendChild(card);

  });

  // Agregar el gridContainer al board
  board.appendChild(gridContainer);

};

// Función para voltear una carta
export const flipCard = card => {

  // Verificar si ya hay dos cartas volteadas
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {

    // Voltear la carta
    card.classList.add('flipped');

    // Verificar si la carta tiene la clase 'front'
    if (card.querySelector('.front')) {

      // Si la carta tiene la clase 'front', ocultar la parte frontal
      card.querySelector('.front').style.display = 'none';

    }

    // Almacenar la carta en el array flippedCards
    flippedCards.push(card);

    // Verificar si se han volteado dos cartas
    if (flippedCards.length === 2) {

      // Esperar un segundo antes de verificar la coincidencia
      setTimeout(checkMatch, 1000);

    }

  }

};

// Función para verificar si las cartas coinciden
const checkMatch = () => {

    // Sumar una tirada al contador
    COUNT += 1;

    // Crear variables que contendrán las cartas volteadas
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    // Verificar si las cartas tienen el mismo emoji
    if (card1.querySelector('.back').textContent === card2.querySelector('.back').textContent) {

        // Match: dejar las cartas volteadas y visibles vaciando el array
        flippedCards = [];

        // Sumar 1 al control del final de la partida
        controlGame += 1;

        // Si controlGame vale 10 es que ya ha terminado la partida
        if(controlGame === 10)
        {
            // Añadir variable al localStorage
            localStorage.setItem("memoryShoot", COUNT);
            
            // Finalizar la partida
            endGame();
        }

    }else{

    // No hay coincidencia: voltear las cartas nuevamente con un efecto "flip"
    setTimeout(() => {
        
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');

        // Mostrar la parte frontal nuevamente
        card1.querySelector('.front').style.display = 'flex';
        flippedCards = [];

    }, 500);

    }

};

// Crear la función que finaliza la partida
const endGame = () => {

    // Limpiar el board
    cleanDiv("board")    ;

    // Añadir variable COUNT al LOCALSTORAGE
    localStorage.setItem("memoryShoot", COUNT);

    // Pintar el mensaje de Enhorabuena
    // Crear la capa para el resultado del juego
    const resultGameContainer =  document.createElement("div");
    resultGameContainer.id = "result-game-container";

    // Añadir información del resultado de la partida
    const resultGame = document.createElement("h3");
    resultGame.textContent = `Enhorabuena. Has tirado solo ${COUNT} veces`;

    // Añadir el texto con la info a la capa resultado
    resultGameContainer.appendChild(resultGame);

    // Crear el botón de salir del juego
    const btLeave = Button("Salir del juego", "generic-btn");
    btLeave.addEventListener("click", () => {
        initGame("MemoryGame");
    });

    // Añadir el botón de salir del juego a la capa resultado
    resultGameContainer.appendChild(btLeave);

    // Añadir la capa resultado al board
    board.appendChild(resultGameContainer);

}