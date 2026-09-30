// Ejercicio 1.6: Objetos con Arrays de Objetos Anidados

// 1. Array de cursos
const cursos = [
  {
    nombre: "Programación",
    profesor: "Laura Gómez",
    estudiantes: [
      { nombre: "Ana", calificacion: 8.5 },
      { nombre: "Luis", calificacion: 7 },
      { nombre: "Marta", calificacion: 9 },
    ],
  },
  {
    nombre: "Bases de Datos",
    profesor: "Carlos Ruiz",
    estudiantes: [
      { nombre: "Pablo", calificacion: 6 },
      { nombre: "Sara", calificacion: 7.5 },
      { nombre: "Diego", calificacion: 3.5 },
    ],
  },
  {
    nombre: "Lenguajes de Marcas",
    profesor: "Elena Torres",
    estudiantes: [
      { nombre: "Lucía", calificacion: 9.5 },
      { nombre: "Hugo", calificacion: 8 },
      { nombre: "Nuria", calificacion: 7.5 },
    ],
  },
  {
    nombre: "Sistemas Informáticos",
    profesor: "Javier Molina",
    estudiantes: [
      { nombre: "Iván", calificacion: 5 },
      { nombre: "Paula", calificacion: 6.5 },
      { nombre: "Raúl", calificacion: 3 },
    ],
  },
];

// Función auxiliar: promedio de las calificaciones de un curso
const calcularPromedio = (curso) =>
  curso.estudiantes.reduce((suma, e) => suma + e.calificacion, 0) /
  curso.estudiantes.length;

// 2. Resumen con map()
const resumenCursos = cursos.map((curso) => ({
  nombreCurso: curso.nombre,
  promedioCalificaciones: Number(calcularPromedio(curso).toFixed(2)),
}));
console.table(resumenCursos);

// 3. Cursos destacados (promedio >= 7) con filter()
const cursosDestacados = cursos.filter((curso) => calcularPromedio(curso) >= 7);

// 4. Mensaje para cada curso destacado
cursosDestacados.forEach((curso) => {
  console.log(
    `📘 El curso ${curso.nombre} tiene un promedio de ${calcularPromedio(curso).toFixed(2)} y es considerado destacado.`
  );
});

// 5. Cursos con estudiantes con calificación menor a 4
cursos.forEach((curso) => {
  if (curso.estudiantes.some((e) => e.calificacion < 4)) {
    console.log(`⚠️ Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`);
  }
});
