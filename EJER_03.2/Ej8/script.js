const btnOrdenar = document.getElementById('btn-ordenar');
const lista = document.getElementById('lista-elementos');

btnOrdenar.addEventListener('click', function() {
    const itemsNodeList = lista.querySelectorAll('li');

    const itemsArray = Array.from(itemsNodeList);

    itemsArray.sort((a, b) => {
        const textoA = a.textContent.trim();
        const textoB = b.textContent.trim();
        return textoA.localeCompare(textoB, 'es', { sensitivity: 'base' });
    });

    lista.innerHTML = '';

    itemsArray.forEach(item => {
        lista.appendChild(item);
    });
});