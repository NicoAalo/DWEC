const tarjetas = document.querySelectorAll('.card'); 
tarjetas.forEach((tarjeta) => { 
    const imagen = tarjeta.querySelector('img'); 
    if (imagen) { imagen.classList.add('imagen-curso'); } 
});