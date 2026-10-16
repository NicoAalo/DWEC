const tarjetasEstandar = document.querySelectorAll('.card:not(.premium)'); 
tarjetasEstandar.forEach((tarjeta) => { tarjeta.style.border = '2px dotted black'; });