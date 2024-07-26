let cartas = 0;
let item = '';
let numeroUsuado = [];


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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
    const personajes = [
        // Héroes
        {
            nombre: "Goku",
            tipo: "Héroe",
            url: "https://i.pinimg.com/originals/29/60/b7/2960b7b6fa21e214e4eaf3274e63209f.jpg",
            descripcion: "El protagonista principal de Dragon Ball, un Saiyan con un inmenso poder."
        },
        {
            nombre: "Vegeta",
            tipo: "Héroe",
            url: "https://pm1.aminoapps.com/6323/73cd67161175806ff14b507aa7e53eea0f71a178_hq.jpg",
            descripcion: "El príncipe de los Saiyans, inicialmente un enemigo, pero luego se convierte en un aliado."
        },
        {
            nombre: "Spider-Man",
            tipo: "Héroe",
            url: "https://conceptartworld.com/wp-content/uploads/2019/01/Spider-Man-Into-the-Spider-Verse-Concept-Art-Alberto-Mieglo-New-Spider-Man-01.jpg",
            descripcion: "Peter Parker, un joven con habilidades arácnidas que lucha contra el crimen en Nueva York."
        },
        {
            nombre: "Iron Man",
            tipo: "Héroe",
            url: "https://i.pinimg.com/originals/32/23/96/3223965637cdb086a9e6648210cb9cac.jpg",
            descripcion: "Tony Stark, un genio millonario que construye un traje avanzado para combatir amenazas."
        },
        {
            nombre: "Captain America",
            tipo: "Héroe",
            url: "https://i.pinimg.com/736x/64/24/f0/6424f01f8926d355d1de73278ad18cbf.jpg",
            descripcion: "Steve Rogers, un supersoldado de la Segunda Guerra Mundial que defiende la justicia."
        },
        {
            nombre: "Thor",
            tipo: "Héroe",
            url: "https://live.staticflickr.com/7073/7331211486_93d12f85e6_z.jpg",
            descripcion: "El dios del trueno, un Asgardiano con un poderoso martillo llamado Mjolnir."
        },
        {
            nombre: "Hulk",
            tipo: "Héroe",
            url: "https://i.pinimg.com/originals/a4/98/45/a4984596a49ff88be5c1075469d2ad62.jpg",
            descripcion: "Bruce Banner, un científico que se transforma en un gigante verde cuando se enoja."
        },
        {
            nombre: "Black Panther",
            tipo: "Héroe",
            url: "https://screenrant.com/wp-content/uploads/bp-11.jpg",
            descripcion: "T'Challa, el rey de Wakanda, con habilidades mejoradas y un traje de vibranium."
        },
        {
            nombre: "Superman",
            tipo: "Héroe",
            url: "https://www.shutterstock.com/image-vector/superman-art-design-vector-super-600nw-2392947697.jpg",
            descripcion: "Clark Kent, un extraterrestre de Krypton con poderes sobrehumanos."
        },
        {
            nombre: "Batman",
            tipo: "Héroe",
            url: "https://conceptartworld.com/wp-content/uploads/2016/03/Batman_Concept_Art_Illustration_01_Florent_Auguy.jpg",
            descripcion: "Bruce Wayne, un vigilante nocturno de Gotham con habilidades de combate y tecnología avanzada."
        },
        {
            nombre: "Wonder Woman",
            tipo: "Héroe",
            url: "https://i.pinimg.com/564x/15/7d/03/157d0356d0a346d45293f7e8790de4c5.jpg",
            descripcion: "Diana Prince, una amazona guerrera con fuerza sobrehumana y habilidades de combate."
        },
        {
            nombre: "Flash",
            tipo: "Héroe",
            url: "https://www.creativeuncut.com/gallery-25/art/igau-flash-concept2.jpg",
            descripcion: "Barry Allen, el hombre más rápido del mundo gracias a su conexión con la Speed Force."
        },
        {
            nombre: "Aquaman",
            tipo: "Héroe",
            url: "https://conceptartworld.com/wp-content/uploads/2019/01/The-Art-and-Making-of-Aquaman-Art-Book-01.jpg",
            descripcion: "Arthur Curry, el rey de Atlantis, con la habilidad de comunicarse con la vida marina."
        },
        {
            nombre: "Green Lantern",
            tipo: "Héroe",
            url: "https://i.pinimg.com/736x/22/47/c4/2247c405f29390fdc3e2776bf81694ab.jpg",
            descripcion: "Hal Jordan, un miembro del Green Lantern Corps con un anillo de poder."
        },
        {
            nombre: "He-Man",
            tipo: "Héroe",
            url: "https://i.pinimg.com/originals/27/49/1b/27491b2c84697de6f9bb882203968ce6.jpg",
            descripcion: "El defensor de Eternia, con fuerza sobrehumana y una espada mágica."
        },
    
        // Villanos
        {
            nombre: "Frieza",
            tipo: "Villano",
            url: "https://i.pinimg.com/736x/05/1d/60/051d60626165d304a7760274cc9461f0.jpg",
            descripcion: "Un tirano galáctico con inmenso poder y múltiples transformaciones."
        },
        {
            nombre: "Goku Black",
            tipo: "Villano",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb29fPwgxb2Fqjr5baKIEWLKEvwLBZ9ad8XA&s",
            descripcion: "Una versión malvada de Goku que busca destruir a los mortales."
        },
        {
            nombre: "Green Goblin",
            tipo: "Villano",
            url: "https://i.pinimg.com/736x/f6/91/cf/f691cfdbbb5f66d896b64531f4beb7cf.jpg",
            descripcion: "Norman Osborn, un empresario corrupto que se convierte en el villano de Spider-Man."
        },
        {
            nombre: "Thanos",
            tipo: "Villano",
            url: "https://i.pinimg.com/originals/39/75/4d/39754d16b903af655d31fbdeef44c759.jpg",
            descripcion: "Un titán loco que busca recolectar las Gemas del Infinito para eliminar la mitad del universo."
        },
        {
            nombre: "Red Skull",
            tipo: "Villano",
            url: "https://i.pinimg.com/736x/32/71/6c/32716cab6736f74d6a9fca9e069f7372.jpg",
            descripcion: "Johann Schmidt, un villano nazi y enemigo acérrimo de Captain America."
        },
        {
            nombre: "Loki",
            tipo: "Villano",
            url: "https://i.pinimg.com/736x/32/71/6c/32716cab6736f74d6a9fca9e069f7372.jpg",
            descripcion: "El dios de las mentiras y el engaño, hermano adoptivo de Thor."
        },
        {
            nombre: "Abomination",
            tipo: "Villano",
            url: "https://cdnb.artstation.com/p/assets/images/images/018/233/785/large/aaron-sims-creative-211-img153.jpg?1558651978",
            descripcion: "Emil Blonsky, un monstruo gamma con fuerza y resistencia similares a las de Hulk."
        },
        {
            nombre: "Killmonger",
            tipo: "Villano",
            url: "https://i.pinimg.com/originals/54/87/35/548735824656e5a55f52e75843cde756.jpg",
            descripcion: "Erik Stevens, un ex soldado con una vendetta personal contra Black Panther."
        },
        {
            nombre: "Lex Luthor",
            tipo: "Villano",
            url: "https://i.pinimg.com/originals/2b/61/48/2b6148feb1c9a5f68890311654a6e618.jpg",
            descripcion: "Un magnate corporativo y genio criminal, enemigo jurado de Superman."
        },
        {
            nombre: "Joker",
            tipo: "Villano",
            url: "https://images.squarespace-cdn.com/content/v1/5133bc80e4b0c6fb04dcd6c4/29681844-65e8-403a-a097-ede9f3194ff4/joker_custom_web.jpg",
            descripcion: "El príncipe payaso del crimen, un maniaco que siembra el caos en Gotham."
        },
        {
            nombre: "Ares",
            tipo: "Villano",
            url: "https://cdna.artstation.com/p/assets/images/images/003/476/724/large/stefan-kopinski-ares-copy.jpg?1474111001",
            descripcion: "El dios de la guerra, enemigo principal de Wonder Woman."
        },
        {
            nombre: "Reverse-Flash",
            tipo: "Villano",
            url: "https://i.pinimg.com/736x/90/9f/6d/909f6d6454222c40acd5332c9fe56567.jpg",
            descripcion: "Eobard Thawne, un velocista del futuro y archienemigo de Flash."
        },
        {
            nombre: "Black Manta",
            tipo: "Villano",
            url: "https://cdnb.artstation.com/p/assets/images/images/024/345/403/large/yux-art-black-manta-2.jpg?1582113973",
            descripcion: "David Hyde, un mercenario con un traje avanzado que busca venganza contra Aquaman."
        },
        {
            nombre: "Sinestro",
            tipo: "Villano",
            url: "https://i.pinimg.com/736x/65/2a/ef/652aef6692af1bfe3bfb42c5a9e9d6f5.jpg",
            descripcion: "Thaal Sinestro, un ex Green Lantern que usa el poder del miedo."
        },
        {
            nombre: "Skeletor",
            tipo: "Villano",
            url: "https://i.pinimg.com/736x/2d/b8/80/2db88007c38ebc903530373632bc9637.jpg",
            descripcion: "El villano principal de Masters of the Universe, un hechicero con una calavera como rostro."
        }
    ];
    const personajesEnemigos = {
        "Goku": "Frieza",
        "Vegeta": "Goku Black",
        "Spider-Man": "Green Goblin",
        "Iron Man": "Thanos",
        "Captain America": "Red Skull",
        "Thor": "Loki",
        "Hulk": "Abomination",
        "Black Panther": "Killmonger",
        "Superman": "Lex Luthor",
        "Batman": "Joker",
        "Wonder Woman": "Ares",
        "Flash": "Reverse-Flash",
        "Aquaman": "Black Manta",
        "Green Lantern": "Sinestro",
        "He-Man": "Skeletor"
    };
    console.log(personajesEnemigos);
    let cartasGrid = cartas*cartas;
    document.getElementById('tablero').style.gridTemplateColumns = `repeat(${cartas}, 1fr)`;
    document.getElementById('tablero').style.gridTemplateRows = `repeat(${cartas}, 1fr)`;
    for (let index = 0; index < cartasGrid; index++) {
        let randomNumber = getRandomInt(cartasGrid);
        if (numeroUsuado.includes(randomNumber)) {
        while (numeroUsuado.includes(randomNumber)) {
            randomNumber = getRandomInt(cartasGrid);
        }

    }
    numeroUsuado.push(randomNumber);
        let UrlPersonajes = personajes[randomNumber].url;
        let  UrlPersonajesNombre = personajes[randomNumber].nombre;
        item+=
        `<div class="carta-container">
            <div class="carta" data-valor="${index}">
                <img src="images/card-7031432.svg" alt="Carta trasera" style="z-index:2;" class="delantera-cartas" id="${index}">
                <img src="${UrlPersonajes}" alt="${UrlPersonajesNombre}" class="trasera-card" style="z-index:-1;">
            </div>
        </div>`;
        
    } 
    document.getElementById('tablero').innerHTML = item;
    let cartasSeleccionadas = document.querySelectorAll('.trasera-card');
    let cartaDelanteras = document.querySelectorAll('.delantera-cartas');
    let primeraCarta = null;  // Variable para almacenar la primera carta seleccionada
    let segundaCarta = null;


    for (let index = 0; index < cartaDelanteras.length; index++) {
        cartaDelanteras[index].addEventListener('click', function(){
            if (primeraCarta && segundaCarta) return;
            cartaDelanteras[index].classList.add('levantada');
              // Si no hay una primera carta seleccionada, seleccionarla
              if (!primeraCarta) {
                primeraCarta = cartaDelanteras[index];
            } else {
                // Si ya hay una primera carta seleccionada, seleccionar la segunda
                segundaCarta = cartaDelanteras[index];
            }
            console.log(personajesEnemigos[index]);
            // Si hay dos cartas seleccionadas, compararlas
            if ((personajesEnemigos[index] && segundaCarta) || (personajesEnemigos[index] && primeraCarta)) {
                console.log('Cartas coinciden');
                if (primeraCarta.alt === segundaCarta.alt) {
                    // Si las cartas coinciden, dejarlas boca arriba
                    primeraCarta = null;
                    segundaCarta = null;
                } else {
                    console.log('Cartas no coinciden');
                    // Si las cartas no coinciden, ocultarlas
                    setTimeout(() => {
                        cartaDelanteras[i].style.zindex('-1');
                        cartaDelanteras[i].classList.remove('-1');
                        primeraCarta = null;
                        segundaCarta = null;
                    }, 1000);
                }
            }

            cartasSeleccionadas[index].style.zIndex = '2';
            cartasSeleccionadas[index].style.transform = 'rotateY(-180deg)';
            cartasSeleccionadas[index].style.transition = 'all 0.5s';
        });
        
    }
    
    
}
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar drag & drop y configurar manejadores de eventos de usuario
    tablero();
});
