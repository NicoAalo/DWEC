const tarjetas = document.querySelectorAll('.card'); 
tarjetas.forEach((tarjeta) => { 
    const categoria = tarjeta.querySelector('.categoria');
     if (categoria && categoria.textContent.includes('Desarrollo Web')) {
        tarjeta.style.backgroundColor = '#f0f0f0'; } 
    });