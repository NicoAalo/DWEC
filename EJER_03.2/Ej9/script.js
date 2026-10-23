const destinos = [
    { ciudad: 'Oviedo', pais: 'España' },
    { ciudad: 'Roma', pais: 'Italia' },
    { ciudad: 'Gijón', pais: 'España' },
    { ciudad: 'Florencia', pais: 'Italia' },
    { ciudad: 'París', pais: 'Francia' },
    { ciudad: 'Lyon', pais: 'Francia' }
];

const listaCiudades = document.getElementById('lista-ciudades');

function inicializarLista() {
    destinos.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.ciudad} - ${item.pais}`;
        li.setAttribute('data-pais', item.pais.toLowerCase());
        listaCiudades.appendChild(li);
    });
}

inicializarLista();

function filtrarPorPais(textoFiltro) {
    const consulta = textoFiltro.toLowerCase().trim();
    
    const elementosLi = listaCiudades.querySelectorAll('li');

    elementosLi.forEach(li => {
        const paisElemento = li.getAttribute('data-pais');

        if (paisElemento.includes(consulta)) {
            li.classList.remove('oculto');
        } else {
            li.classList.add('oculto');
        }
    });
}