window.onload = function () {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const form = document.getElementById("form");
    const parrafo = document.getElementById("warnings");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Limpiar mensajes de advertencia
        parrafo.innerHTML = "";

        let warnings = "";
        let entrar = false;

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,2})+$/;

        // Validar el email
        if (!regexEmail.test(email.value)) {
            warnings += 'El email no es válido.<br>';
            entrar = true;
        }

        // Validar la contraseña
        if (password.value.length < 8) {
            warnings += 'La contraseña debe tener al menos 8 caracteres.<br>';
            entrar = true;
        }

        // Mostrar advertencias si es necesario
        if (entrar) {
            parrafo.innerHTML = warnings;
        }
    });
};
