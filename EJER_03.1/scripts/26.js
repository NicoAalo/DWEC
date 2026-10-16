const contenedoresInfo = document.querySelectorAll('.card .info');
contenedoresInfo.forEach((info) => { 
    const parrafoDuracion = document.createElement('p');
    parrafoDuracion.classList.add('duracion'); 
    parrafoDuracion.textContent = 'Duración: 20 horas'; 
    info.appendChild(parrafoDuracion); });