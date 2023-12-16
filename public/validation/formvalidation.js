window.onload = function () {
    const apellido = document.getElementById("apellido");
    const nombre = document.getElementById("nombre");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    const form = document.getElementById("form");
    const parrafo = document.getElementById("warnings");
    const usuario = document.getElementById("foto_usuario");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Limpiar mensajes de advertencia
        parrafo.innerHTML = "";

        let warnings = "";
        let entrar = false;

        // Validar el nombre
        if (nombre.value.length < 6) {
            warnings += 'El nombre debe tener al menos 6 caracteres.<br>';
            entrar = true;
        }

      

        // Validar la contraseña
        if (password.value.length <= 8) {
            warnings += 'La contraseña debe tener al menos 8 caracteres.<br>';
            entrar = true;
        }
        

        // Validar la foto de usuario
        if (usuario.files.length === 0) {
            warnings += 'Debes subir al menos una foto.<br>';
            entrar = true;
        }

        // Mostrar advertencias si es necesario
        if (entrar) {
            parrafo.innerHTML = warnings;
        }else {
            form.submit();
        }

    });
  

   
};
