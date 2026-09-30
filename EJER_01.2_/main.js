// Ejercicio 2.5: uso del módulo gestorUsuarios

// Import por defecto + imports con nombre (con alias para crearPerfil)
import mostrarPerfil, {
  crearPerfil as crearUsuario,
  obtenerMayoresDeEdad,
  calcularPromedioEdad,
} from "./gestorUsuarios.js";

// --- Paso 2: dos perfiles en un array ---
console.log("=== Paso 2: dos perfiles ===");
const primerosUsuarios = [
  crearUsuario("Ana", "ana@correo.com", 25),
  crearUsuario("Luis", "luis@correo.com", 17),
];
primerosUsuarios.forEach((u) => console.log(mostrarPerfil(u)));

// --- Paso 4: al menos 5 usuarios con distintas edades ---
const usuarios = [
  crearUsuario("Ana", "ana@correo.com", 25),
  crearUsuario("Luis", "luis@correo.com", 17),
  crearUsuario("Marta", "marta@correo.com", 34),
  crearUsuario("Pablo", "pablo@correo.com", 15),
  crearUsuario("Sara", "sara@correo.com", 18),
  crearUsuario("Diego", "diego@correo.com", 42),
];

// 1. Filtrar los mayores de edad
const mayores = obtenerMayoresDeEdad(usuarios);

// 2. Encabezado + perfil de cada mayor de edad
console.log("=== Paso 4 ===");
console.log("Usuarios mayores de edad:");
mayores.forEach((u) => console.log(mostrarPerfil(u)));

// 3. Edad promedio del array original
console.log(`La edad promedio de los usuarios es: ${calcularPromedioEdad(usuarios).toFixed(2)}`);
