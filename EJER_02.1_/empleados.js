// Módulo de gestión de empleados (ejercicio 2.8)

const empleados = [
  { id: 1, nombre: "Lucía Fernández", departamento: "Desarrollo", salario: 2800 },
  { id: 2, nombre: "Carlos Méndez", departamento: "Sistemas", salario: 2500 },
  { id: 3, nombre: "Marta Ruiz", departamento: "Recursos Humanos", salario: 2200 },
  { id: 4, nombre: "Javier Soto", departamento: "Desarrollo", salario: 3100 },
  { id: 5, nombre: "Elena Vidal", departamento: "Marketing", salario: 2400 },
  { id: 6, nombre: "Pablo Herrera", departamento: "Sistemas", salario: 2650 }
];

export function agregarEmpleado(empleado) {
  empleados.push(empleado);
}

export function eliminarEmpleado(id) {
  const indice = empleados.findIndex((e) => e.id === id);
  if (indice === -1) return false;
  empleados.splice(indice, 1);
  return true;
}

export function buscarPorDepartamento(departamento) {
  return empleados.filter((e) => e.departamento === departamento);
}

export function calcularSalarioPromedio() {
  if (empleados.length === 0) return 0;
  const total = empleados.reduce((suma, e) => suma + e.salario, 0);
  return total / empleados.length;
}

// Devuelve un NUEVO array (copia) ordenado de mayor a menor salario
export function obtenerEmpleadosOrdenadosPorSalario() {
  return [...empleados].sort((a, b) => b.salario - a.salario);
}
