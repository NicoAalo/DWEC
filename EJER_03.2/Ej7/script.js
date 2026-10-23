const listaProductos = document.getElementById('lista-productos');
const listaCarrito = document.getElementById('lista-carrito');
const spanTotal = document.querySelector('span#total');

listaProductos.addEventListener('click', function(evento) {
    if (evento.target.classList.contains('btn-anadir')) {
        const liOriginal = evento.target.parentNode;

        const liClonado = liOriginal.cloneNode(true);

        const botonAnadirDelClon = liClonado.querySelector('.btn-anadir');
        if (botonAnadirDelClon) {
            botonAnadirDelClon.remove();
        }

        const botonQuitar = document.createElement('button');
        botonQuitar.textContent = 'Quitar';
        botonQuitar.className = 'btn-quitar';

        botonQuitar.addEventListener('click', function() {
            liClonado.remove();
            calcularTotal();
        });

        liClonado.appendChild(botonQuitar);

        listaCarrito.appendChild(liClonado);

        calcularTotal();
    }
});

function calcularTotal() {
    const productosEnCarrito = listaCarrito.querySelectorAll('li');
    let sumaTotal = 0;

    productosEnCarrito.forEach(item => {
        const precio = parseFloat(item.getAttribute('data-price'));
        sumaTotal += precio;
    });

    spanTotal.textContent = sumaTotal;
}