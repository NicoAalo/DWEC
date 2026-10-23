const btnGenerar = document.getElementById('btn-generar');

btnGenerar.addEventListener('click', function() {
    const inputCantidad = document.getElementById('numero-parrafos');
    const cantidad = parseInt(inputCantidad.value) || 0;

    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = '';

    const fragmento = document.createDocumentFragment();

    const textoBase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.";

    for (let i = 0; i < cantidad; i++) {
        const nuevoP = document.createElement('p');
        nuevoP.textContent = `(${i + 1}) ${textoBase}`;
        
        fragmento.appendChild(nuevoP);
    }

    divResultado.appendChild(fragmento);
});