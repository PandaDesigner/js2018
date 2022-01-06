/*
crear una clase libro<-----------------------****
las clases libro tendrà titulo, autor, año y genero.<-------------------****
crear un método que devuelva toda la información del libro<-------------****
pide 3 libros y guardalos en un array<------------****
los libros se introducirán al arrancar el programa pidiendo los datos con prompt.<----------****
validar que los campos no se introducirán vacios<----------******
validar que el año sea un numero y que tenga 4 digitos<---------****
validar que el genero sea Aventuras, Terror o fantasia<----------****
Crear una funcion que muestre todos los libros<-------------------****
crear una funcion que muestre los autores ordenados alfabeticamente<--------****
crear una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando un el metodo que devuelve la informacion
*/

"use strict";

class Books {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.infoBook = `El libro ${title} su autor es ${author} fue publicado ${year} y pertenece al genero ${genre}`;
  }
  infoGender() {
    return this.genre;
  }
  infoBooks() {
    return `El libro ${this.title} su autor es ${this.author} fue publicado ${this.year} y pertenece al genero ${this.genre}`;
  }
}

const arrayBooks = [];
let itsBook = new Books("its", "Stephen King", 1958, "terror");
arrayBooks.push(itsBook);

let gulliversBook = new Books(
  "Gullivers Travels",
  "Jonathan Swift",
  1726,
  "aventura"
);
arrayBooks.push(gulliversBook);

let dracula = new Books("Dracula", "Irlandés Bram Stoker", 1897, "fantasia");
arrayBooks.push(dracula);

//console.log(arrayBooks.length);
/*
while (arrayBooks.length < 3) {
	let title = prompt("INGRESE EL TITULO DEL LIBRO");
	let author = prompt("INGRESE EL AUTOR DEL LIBRO");
	let year = Number(prompt("INGRESE EL AÑO EN QUE SE PUBLICO EL LIBRO"));
	let genre = prompt("INGRESE EL GENERO DEL LIBRO").toLowerCase();

	if (
		title != "" &&
		author != "" &&
		!isNaN(year) &&
		(genre == "aventura" || genre == "terror" || genre == "fantasia")
	) {
		arrayBooks.push(new Books(title, author, year, genre));
	}
}
*/

const showAllBooks = () => {
  console.log(arrayBooks);
};
showAllBooks();

const allAuthor = (array) => {
  let arrayAuthors = [];

  for (let author in array) {
    arrayAuthors.push(array[author].author);
  }
  return arrayAuthors.sort((a, b) => a - b);
};
console.log(allAuthor(arrayBooks));

//.sort((a, b) => a - b)

const showGender = (array) => {
  let gender = "terror"; //prompt("Ingrese un Género de libro para obtener su información");

  for (let g in array)
    if (array[g].infoGender() == gender) {
      console.log(array[g].infoBooks());
    }
};

showGender(arrayBooks);
