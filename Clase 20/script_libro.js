/*
crear una clase libro
las clases libro tendrà titulo, autor, año y genero.
crear un método que devuelva toda la información del libro
pide 3 libros y guardalos en un array
los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
validar que los campos no se introducirán vacios
validar que el año sea un numero y que tenga 4 digitos
validar que el genero sea Aventuras, Terror o fantasia
Crear una funcion que muestre todos los libros
crear una funcion que muestre los autores ordenados alfabeticamente
crear una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando un el metodo que devuelve la informacion
*/
let library = [];
class Book {
  constructor(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
  }
  dateBook() {
    return `El libro se llama ${this.titulo} su Autor es ${this.autor} se publico el ${this.año} y su genero es ${this.genero}`;
  }
}

while (library.length < 3) {
  let titulo = prompt("Ingrese el Nombre del libro");
  let autor = prompt("Ingrese el Autor del Libro");
  let year = Number(prompt("Ingrese el año de publicación del libro"));
  let genero = prompt(
    "Ingrese el genero del Libro AVENTURA, TERROR, FANTASIA"
  ).toUpperCase();

  if (
    titulo != "" &&
    autor != "" &&
    !isNaN(year) &&
    year.length == 4 &&
    (genero === "AVENTURA" || genero === "TERROR" || genero === "FANTASIA")
  ) {
    library.push(new Book(titulo, autor, year, genero));
  }
}

const showAllBook = () => {
  console.log(library);
};

showAllBook();
/*
const printTitelBook = () => {
  for (let book of array) {
    return book.titulo;
  }
};
const printAutorBook = () => {
  for (autorOrder of array) {
    return autorOrder.autor.sort((a, b) => a.localeCompare(b));
  }
};
*/
