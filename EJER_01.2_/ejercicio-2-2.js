// Ejercicio 2.2: Funciones

// 1. Function Declaration
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

// 2. Function Expression guardada en una constante
const calcularAreaTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

// 3. La misma función convertida a Arrow Function
//    (con otro nombre para poder tener las dos versiones a la vez)
const calcularAreaTrianguloFlecha = (base, altura) => (base * altura) / 2;

// 4. Valores por defecto (en la Arrow Function)
const calcularAreaTrianguloPorDefecto = (base = 10, altura = 5) => (base * altura) / 2;

// 5. Llamadas de prueba
console.log("Rectángulo 4 x 6:", calcularAreaRectangulo(4, 6));
console.log("Triángulo 4 x 6 (expression):", calcularAreaTriangulo(4, 6));
console.log("Triángulo 4 x 6 (arrow):", calcularAreaTrianguloFlecha(4, 6));
console.log("Triángulo con valores por defecto:", calcularAreaTrianguloPorDefecto());
console.log("Triángulo con solo la base (8):", calcularAreaTrianguloPorDefecto(8));
