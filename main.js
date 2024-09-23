let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let limpiarBtn = document.getElementById('limpiar');
let mensajeValidacion = document.getElementById('mensaje-validacion');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Función para generar la contraseña
function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    validarPassword(password);
}

// Función para validar la contraseña
function validarPassword(password) {
    const tieneNumero = /\d/;
    const tieneMayuscula = /[A-Z]/;
    const tieneMinuscula = /[a-z]/;
    const tieneSimbolo = /[!@#$%^&*()]/;

    if (password.length >= 8 && tieneNumero.test(password) && tieneMayuscula.test(password) && tieneMinuscula.test(password) && tieneSimbolo.test(password)) {
        mensajeValidacion.textContent = 'Contraseña fuerte ✅';
        mensajeValidacion.style.color = 'green';
    } else {
        mensajeValidacion.textContent = 'Contraseña débil ❌ (Debe contener mayúscula, minúscula, número y símbolo)';
        mensajeValidacion.style.color = 'red';
    }
}

// Función para limpiar el campo de la contraseña
function limpiar() {
    contrasena.value = '';
    mensajeValidacion.textContent = '';
}

// Event listener para el botón de limpiar
limpiarBtn.addEventListener('click', limpiar);








