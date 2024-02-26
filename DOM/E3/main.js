function infoCaption() {
    var checkboxes = document.getElementsByName('seat');
    var selectedSeats = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedSeats.push(checkboxes[i].value);
        }
    }
    // Mostrar los asientos seleccionados en pantalla
    var resultadoDiv = document.getElementById('resultadoSeleccion');
    resultadoDiv.innerHTML = "Asientos seleccionados: " + selectedSeats.join(', ');
}
