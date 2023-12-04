window.onload = function () {
    const formProducto = document.querySelector(".crearP");

    //  span para cada campo
    const campos = ["name", "description", "category", "price", "descuento", "color", "image"];
    campos.forEach(campo => {
        const span = document.createElement("span");
        span.className = "warning";
        span.id = `${campo}Warning`;
        const input = document.getElementById(campo);
        input.parentNode.appendChild(span);
    });

    formProducto.addEventListener("submit", (e) => {
        e.preventDefault();

        // Limpiar mensajes de advertencia
        campos.forEach(campo => {
            document.getElementById(`${campo}Warning`).innerHTML = "";
        });

        let warningsProducto = "";
        let entrarProducto = false;

        // Validar cada campo
        campos.forEach(campo => {
            const input = document.getElementById(campo);

            if (campo === "price" || campo === "descuento") {
                // Validar campos numéricos
                const campoValido = /^\d+(\.\d{1,2})?$/;
                if (!campoValido.test(input.value)) {
                    warningsProducto += ` ${campo} no es válido. Ingresa un valor numérico válido.<br>`;
                    entrarProducto = true;
                    document.getElementById(`${campo}Warning`).innerHTML = ` ${campo} no es válido.`;
                }
            } else {
                // Validar otros campos
                if (input.value.length < 3) {
                    warningsProducto += ` ${campo} debe tener al menos 3 caracteres.<br>`;
                    entrarProducto = true;
                    document.getElementById(`${campo}Warning`).innerHTML = ` ${campo} debe tener al menos 3 caracteres.`;
                }
            }
        });

        // Validar la imagen del producto
        const imagenProducto = document.getElementById("image");
        if (imagenProducto.files.length === 0) {
            warningsProducto += 'Debes subir al menos una imagen del producto.<br>';
            entrarProducto = true;
            document.getElementById("imageWarning").innerHTML = 'Debes subir al menos una imagen del producto.';
        }

        // Mostrar advertencias si es necesario
        if (entrarProducto) {
            // Puedes mostrar una alerta o realizar otras acciones aquí
        } else {
            formProducto.submit(); // Envía el formulario si no hay errores
        }
    });
};
