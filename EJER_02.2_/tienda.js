// ===== Tienda de música: catálogo, pedidos y almacén =====

// ---------- Parte 1 · El catálogo ----------

// 1.1 Matriz [nombre, categoria, precio, stock] -> array de objetos
export const crearCatalogo = (matriz) =>
  Array.isArray(matriz)
    ? matriz.map((fila) => ({
        nombre: fila[0],
        categoria: fila[1],
        precio: fila[2],
        stock: fila[3],
      }))
    : [];

// 1.2 Catálogo nuevo con las novedades al final
export const ampliarCatalogo = (catalogo, matrizNovedades) =>
  catalogo.concat(crearCatalogo(matrizNovedades));

// 1.3 Nombres en orden alfabético (respetando tildes)
export const nombresOrdenados = (catalogo) =>
  catalogo.map((p) => p.nombre).sort((a, b) => a.localeCompare(b, 'es'));

// 1.4 Copia ordenada por precio (ascendente por defecto)
export const ordenarPorPrecio = (catalogo, descendente = false) => {
  const copia = [...catalogo].sort((a, b) => a.precio - b.precio);
  return descendente ? copia.reverse() : copia;
};

// 1.5 Nombres de los tres más baratos
export const tresMasBaratos = (catalogo) =>
  ordenarPorPrecio(catalogo).slice(0, 3).map((p) => p.nombre);

// ---------- Parte 2 · Búsquedas ----------

// 2.1 Producto o undefined (sin distinguir mayúsculas)
export const buscarProducto = (catalogo, nombre) =>
  catalogo.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

// 2.2 true / false
export const existeProducto = (catalogo, nombre) =>
  catalogo.map((p) => p.nombre.toLowerCase()).includes(nombre.toLowerCase());

// 2.3 Posición o -1
export const posicionProducto = (catalogo, nombre) =>
  catalogo.findIndex((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

// 2.4 Nombres de los productos con stock 0
export const agotados = (catalogo) =>
  catalogo.filter((p) => p.stock === 0).map((p) => p.nombre);

// 2.5 Productos con precio entre mínimo y máximo (ambos incluidos)
export const productosEntre = (catalogo, minimo, maximo) =>
  catalogo.filter((p) => p.precio >= minimo && p.precio <= maximo);

// ---------- Parte 3 · Cálculos ----------

// 3.1 Suma de precio × stock
export const valorAlmacen = (catalogo) =>
  catalogo.reduce((total, p) => total + p.precio * p.stock, 0);

// 3.2 Objeto del producto más caro (undefined si el catálogo está vacío)
export const productoMasCaro = (catalogo) =>
  catalogo.reduce(
    (max, p) => (max === undefined || p.precio > max.precio ? p : max),
    undefined
  );

// 3.3 { equipos: 7, accesorios: 29, discos: 14 }
export const unidadesPorCategoria = (catalogo) =>
  catalogo.reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + p.stock;
    return acc;
  }, {});

// 3.4 ¿Alguno sin stock?
export const hayAgotados = (catalogo) => catalogo.some((p) => p.stock === 0);

// 3.5 ¿Todos los precios son números > 0?
export const preciosValidos = (catalogo) =>
  catalogo.every((p) => typeof p.precio === 'number' && p.precio > 0);

// ---------- Parte 4 · Pedidos ----------

// 4.1 'Lucía|Tocadiscos:1;Vinilo Jazz:2' -> { cliente, lineas: [{ nombre, cantidad }] }
export const parsearPedido = (texto) => {
  const [cliente, resto] = texto.split('|');
  const lineas = resto.split(';').map((linea) => {
    const [nombre, cantidad] = linea.split(':');
    return { nombre: nombre.trim(), cantidad: Number(cantidad) };
  });
  return { cliente: cliente.trim(), lineas };
};

// 4.2 ¿Existen todos los productos y hay stock suficiente?
export const puedeServirse = (catalogo, pedido) =>
  pedido.lineas.every((linea) => {
    const producto = buscarProducto(catalogo, linea.nombre);
    return producto !== undefined && producto.stock >= linea.cantidad;
  });

