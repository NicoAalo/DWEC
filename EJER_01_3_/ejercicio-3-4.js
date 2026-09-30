'use strict';

// Ejercicio 4 — Suma flexible

const sumaFlexible = (x, y) => {
  // Si v es un array, suma sus elementos; si no, lo devuelve tal cual
  const valorDe = (v) => (Array.isArray(v) ? v.reduce((suma, n) => suma + n, 0) : v);

  return valorDe(x) + valorDe(y);
};

console.log(sumaFlexible(3, 4));          // 7
console.log(sumaFlexible([1, 2], 4));     // 7
console.log(sumaFlexible([1, 2], [3, 4])); // 10
