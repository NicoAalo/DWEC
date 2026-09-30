// Ejercicio 1.3: Combinando Objetos

// 1 y 2. Objetos originales
const producto = { nombre: "Teclado mecánico", precio: 79.99 };
const cliente = { nombreCliente: "Laura", esPremium: true };

// 3. Combinar con el Spread Operator
const pedido = { ...producto, ...cliente };

// 4. Mostrar el pedido
console.log("Pedido:", pedido);

// 5. Propiedades con el mismo nombre
const cliente2 = { nombre: "Carlos" };
const combinado = { ...producto, ...cliente2 };
console.log("producto + cliente2:", combinado);
// Resultado: 'nombre' vale "Carlos". Cuando hay una propiedad repetida, GANA la del último objeto.

// Si cambiamos el orden, gana la del producto:
const combinadoInverso = { ...cliente2, ...producto };
console.log("cliente2 + producto:", combinadoInverso);
