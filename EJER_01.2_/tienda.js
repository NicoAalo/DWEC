// Ejercicio 2.6: uso del módulo inventario
import resumenInventario, {
  crearProducto,
  filtrarPorCategoria,
  listarProductosAgotados,
  calcularValorTotalInventario,
} from "./inventario.js";

// Inventario vacío que vamos rellenando con crearProducto
const inventario = [];
inventario.push(crearProducto("Portátil", "Electrónica", 850, 5));
inventario.push(crearProducto("Auriculares", "Electrónica", 60, 0)); // agotado
inventario.push(crearProducto("Camiseta", "Ropa", 15, 40));
inventario.push(crearProducto("Chaqueta", "Ropa", 70, 8));
inventario.push(crearProducto("El Quijote", "Libros", 20, 12));
inventario.push(crearProducto("Clean Code", "Libros", 35, 0));       // agotado

// 1. Productos de la categoría "Ropa"
console.log("Productos de Ropa:");
console.table(filtrarPorCategoria(inventario, "Ropa"));

// 2. Productos agotados
console.log("Productos agotados:");
console.table(listarProductosAgotados(inventario));

// 3. Valor total del inventario
console.log(`Valor total del inventario: ${calcularValorTotalInventario(inventario)} €`);

// 4. Resumen completo
resumenInventario(inventario);
