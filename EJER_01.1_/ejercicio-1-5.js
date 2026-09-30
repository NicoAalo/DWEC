// Ejercicio 1.5: Uniendo todo

// 1. Array de estudiantes (Pablo tiene una incoherencia a propósito para probar el paso 5)
const estudiantes = [
  { nombre: "Ana", apellidos: "García López", calificacion: 8.5, aprobado: true },
  { nombre: "Luis", apellidos: "Martín Ruiz", calificacion: 3.5, aprobado: false },
  { nombre: "Marta", apellidos: "Sánchez Díaz", calificacion: 5, aprobado: true },
  { nombre: "Pablo", apellidos: "Torres Vega", calificacion: 4.5, aprobado: true }, // incoherente
  { nombre: "Sara", apellidos: "Gómez Peña", calificacion: 9, aprobado: false },   // incoherente
];

// 2. Añadir un id único con map()
const estudiantesConId = estudiantes.map((estudiante, indice) => ({
  ...estudiante,
  id: indice + 1,
}));
console.log("Estudiantes con id:", estudiantesConId);

// 3. Filtrar los de calificación >= 5
const aprobados = estudiantesConId.filter((e) => e.calificacion >= 5);

// 4. Mensaje de felicitación
aprobados.forEach((e) => {
  console.log(`¡Felicidades ${e.nombre}, has aprobado con ${e.calificacion}!`);
});

// 5. Comprobar coherencia entre 'aprobado' y 'calificacion'
estudiantes.forEach((e) => {
  const deberiaAprobar = e.calificacion >= 5;
  if (e.aprobado !== deberiaAprobar) {
    console.log(
      `⚠️ Incoherencia en el registro de ${e.nombre}: calificación = ${e.calificacion}, aprobado = ${e.aprobado}`
    );
  }
});
