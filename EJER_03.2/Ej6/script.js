const contenedorBotones = document.getElementById('contenedor-botones');

contenedorBotones.addEventListener('click', function(evento) {
    if (evento.target.tagName === 'BUTTON') {
        
        const todosLosContenidos = document.querySelectorAll('.contenido-tab');
        todosLosContenidos.forEach(div => {
            div.classList.add('oculto');
        });

        const idObjetivo = evento.target.getAttribute('data-id');

        const divMostrar = document.getElementById(idObjetivo);
        if (divMostrar) {
            divMostrar.classList.remove('oculto');
        }
    }
});