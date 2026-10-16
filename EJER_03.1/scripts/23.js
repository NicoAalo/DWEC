const tarjetas = document.querySelectorAll('.card'); 
tarjetas.forEach((tarjeta) => { const titulo = tarjeta.querySelector('h2'); 
    if (titulo && titulo.textContent.includes('React')) { 
        const parrafoOculto = tarjeta.querySelector('[data-precio]'); 
        titulo.addEventListener('click', () => { parrafoOculto.style.display = 'block'; });
     } 
    });