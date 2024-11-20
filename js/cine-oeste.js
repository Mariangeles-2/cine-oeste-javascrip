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

function generarPeliculasConIndice() {
  let peliculasConIndice = "";
  for (let i = 0; i < peliculas.length; i++) {
    const peliculaConIndice = i + 1 + " - " + peliculas[i] + "\n";
    peliculasConIndice = peliculasConIndice + peliculaConIndice;
  }
  return peliculasConIndice;
}

//1 - Ver Cartelera
function verCartelera() {
  const mensajeCartelera = "Las peliculas cargadas en la cartelera son: \n\n" + generarPeliculasConIndice();

  alert(mensajeCartelera);
}

//2 - Agregar película
function agregarPelicula() {
  const peliculaAAgregar = prompt("Ingrese el nombre de la película que desea agregar");
  peliculas.push(peliculaAAgregar);
  alert("La película agregada fue: " + peliculaAAgregar);
}

//3 - Eliminar película
function eliminarPelicula() {
  let posicionPeliculaAEliminar;
  let volverAIntentarlo = true;

  do {
    posicionPeliculaAEliminar = parseInt(prompt("Seleccione el número de la película que desea eliminar: \n\n" + generarPeliculasConIndice())) - 1;
    if (posicionPeliculaAEliminar >= 0 && posicionPeliculaAEliminar < peliculas.length) {
      const nombrePeliculaAEliminar = peliculas[posicionPeliculaAEliminar];
      peliculas.splice(posicionPeliculaAEliminar, 1);
      alert("La película eliminada fue: " + nombrePeliculaAEliminar);
    } else {
      volverAIntentarlo = confirm("No se encontró la película a eliminar. Desea volver a intentarlo?");
    }
  } while (volverAIntentarlo && (posicionPeliculaAEliminar < 0 || posicionPeliculaAEliminar > peliculas.length));
}

//4 - Modificar película
function modificarPelicula() {
  let posicionPeliculaAModificar;
  let volverAIntentarlo = true;

  do {
    posicionPeliculaAModificar = parseInt(prompt("Seleccione el número de la película que desea modificar: \n\n" + generarPeliculasConIndice())) - 1;
    if (posicionPeliculaAModificar >= 0 && posicionPeliculaAModificar < peliculas.length) {
      const nombrePeliculaAModificar = peliculas[posicionPeliculaAModificar];
      const nuevoNombreDePelicula = prompt("Ingrese el nuevo nombre de la película");
      peliculas[posicionPeliculaAModificar] = nuevoNombreDePelicula;
      alert("La película " + nombrePeliculaAModificar + " se modificó por la película " + nuevoNombreDePelicula);
    } else {
      volverAIntentarlo = confirm("No se encontró la película a modificar. Desea volver a intentarlo?");
    }
  } while (volverAIntentarlo && (posicionPeliculaAModificar < 0 || posicionPeliculaAModificar > peliculas.length));
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
      eliminarPelicula();
      break;
    case 4:
      modificarPelicula();
      break;
    case 5:
      alert("Gracias por usar la plataforma, hasta pronto!");
      break;

    default:
      alert("Opción inválida.");
      break;
  }
} while (opcion !== 5);