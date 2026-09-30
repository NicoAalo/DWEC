// Ejercicio 2.1: Arrays y Métodos

// 1. Array de números
const numeros = [3, 8, 15, 22, 7, 10, 41, 6];

// 2. Doble de cada número con map()
const dobles = numeros.map((n) => n * 2);

// 3. Solo los pares con filter()
const pares = numeros.filter((n) => n % 2 === 0);

console.log("numeros:", numeros);
console.log("dobles:", dobles);
console.log("pares:", pares);

// 4. Imprimir cada par con for...of
console.log("Números pares:");
for (const par of pares) {
  console.log(par);
}
