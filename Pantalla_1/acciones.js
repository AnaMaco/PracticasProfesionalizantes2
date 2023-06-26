document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var opciones = document.querySelector('.opciones');
  
    menu.addEventListener('click', function() {
      opciones.style.display = opciones.style.display === 'none' ? 'block' : 'none';
    });
  });