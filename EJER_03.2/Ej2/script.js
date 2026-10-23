function revelarRespuesta(elementoH2) {
    ocultarTodasLasRespuestas();


    const respuesta = elementoH2.nextElementSibling;

    if (respuesta) {
        respuesta.classList.remove('oculto');
    }
}


function ocultarTodasLasRespuestas() {
    const todasLasRespuestas = document.querySelectorAll('li p');

    todasLasRespuestas.forEach(parrafo => {
        parrafo.classList.add('oculto');
    });
}