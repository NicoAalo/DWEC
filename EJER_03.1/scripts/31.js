const tarjetas = document.querySelectorAll('.card'); 
tarjetas.forEach((tarjeta) => { const titulo = tarjeta.querySelector('h2'); 
    if (titulo && titulo.textContent.includes('React')) { 
        const parrafoOculto = tarjeta.querySelector('[data-precio]'); 
        if (parrafoOculto) { 
            parrafoOculto.textContent += ' (¡Oferta especial!)'; } 
        } 
    });