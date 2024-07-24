let cartas = 0;
let item = '';



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
        item+=`<div class="carta-container"><div class="carta" data-valor="${index}"><img src="images/card-7031432.svg" alt="Carta" id="trasera-card"></div></div>`;
        
    }
    document.getElementById('tablero').innerHTML = item;
    const personajes = [
        // Héroes
        { nombre: "Goku", tipo: "Héroe" },
        { nombre: "Vegeta", tipo: "Héroe" },
        { nombre: "Spider-Man", tipo: "Héroe" },
        { nombre: "Iron Man", tipo: "Héroe" },
        { nombre: "Captain America", tipo: "Héroe" },
        { nombre: "Thor", tipo: "Héroe" },
        { nombre: "Hulk", tipo: "Héroe" },
        { nombre: "Black Panther", tipo: "Héroe" },
        { nombre: "Superman", tipo: "Héroe" },
        { nombre: "Batman", tipo: "Héroe" },
        { nombre: "Wonder Woman", tipo: "Héroe" },
        { nombre: "Flash", tipo: "Héroe" },
        { nombre: "Aquaman", tipo: "Héroe" },
        { nombre: "Green Lantern", tipo: "Héroe" },
        { nombre: "He-Man", tipo: "Héroe" },
    
        // Villanos
        { nombre: "Frieza", tipo: "Villano" },
        { nombre: "Goku Black", tipo: "Villano" },
        { nombre: "Green Goblin", tipo: "Villano" },
        { nombre: "Thanos", tipo: "Villano" },
        { nombre: "Red Skull", tipo: "Villano" },
        { nombre: "Loki", tipo: "Villano" },
        { nombre: "Abomination", tipo: "Villano" },
        { nombre: "Killmonger", tipo: "Villano" },
        { nombre: "Lex Luthor", tipo: "Villano" },
        { nombre: "Joker", tipo: "Villano" },
        { nombre: "Ares", tipo: "Villano" },
        { nombre: "Reverse-Flash", tipo: "Villano" },
        { nombre: "Black Manta", tipo: "Villano" },
        { nombre: "Sinestro", tipo: "Villano" },
        { nombre: "Skeletor", tipo: "Villano" }
    ];
    
}
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar drag & drop y configurar manejadores de eventos de usuario
    tablero();
});