// 4.3 Importe total del pedido
export const totalPedido = (catalogo, pedido) =>
  pedido.lineas.reduce((total, linea) => {
    const producto = buscarProducto(catalogo, linea.nombre);
    return total + (producto ? producto.precio * linea.cantidad : 0);
  }, 0);

// 4.4 Catálogo NUEVO con el stock descontado (no modifica el original)
export const servirPedido = (catalogo, pedido) =>
  catalogo.map((producto) => {
    const linea = pedido.lineas.find(
      (l) => l.nombre.toLowerCase() === producto.nombre.toLowerCase()
    );
    return linea
      ? { ...producto, stock: producto.stock - linea.cantidad }
      : { ...producto };
  });

// 4.5 Ticket como un único texto
export const generarTicket = (catalogo, pedido) => {
  const lineas = pedido.lineas.map((linea) => {
    const producto = buscarProducto(catalogo, linea.nombre);
    const importe = producto ? producto.precio * linea.cantidad : 0;
    return `${linea.cantidad} x ${producto ? producto.nombre : linea.nombre} = ${importe} €`;
  });
  return [
    `Cliente: ${pedido.cliente}`,
    ...lineas,
    `TOTAL: ${totalPedido(catalogo, pedido)} €`,
  ].join('\n');
};

// ---------- Parte 5 · Cola de pedidos y carrito con «deshacer» ----------
// (Aquí SÍ se modifican los arrays recibidos)

// 5.1 Saca y devuelve el primer pedido (FIFO)
export const atenderSiguiente = (cola) => cola.shift();

// 5.2 Pedido urgente al principio; devuelve la nueva longitud
export const agregarUrgente = (cola, pedido) => cola.unshift(pedido);

// 5.3 Añade al carrito y lo apunta en el historial
export const agregarAlCarrito = (carrito, historial, nombre) => {
  carrito.push(nombre);
  historial.push({ accion: 'agregar', nombre });
};

// 5.4 Quita la primera aparición; devuelve true / false
export const quitarDelCarrito = (carrito, historial, nombre) => {
  const posicion = carrito.indexOf(nombre);
  if (posicion === -1) return false;
  carrito.splice(posicion, 1);
  historial.push({ accion: 'quitar', nombre, posicion });
  return true;
};

// 5.5 Revierte la última acción (LIFO); devuelve true / false
export const deshacer = (carrito, historial) => {
  const ultima = historial.pop();
  if (ultima === undefined) return false;

  if (ultima.accion === 'agregar') {
    // Se deshace un "agregar" borrando la última aparición del producto
    const posicion = carrito.lastIndexOf(ultima.nombre);
    if (posicion !== -1) carrito.splice(posicion, 1);
  } else if (ultima.accion === 'quitar') {
    // Se deshace un "quitar" reinsertando el producto donde estaba
    carrito.splice(ultima.posicion, 0, ultima.nombre);
  }
  return true;
};

// ---------- Parte 6 · Informe final ----------

// 6.1 Atiende toda la cola en orden, actualizando el stock pedido a pedido
export const procesarCola = (catalogo, cola) => {
  let catalogoActual = catalogo;
  const servidos = [];
  const rechazados = [];

  while (cola.length > 0) {
    const pedido = atenderSiguiente(cola);
    if (puedeServirse(catalogoActual, pedido)) {
      catalogoActual = servirPedido(catalogoActual, pedido);
      servidos.push(pedido);
    } else {
      rechazados.push(pedido);
    }
  }

  return { catalogo: catalogoActual, servidos, rechazados };
};

// 6.2 Nombres vendidos, sin repetidos y ordenados
export const productosVendidos = (pedidos) =>
  pedidos
    .map((pedido) => pedido.lineas.map((linea) => linea.nombre))
    .flat()
    .filter((nombre, i, todos) => todos.indexOf(nombre) === i)
    .sort((a, b) => a.localeCompare(b, 'es'));

// 6.3 'Altavoz: ■■■ (3)' por cada producto
export const graficoStock = (catalogo) =>
  catalogo.map(
    (p) => `${p.nombre}: ${new Array(p.stock).fill('■').join('')} (${p.stock})`
  );
