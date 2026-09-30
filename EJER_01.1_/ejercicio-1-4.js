// Ejercicio 1.4: Arrays y sus Métodos

// 1. Array inicial
const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"];

// 2. Añadir "Roma" al final
ciudades.push("Roma");

// 3. Mayúsculas con map()
const ciudadesMayusculas = ciudades.map((ciudad) => ciudad.toUpperCase());

// 4. Más de 6 caracteres con filter()
const ciudadesFiltradas = ciudades.filter((ciudad) => ciudad.length > 6);

// 5. Imprimir los tres arrays
console.log("ciudades:", ciudades);
console.log("ciudadesMayusculas:", ciudadesMayusculas);
console.log("ciudadesFiltradas:", ciudadesFiltradas);
