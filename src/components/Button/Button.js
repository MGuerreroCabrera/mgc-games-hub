import "./Button.css";

// Crear la función que devuelve un botón.
// Recibirá por parámetro el texto del botón y el tipo de botón

export const Button = (buttonText, buttonType) => {

    // Crear el elemento HTNL button
    const button = document.createElement("button");

    // Asignar texto del botón
    button.textContent = buttonText;

    // Asignar la clase al elemento button
    button.className = buttonType;

    // Devolver el elemento creado
    return button;

};