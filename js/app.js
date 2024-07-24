

function dragDrop() {
    var avatarCont = document.getElementById("avatar-drop"); // Mover esta línea antes de la verificación
    if (avatarCont === null) {
        console.error('El elemento avatarCont no existe en el DOM');
        return true; // Salir de la función si avatarCont no existe
    }
    var items = document.getElementsByClassName("avatar-img");
    var nombre = document.getElementById("nombre");
    var itemImg; // Definir itemImg aquí para que sea accesible en todos los manejadores de eventos

    // Añadir eventos de arrastrar a los elementos arrastrables
    for (let item of items) {
        item.addEventListener('dragstart', function(event) {
            itemImg = event.target; // Guardar la referencia del elemento arrastrado
        });
    }

    // Permitir que el contenedor reciba elementos arrastrados
    avatarCont.addEventListener('dragover', function(event) {
        event.preventDefault(); // Necesario para permitir el drop
    });

    // Manejar el evento drop en el contenedor
    avatarCont.addEventListener('drop', function(event) {
        event.preventDefault();
        if (itemImg) { // Asegurarse de que itemImg está definido
            nombre.innerText = itemImg.alt;
            localStorage.setItem("Avatar", itemImg.src ) // Actualizar el texto con el alt del elemento arrastrado
        }
    });
}

function datosUsuario(){
    let elementoNombre = document.getElementById("nickname"); // Referencia al elemento del DOM
    let valorNombre = elementoNombre.value; // Valor del input
    console.log(valorNombre);
    let dificultad = document.querySelectorAll('input[name="dificultad"]');
    let cartas = document.querySelectorAll('input[name="cartas"]');

    for (let dificultadChecked of dificultad){
        dificultadChecked.addEventListener('change', function(event){
            localStorage.setItem("dificultad", event.target.value);
        });
    }
    for (let cartasChecked of cartas){
        cartasChecked.addEventListener('change', function(event){
            localStorage.setItem("cartas", event.target.value);
        });
    }
    elementoNombre.addEventListener('input', function(event){
        localStorage.setItem("nombre", event.target.value);
    });

}
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar drag & drop y configurar manejadores de eventos de usuario
    dragDrop();
    datosUsuario();
    document.getElementById("boton").addEventListener('click', datosUsuario); // Corregido aquí
});
