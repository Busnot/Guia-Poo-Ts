// EJERCICIO 3. 
// Crea una clase llamada Canción:
// Atributos: título, género de la canción y un atributo privado que se llame autor.

// Métodos:
// •Crear un constructor que reciba como parámetros el título y género de la canción.
// •Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
// •Crea un método para mostrar los datos de la canción.

class Cancion {
  public titulo: string;
  public genero: string;
  private _autor: string = "";

  // Constructor, que recibe título y género
  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
  }

  // Getter y Setter para autor 
  get autor(): string {
    return this._autor;
  }

  set autor(nombre: string) {
    this._autor = nombre.trim();
  }

  // Método para mostrar datos de la canción
  mostrarDatos(): string {
    const autor = this._autor ? this._autor : "(autor no asignado)";
    return `Título: ${this.titulo}\nGénero: ${this.genero}\nAutor: ${autor}`;
  }
}

//Impresion
const c1 = new Cancion("The First Time", "Pop");
c1.autor = "Damiano David";
console.log(c1.mostrarDatos());
