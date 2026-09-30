// Ejercicio 7 — División segura

const dividir = (a, b) => {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
};

// Caso con error
try {
  console.log(dividir(10, 0));
} catch (e) {
  console.log('Error:', e.message);
} finally {
  console.log('Operación finalizada'); // se ejecuta siempre
}

// Caso correcto: 'finally' también se ejecuta cuando no hay error
try {
  console.log(dividir(10, 2)); // 5
} catch (e) {
  console.log('Error:', e.message);
} finally {
  console.log('Operación finalizada');
}
