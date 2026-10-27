// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------
const restar = document.getElementById('boton-restar');
const sumar = document.getElementById('boton-sumar');
const reiniciar = document.getElementById('boton-reiniciar');
const valorContador = document.getElementById('valor-contador');

let contador = 0;

function actualizarVistaContador(){
    valorContador.textContent = contador;
    valorContador.classList.toggle('negativo', contador < 0);
    valorContador.style.color = contador < 0 ? 'red': '';
}

restar.addEventListener('click', () => {
    contador--;
    actualizarVistaContador();
});

sumar.addEventListener('click', () => {
    contador++;
    actualizarVistaContador();
});

reiniciar.addEventListener('click', () => {
    contador = 0;
    actualizarVistaContador();
});


// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------
const tarjeta = document.getElementById('tarjeta-raton');
const mensaje = document.getElementById('mensaje-raton');

tarjeta.addEventListener('mouseenter', () => {
    tarjeta.classList.add('activa');
    tarjeta.textContent = 'Activa';
    mensaje.textContent = '¡Estás dentro!';
});

tarjeta.addEventListener('mouseleave', () => {
    tarjeta.classList.remove('activa');
    tarjeta.textContent = 'Tarjeta';
    mensaje.textContent = 'Pasa el ratón por la tarjeta';
});

tarjeta.addEventListener('dblclick', () => {
    tarjeta.textContent = '¡Doble click!'
});


// ---------- Ejercicio 3 · Espejo de texto ----------


// ---------- Ejercicio 4 · Mover con el teclado ----------


// ---------- Ejercicio 5 · Paleta de colores ----------


// ---------- Ejercicio 6 · Grupo con foco ----------


// ---------- Ejercicio 7 · Burbuja y captura ----------


// ---------- Ejercicio 8 · Detener y cancelar ----------
