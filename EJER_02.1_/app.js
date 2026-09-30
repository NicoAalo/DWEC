// Ejercicios 2.3 a 2.7: uso del módulo biblioteca.js
import {
  agregarLibro, obtenerLibros, buscarLibro, eliminarLibro,
  calcularTotalPaginas, ordenarPorPaginas,
  hayLibrosLargos, todosSonLibrosCortos
} from "./biblioteca.js";

// --- 2.3 ---
console.log("=== Ejercicio 2.3: Colección inicial ===");
console.table(obtenerLibros());

agregarLibro({ id: 11, titulo: "Patria", autor: "Fernando Aramburu", paginas: 648 });
console.log("Tras agregar 'Patria':");
console.table(obtenerLibros());

// --- 2.4 ---
console.log("=== Ejercicio 2.4: Buscar y eliminar ===");
console.log("Libro con id 3:", buscarLibro(3));
console.log("Libro con id 99 (no existe):", buscarLibro(99));

console.log("¿Eliminado el id 4?", eliminarLibro(4));
console.log("Colección final:");
console.table(obtenerLibros());

// --- 2.5 ---
console.log("=== Ejercicio 2.5: Total de páginas ===");
console.log("Total de páginas:", calcularTotalPaginas());

// --- 2.6 ---
console.log("=== Ejercicio 2.6: Ordenar por páginas ===");
console.log("Antes de ordenar:");
console.table(obtenerLibros());
ordenarPorPaginas();
console.log("Después de ordenar (menor a mayor):");
console.table(obtenerLibros());

// --- 2.7 ---
console.log("=== Ejercicio 2.7: some() y every() ===");
[100, 500, 1000, 1500].forEach((limite) => {
  console.log(`Límite ${limite} -> hayLibrosLargos: ${hayLibrosLargos(limite)} | todosSonLibrosCortos: ${todosSonLibrosCortos(limite)}`);
});
