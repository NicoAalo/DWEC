// Ejercicio 1.1: Variables, Tipos de Dato y Strings

// 1, 2 y 3. Declaración de variables
const nombre = "Nico";
let edad = 19;
const tieneMascota = true;

// 4. Reasignación
edad = 20; // 'let' permite reasignar

// 'tieneMascota' está declarada con 'const', así que reasignarla lanza un TypeError.
// Lo capturamos con try/catch para que el resto del programa siga funcionando.
try {
  tieneMascota = false;
} catch (error) {
  console.log(`No se puede reasignar 'tieneMascota' (const): ${error.name} - ${error.message}`);
}
// Si tu profe quiere que se pueda reasignar, cambia 'const tieneMascota' por 'let tieneMascota'.

// 5. Valor y tipo de cada variable
console.log("nombre:", nombre, "| tipo:", typeof nombre);
console.log("edad:", edad, "| tipo:", typeof edad);
console.log("tieneMascota:", tieneMascota, "| tipo:", typeof tieneMascota);

// 6. Template String
const frase = `${nombre} tiene ${edad} años y ${tieneMascota ? "tiene" : "no tiene"} mascota.`;
console.log(frase);
