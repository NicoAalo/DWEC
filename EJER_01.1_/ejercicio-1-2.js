// Ejercicio 1.2: Objetos y su Manipulación

// 1. Objeto coche
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  estaDisponible: false,
};

// 2. Objeto completo con console.table()
console.log("Objeto original:");
console.table(coche);

// 3. Desestructuración
const { marca, modelo } = coche;
console.log("Marca:", marca);
console.log("Modelo:", modelo);

// 4. Cambiar estaDisponible a true
coche.estaDisponible = true;

// 5. Nueva propiedad 'color'
coche.color = "rojo";

// 6. Eliminar la propiedad 'año'
delete coche.año;

// 7. Objeto modificado
console.log("Objeto modificado:");
console.table(coche);
