const totalCursos = document.querySelectorAll('.card').length;
const enlaceContacto = document.querySelector('.navegacion a:last-child');
enlaceContacto.textContent = 'Contacto (${totalCursos} cursos';