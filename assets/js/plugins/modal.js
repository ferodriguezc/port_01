function ocultar() {
    // Obtener el modal
    var modal = document.getElementById("modal");

    // Verificar si el modal está visible
    if (modal.style.display !== "none") {
        // Si el modal está visible, ocultarlo
        modal.style.display = "none";
        // Restaurar el desplazamiento del sitio
        document.body.style.overflow = "auto"; // Habilitar el desplazamiento en la página
    } else {
        // Si el modal ya está oculto, mostrarlo
        modal.style.display = "flex"; // Mostrar el modal con flex
        // Deshabilitar el desplazamiento del sitio para evitar que la página se mueva
        document.body.style.overflow = "hidden"; // Deshabilitar el desplazamiento
    }
}

// Función para cerrar el modal si el usuario hace clic fuera de él
function cerrarSiFuera(event) {
    var modalContent = document.querySelector('.modal-content');

    // Verificar si el clic ocurrió fuera del contenido del modal
    if (!modalContent.contains(event.target)) {
        ocultar();  // Llamar a la función ocultar para cerrar el modal
    }
}
