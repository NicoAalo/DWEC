// Ejercicio 2.4: Combinación de Objetos y Optional Chaining

// 1 y 2. Objetos originales
const usuario = { nombre: "Laura", email: "laura@correo.com" };
const perfil = { puesto: "Desarrolladora", empresa: "TechCorp" };

// 3. Combinar con spread
const empleado = { ...usuario, ...perfil };
console.log("empleado:", empleado);

// 4. Optional Chaining
// OJO: al combinar con spread, las propiedades de 'perfil' quedan sueltas dentro de 'empleado',
// así que 'empleado.perfil' NO existe. Sin '?.' esta línea lanzaría un TypeError.
const ciudad = empleado.perfil?.direccion?.ciudad;
console.log("Ciudad (sin dato):", ciudad); // undefined

// 5. Nullish Coalescing: valor por defecto
const ciudadFinal = ciudad ?? "Ciudad no especificada";
console.log("Ciudad final:", ciudadFinal);

// --- Comprobación con el dato presente (perfil anidado con dirección) ---
const empleadoConDireccion = {
  ...usuario,
  perfil: { ...perfil, direccion: { ciudad: "Madrid" } },
};
console.log("Ciudad (con dato):", empleadoConDireccion.perfil?.direccion?.ciudad ?? "Ciudad no especificada");

// --- Perfil anidado pero sin dirección ---
const empleadoSinDireccion = { ...usuario, perfil: { ...perfil } };
console.log("Ciudad (perfil sin dirección):", empleadoSinDireccion.perfil?.direccion?.ciudad ?? "Ciudad no especificada");
