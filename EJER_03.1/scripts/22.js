const formulario = document.getElementById('formulario-contacto'); 
formulario.addEventListener('submit', (event) => { event.preventDefault();
const nombre = document.getElementById('nombre').value; 
const mensaje = document.getElementById('mensaje').value;
console.log(`Nombre: ${nombre}`); 
console.log(`Mensaje: ${mensaje}`); 
});