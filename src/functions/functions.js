// Función que limpia la capa contenedora gameDiv
export const cleanDiv = (idDiv) => {
    
    // Crear la variable id de la capa a limpiar
    const idDivToClean = `#${idDiv}`;

    // Seleccionar el elemento del DOM a limpiar
    const divToClean = document.querySelector(idDivToClean);

    // Limpiar el elemento seleccionado
    if(divToClean !== null) { divToClean.innerHTML = ""; }

}