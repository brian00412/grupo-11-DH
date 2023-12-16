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

        // Validar el email
        if (!isValidEmail(email.value)) {
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
        } else {
            form.submit();
        }

    });

   
    function isValidEmail(emailValue) {
        
        return emailValue && emailValue.includes('@') && emailValue.split('@')[1]?.includes('.');
    }

};
