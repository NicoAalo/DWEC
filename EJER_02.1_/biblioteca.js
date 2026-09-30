// Módulo Biblioteca Digital (ejercicios 2.3 a 2.7)

const libros = [
  { id: 1, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
  { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 471 },
  { id: 3, titulo: "1984", autor: "George Orwell", paginas: 328 },
  { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
  { id: 5, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", paginas: 487 },
  { id: 6, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", paginas: 122 },
  { id: 7, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 158 },
  { id: 8, titulo: "El Hobbit", autor: "J. R. R. Tolkien", paginas: 310 },
  { id: 9, titulo: "Rimas y leyendas", autor: "Gustavo Adolfo Bécquer", paginas: 214 },
  { id: 10, titulo: "Los pilares de la Tierra", autor: "Ken Follett", paginas: 1040 }
];

// 2.3
export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

export function obtenerLibros() {
  return libros;
}

// 2.4
export function buscarLibro(id) {
  return libros.find((libro) => libro.id === id);
}

export function eliminarLibro(id) {
  const indice = libros.findIndex((libro) => libro.id === id);
  if (indice === -1) return false; // no existe
  libros.splice(indice, 1);
  return true;
}

// 2.5
export function calcularTotalPaginas() {
  return libros.reduce((total, libro) => total + libro.paginas, 0);
}

// 2.6 (ordena la propia colección, de menor a mayor)
export function ordenarPorPaginas() {
  libros.sort((a, b) => a.paginas - b.paginas);
}

// 2.7
export function hayLibrosLargos(limitePaginas) {
  return libros.some((libro) => libro.paginas > limitePaginas);
}

export function todosSonLibrosCortos(limitePaginas) {
  return libros.every((libro) => libro.paginas < limitePaginas);
}
