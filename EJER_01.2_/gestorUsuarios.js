// Ejercicio 2.5: módulo gestorUsuarios (versión final con las mejoras del paso 3)

export function crearPerfil(nombre, email, edad) {
  return { nombre, email, edad };
}

export function esMayorDeEdad(usuario) {
  return usuario.edad >= 18;
}

export function obtenerMayoresDeEdad(usuarios) {
  return usuarios.filter(esMayorDeEdad);
}

export function calcularPromedioEdad(usuarios) {
  if (usuarios.length === 0) return 0;
  const sumaEdades = usuarios.reduce((suma, u) => suma + u.edad, 0);
  return sumaEdades / usuarios.length;
}

// Exportación por defecto
export default function mostrarPerfil(usuario) {
  return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}
