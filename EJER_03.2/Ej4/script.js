const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Carlos', edad: 22 },
    { nombre: 'Elena', edad: 28 }
];

function construirTabla(datos) {
    const contenedor = document.getElementById('contenedor-tabla');
    
    contenedor.innerHTML = '';

    const fragmento = document.createDocumentFragment();

    const tabla = document.createElement('table');

    const filaCabecera = document.createElement('tr');
    const thNombre = document.createElement('th');
    thNombre.textContent = 'Nombre';
    const thEdad = document.createElement('th');
    thEdad.textContent = 'Edad';
    filaCabecera.appendChild(thNombre);
    filaCabecera.appendChild(thEdad);
    tabla.appendChild(filaCabecera);

    datos.forEach(usuario => {
        const fila = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.nombre;

        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = usuario.edad;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);

        tabla.appendChild(fila);
    });

    fragmento.appendChild(tabla);

    contenedor.appendChild(fragmento);
}