// Obtén todos los elementos con la clase "carta"
const cartas = document.querySelectorAll('.aficiones__carta');

// Recorre cada elemento y agrega el evento de "mouseover"
cartas.forEach(carta => {
  carta.addEventListener('mouseover', mostrarImagenFondo);
  carta.addEventListener('mouseout', ocultarImagenFondo);
});

// Función para mostrar la imagen de fondo
function mostrarImagenFondo(event) {
  const carta = event.target;
  const imagen = carta.getAttribute('data-imagen');
  carta.style.backgroundImage = `url('${imagen}')`;
}

// Función para ocultar la imagen de fondo
function ocultarImagenFondo(event) {
  const carta = event.target;
  carta.style.backgroundImage = '';
}