//Plataforma de gestion Cine Oeste
//Menu
//1 - Ver cartelera
//2 - Agregar peliculas
//3 - Eliminar peliculas
//4 - Modificar una pelicula
//5 - Salir



alert("Bienvenido al portal de gestión Cine Oeste");

let opcion;

const peliculas = ["Enredados", "Red"];

function verCartelera() {
    alert ("Las peliculas cargadas en la cartelera son: \n\n" + peliculas.join("\n"));
}

function agregarPelicula() {
    const peliculaAAgregar = prompt("Ingrese el nombre de la película que desea agregar");
    peliculas.push(peliculaAAgregar);
}

function eliminarPelicula() {
    const peliculaAEliminar = prompt("Ingrese el nombre de la película que desea eliminar");
    peliculas.push(peliculaAAgregar);
}

do {

opcion = parseInt(prompt("Seleccione una opción del menú: \n1 - Ver cartelera\n2- Agregar peliculas\n3 - Eliminar peliculas\n4 - Modificar una pelicula\n5 - Salir"));

switch (opcion) {
    case 1:
        verCartelera();
        break;
    case 2:
        agregarPelicula();
        break;
    case 3:
        alert ("Eliminar");
        break;
    case 4:
        alert ("Modificar");
        break;
    case 5:
        alert ("Gracias por usar la plataforma, hasta pronto!");
        break;

    default:
        alert ("Opción inválida.");
        break;
}


} while (opcion !== 5);