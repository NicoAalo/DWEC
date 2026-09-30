// Ejercicio 6 — Máximo sin Math.max

// Parámetro REST: agrupa todos los argumentos recibidos en un array 'numeros'
const maximo = (...numeros) => {
  let mayor = -Infinity; // así, sin argumentos, se comporta como Math.max()
  for (const numero of numeros) {
    if (numero > mayor) {
      mayor = numero;
    }
  }
  return mayor;
};

const notas = [7, 9, 5, 10, 6];

// Operador SPREAD: expande el array 'notas' en argumentos sueltos
console.log(maximo(...notas)); // 10

// Reflexión: spread vs rest (mismo símbolo '...', operación contraria)
// - REST se usa al DEFINIR una función (o al desestructurar): recoge varios valores sueltos
//   y los empaqueta en un array. Siempre va al final de la lista de parámetros.
// - SPREAD se usa al LLAMAR a una función o al crear arrays/objetos: toma un array (o un
//   objeto) y lo desempaqueta en elementos sueltos.
// En maximo(...notas): el spread convierte [7, 9, 5, 10, 6] en 7, 9, 5, 10, 6 y el rest
// vuelve a agruparlos dentro de la función.
