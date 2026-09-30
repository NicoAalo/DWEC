// Ejercicio 2.3: Condicionales y Operadores Lógicos

// 1-4. Retirar dinero
function retirarDinero(saldo, retirar) {
  if (saldo >= retirar) {
    console.log(`Retiro exitoso. Saldo restante: ${saldo - retirar}`);
  } else {
    console.log("Saldo insuficiente");
  }
}

console.log("--- Versión básica ---");
retirarDinero(500, 200); // se puede
retirarDinero(100, 200); // no se puede

// Extra: con tarjeta de crédito
function retirarDineroConTarjeta(saldo, retirar, tieneTarjetaCredito) {
  if (saldo >= retirar) {
    console.log(`Retiro exitoso. Saldo restante: ${saldo - retirar}`);
  } else if (tieneTarjetaCredito) {
    console.log("Saldo insuficiente, pagando con tarjeta de crédito");
  } else {
    console.log("Saldo insuficiente");
  }
}

console.log("--- Extra: con tarjeta de crédito ---");
retirarDineroConTarjeta(500, 200, false); // saldo suficiente
retirarDineroConTarjeta(100, 200, true);  // paga con tarjeta
retirarDineroConTarjeta(100, 200, false); // insuficiente
