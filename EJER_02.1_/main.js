// Ejercicio 2.8: Simulación de gestión de empleados
import {
  agregarEmpleado, eliminarEmpleado, buscarPorDepartamento,
  calcularSalarioPromedio, obtenerEmpleadosOrdenadosPorSalario
} from "./empleados.js";

console.log("=== Ejercicio 2.8: Gestión de empleados ===");

agregarEmpleado({ id: 7, nombre: "Sara Ortega", departamento: "Desarrollo", salario: 2950 });
agregarEmpleado({ id: 8, nombre: "Diego Castro", departamento: "Marketing", salario: 2300 });
agregarEmpleado({ id: 9, nombre: "Ana Torres", departamento: "Sistemas", salario: 2700 });

console.log("Empleados de Desarrollo:");
console.table(buscarPorDepartamento("Desarrollo"));

console.log("¿Eliminado el empleado 3?", eliminarEmpleado(3));

console.log(`Salario promedio: ${calcularSalarioPromedio().toFixed(2)} €`);

console.log("Empleados ordenados por salario (mayor a menor):");
console.table(obtenerEmpleadosOrdenadosPorSalario());
