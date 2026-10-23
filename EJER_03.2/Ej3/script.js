function generarInformeDeValidacion() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    const divInforme = document.querySelector('div#informe-errores');
    divInforme.innerHTML = '';

    const nombreValido = nombre.length > 3;
    const emailValido = email.includes('@');

    if (!nombreValido) {
        const pErrorNombre = document.createElement('p');
        pErrorNombre.textContent = 'El nombre es incorrecto (debe tener más de 3 caracteres).';
        pErrorNombre.style.color = 'red';
        divInforme.appendChild(pErrorNombre);
    }

    if (!emailValido) {
        const pErrorEmail = document.createElement('p');
        pErrorEmail.textContent = 'El email es incorrecto (debe contener un @).';
        pErrorEmail.style.color = 'red';
        divInforme.appendChild(pErrorEmail);
    }

    if (nombreValido && emailValido) {
        const pExito = document.createElement('p');
        pExito.textContent = 'Formulario válido';
        pExito.style.color = 'green';
        divInforme.appendChild(pExito);
    }
}