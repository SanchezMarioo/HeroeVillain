let cartas = 0;
let item = '';




function recuperarDatos(){
    let nombreInput = document.getElementById('nombre');

    let nombreLocal = localStorage.getItem('nombre');
    nombreInput.innerHTML = nombreLocal;
    let avatarSeleccionado = localStorage.getItem('Avatar');
    let avatar = document.getElementById('avatar');
    
    avatar.src = avatarSeleccionado;
    let dificultad = localStorage.getItem('dificultad');
    cartas = parseInt(localStorage.getItem('cartas'));

}
recuperarDatos();
function tablero(){
    let cartasGrid = cartas*cartas;
    document.getElementById('tablero').style.gridTemplateColumns = `repeat(${cartas}, 1fr)`;
    document.getElementById('tablero').style.gridTemplateRows = `repeat(${cartas}, 1fr)`;
    for (let index = 0; index < cartasGrid; index++) {
        // Corregido: Añadido el cierre de la etiqueta div para 'carta-container'
        item+=`<div class="carta-container"><div class="carta" data-valor="${index}"><img src="images/card-7031432.svg" alt="Carta"></div></div>`;
        
    }
    document.getElementById('tablero').innerHTML = item;
}
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar drag & drop y configurar manejadores de eventos de usuario
    tablero();
});
