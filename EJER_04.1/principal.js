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
const entradaTexto = document.getElementById('campo-texto');
const espejoTexto = document.getElementById('eco-texto');
const caracteresRestantes = document.getElementById('caracteres-restantes');
const maxcaracteres = 30;

entradaTexto.addEventListener('input', () => {
    const textoactual = entradaTexto.value;
    const restantes = maxcaracteres - textoactual.length;

    espejoTexto.textContent = textoactual
    caracteresRestantes.textContent = restantes;
    caracteresRestantes.classList.toggle('poco', restantes <= 5);
});


// ---------- Ejercicio 4 · Mover con el teclado ----------
const areaJuego = document.getElementById('area-juego');
const cuadrado = document.getElementById('cuadrado');
const posicionCuadrado = document.getElementById('posicion-cuadrado');

let posX = 0;
let posY = 0;
const PASO = 10;

window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT') return;

    const teclasMovimiento = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];
    if (!teclasMovimiento.includes(e.key)) return;

    e.preventDefault();

    const maxX = areaJuego.clientWidth - cuadrado.offsetWidth;
    const maxY = areaJuego.clientHeight - cuadrado.offsetHeight;

    switch (e.key) {
        case 'ArrowUp':
        posY = Math.max(0, posY - PASO);
        break;
        case 'ArrowDown':
        posY = Math.min(maxY, posY + PASO);
        break;
        case 'ArrowLeft':
        posX = Math.max(0, posX - PASO);
        break;
        case 'ArrowRight':
        posX = Math.min(maxX, posX + PASO);
        break;
        case ' ':
        posX = 0;
        posY = 0;
        break;
    }

    cuadrado.style.left = `${posX}px`;
    cuadrado.style.top = `${posY}px`;
    posicionCuadrado.textContent = `Posición: (${posX}, ${posY})`;
    });


// ---------- Ejercicio 5 · Paleta de colores ----------
const paleta = document.getElementById('paleta');
const lienzo = document.getElementById('lienzo');
const nombreColor = document.getElementById('nombre-color');

paleta.addEventListener('click', (e) => {
    const muestra = e.target.closest('.muestra');
    if(!muestra) return;

    const color = muestra.getAttribute('data-color');
    const nombre = muestra.getAttribute('data-nombre');

    lienzo.style.backgroundColor = color;
    nombreColor.textContent = nombre;
})


// ---------- Ejercicio 6 · Grupo con foco ----------
const grupoContacto = document.getElementById('grupo-contacto');
const mensajeFoco = document.getElementById('mensaje-foco');

grupoContacto.addEventListener('focusin', (e) => {
    if(e.target.tagName === "INPUT"){
        grupoContacto.classList.add('activo');
        const placeholder = e.target.getAttribute('placeholder');
        mensajeFoco.innerHTML = `Editando: <i>${placeholder}</i>`;
    }
});

grupoContacto.addEventListener('focusout', (e) => {
    if (!grupoContacto.contains(e.relatedTarget)) {
        grupoContacto.classList.remove('activo');
        mensajeFoco.textContent = 'Ningún campo activo';
    }
});


// ---------- Ejercicio 7 · Burbuja y captura ----------


// ---------- Ejercicio 8 · Detener y cancelar ----------
