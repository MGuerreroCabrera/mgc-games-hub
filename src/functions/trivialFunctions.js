// Librería de funciones para el juego Trivial

import { dragonBallQuestions, gotQuestions, simpsonsQuestions } from "../../data/trivial/dataTrivial";
import { Button } from "../components/Button/Button";
import { initGame } from "./functions";

// PINTAR CARTAS
export const printCards = (theme) => {   
    
    // Crear el array con el tema seleccionado
    let themeSelected = [];

    // Seleccionar el array de preguntas según el tema recibido por parámetro
    switch (theme) {
        case "gotQuestions":
            themeSelected = [...gotQuestions];
            break;
        case "simpsonsQuestions":
            themeSelected  = [...simpsonsQuestions];
            break;
        case "dragonBallQuestions":
            themeSelected = [...dragonBallQuestions];
            break;    
        default:
            break;
    }

    // Coger la respuesta correcta
    const rightAnswers = themeSelected.map((element) => {
        return element.correcta;
    });

    // Seleccionar el elemento board del DOM
    let board = document.querySelector("#board");

    // Recorrer el array de preguntas para crear las cartas
    for (const questionElement of themeSelected) {        

        // Crear el elemento HTML div para cada carta
        const card = document.createElement("div");
        card.className = "trivial-card";

        // Crear el elemento HTML div para la capa contenedora de la pregunta
        const questionContainer = document.createElement("div");
        questionContainer.className = "question-container";

        // Crear el elemento HTML h3 para cada pregunta
        const question = document.createElement("h3");
        question.textContent = questionElement["pregunta"];

        // Inyectar el título en la carta
        questionContainer.appendChild(question);
        card.appendChild(questionContainer);

        // Crear formulario para la carta
        let form = document.createElement("form");

        // Añadir estilos al form
        form.className = "card-form";
        
        // Crear los elementos HTML option para las respuestas
        for (const element of questionElement["respuestas"]) {

            // Crear el elemento HTML input radio para checkear la respuesta
            const inputRadio = document.createElement("input");
            inputRadio.className = "radio-button";
            inputRadio.name = "optionelegida";
            inputRadio.value = element;
            inputRadio.type = "radio";
            inputRadio.id = element;

            // Crear el elemento HTML label para la respuesta
            const answer = document.createElement("label");
            answer.textContent = element; 
            answer.htmlFor = inputRadio.id;    

            // Inyectar el radio button en el label
            answer.appendChild(inputRadio);
            
            form.appendChild(answer);
            card.appendChild(form);

        }        

        // Inyectar la carta en el elemento HTML board
        board.appendChild(card);

    }

    // Crear capa contenedora del botón
    const btContainer = document.createElement("div");
    btContainer.className = "bt-container";
    
    // Crear el botón de validación del resultado
    const validateButton = document.createElement("button");
    validateButton.textContent = "Comprobar aciertos";
    validateButton.className = "bt-validate-game";

    // Inyectar el botón en la capa contenedora
    btContainer.appendChild(validateButton);

    validateButton.addEventListener("click", () => {
        btValidate(rightAnswers);
    });
    board.append(validateButton);

};

// Función que devuelve la puntuación de la partida
export const btValidate = (rightAnswers) => {

    // Recoger todos los input radio de la partida
    const inputsRadio = document.querySelectorAll(".radio-button");  
    
    // Array de respuestas dadas por el usuario
    let userAnswers = [];
    // Rellenamos el array con las respuestas 
    for(let i = 0; i < inputsRadio.length; i++){

        // Introducir el id del input radio al array de repuestas si está checked
        if(inputsRadio[i].checked === true){
            userAnswers.push(inputsRadio[i].id);
        }

    }

    // Declarar variable contador de puntos
    let COUNT = 0;

    // Recorrer array de respuestas y buscar si se encuentra en el array respuestas correctas
    for (let i = 0; i < userAnswers.length; i++) {

        const founded = userAnswers.find((resp) => userAnswers[i] === rightAnswers[i]);
        // Sumar 1 al contador si se encuentra la respuesta
        if(founded){
            COUNT++;
        }

    }

    // Seleccionar y limpiar el board
    const board = document.querySelector("#board")
    board.innerHTML = ``;

    // Crear capa resultado del juego
    const resultGameContainer = document.createElement("div");
    resultGameContainer.id = "result-game-container";

    // Añadir información del resultado de la partida
    const resultGame = document.createElement("h3");
    resultGame.textContent = `Has tenido ${COUNT} respuestas acertadas.`;

    // Añadir el texto con el resultado a la capa resultado
    resultGameContainer.appendChild(resultGame);

    // Añadir información del resultado de la partida en el LOCALSTORAGE
    //localStorage.setItem("trivialScore", COUNT);

    // Crear el botón de salir del juego
    const btLeave = Button("Salir del juego", "generic-btn");

    btLeave.addEventListener("click", () => {
        initGame("Trivial");
    });

    // Añadir botón de salir del juego a la capa resultado.
    resultGameContainer.appendChild(btLeave);    

    // Añadir la capa resultado al board
    board.appendChild(resultGameContainer);

}