// Ejercicio 1 — Validador de contraseña

function esContrasenaValida(contrasena) {
  return contrasena.length >= 8;
}

const contrasenas = ['1234', 'miClave2024', 'abc'];

// Función anónima (literal) dentro de .map()
const resultado = contrasenas.map(function (contrasena) {
  return contrasena.length >= 8;
});

console.log(resultado); // [false, true, false]

// Con la función con nombre (esContrasenaValida) se obtiene lo mismo
console.log(contrasenas.map(esContrasenaValida)); // [false, true, false]

// Reflexión: ¿cuándo dar nombre a una función y cuándo usar un literal anónimo?
// - Conviene DAR NOMBRE cuando la función se reutiliza en varios sitios, cuando su lógica es
//   lo bastante compleja como para merecer una descripción, cuando hay que probarla por separado,
//   cuando es recursiva o cuando queremos que aparezca con nombre en los errores (stack trace).
// - Es mejor un LITERAL ANÓNIMO cuando la lógica es corta y se usa una sola vez, típicamente
//   como callback de map, filter o forEach: así el código queda junto a donde se usa.
