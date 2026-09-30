// Ejercicio 2 — Calculadora por función

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

// potencia lanza un error si el exponente es negativo (cuerpo de bloque + throw)
const potencia = (base, exponente) => {
  if (exponente < 0) {
    throw new Error('El exponente no puede ser negativo');
  }
  return base ** exponente;
};

// Función de orden superior: recibe la operación como parámetro
const aplicarOperacion = (a, b, operacion) => operacion(a, b);

console.log(aplicarOperacion(5, 3, suma));      // 8
console.log(aplicarOperacion(5, 3, resta));     // 2
console.log(aplicarOperacion(2, 3, potencia));  // 8

// Esta última llamada lanza un error; la capturamos para que se vea el mensaje
// (sin try/catch el error pararía la ejecución del script)
try {
  console.log(aplicarOperacion(2, -1, potencia));
} catch (error) {
  console.log('Error:', error.message); // El exponente no puede ser negativo
}
