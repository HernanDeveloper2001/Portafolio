// Codigo de habilidades y aficiones para el contenido 

const titulo = document.getElementById('nombre');
const nombreText = 'Hernán Darío,';
let index = 0;

function escribirTexto() {
  if (index < nombreText.length) {
    titulo.textContent += nombreText[index];
    titulo.style.color = 'rgb(6, 130, 232)';
    index++;
    setTimeout(escribirTexto, 150); // Ajusta el tiempo de espera entre cada letra (en milisegundos)
  }
}
escribirTexto();


//Codigo pie de pagina 

const fecha = document.getElementById('pie__fecha-actual');
fecha.textContent = new Date().getFullYear();