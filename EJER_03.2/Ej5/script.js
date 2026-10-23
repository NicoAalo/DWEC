function anadirTarea() {
    const input = document.getElementById('nueva-tarea');
    const textoTarea = input.value.trim();
    const lista = document.getElementById('lista-tareas');

    if (textoTarea !== '') {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = textoTarea + ' ';

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn-eliminar';

        botonEliminar.onclick = function() {
            const liContenedor = this.parentNode;
            liContenedor.remove();
        };

        nuevoLi.appendChild(botonEliminar);
        lista.appendChild(nuevoLi);

        input.value = '';
        input.focus();
    }
}