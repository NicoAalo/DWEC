
 function cambiarImagenPrincipal(indice) {
    const miniaturas = document.querySelectorAll('.miniatura');
    const miniaturaSeleccionada = miniaturas[indice];
     if (!miniaturaSeleccionada) {
        console.error("El índice indicado no existe.");
        return;
    }
    const nuevoSrc = miniaturaSeleccionada.getAttribute('src');
     const imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.setAttribute('src', nuevoSrc);
    resaltarMiniatura(indice);
}
function resaltarMiniatura(indice) {
    const miniaturas = document.querySelectorAll('.miniatura');
    miniaturas.forEach((miniatura, i) => {
    if (i === indice) {
        miniatura.classList.add('activa');
    } else {
        miniatura.classList.remove('activa');
    }
});
}
