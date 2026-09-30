// Ejercicio 2.6: módulo inventario

export function crearProducto(nombre, categoria, precio, stock) {
  return { nombre, categoria, precio, stock };
}

export function filtrarPorCategoria(inventario, categoria) {
  return inventario.filter((p) => p.categoria === categoria);
}

export function listarProductosAgotados(inventario) {
  return inventario.filter((p) => p.stock === 0);
}

export function calcularValorTotalInventario(inventario) {
  return inventario.reduce((total, p) => total + p.precio * p.stock, 0);
}

// Exportación por defecto: resumen en consola
export default function resumenInventario(inventario) {
  const categoriasDistintas = new Set(inventario.map((p) => p.categoria)).size;
  console.log("===== Resumen del inventario =====");
  console.log(`Número total de productos: ${inventario.length}`);
  console.log(`Número de categorías distintas: ${categoriasDistintas}`);
  console.log(`Valor total del inventario: ${calcularValorTotalInventario(inventario)} €`);
}
