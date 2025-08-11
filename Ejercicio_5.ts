// EJERCICIO 5. 
// Crear una clase abstracta Persona y va contener lo siguiente:
// Atributos: nombre, apellido, dirección, teléfono y edad.
// Métodos:
// •Crear un método constructor para recibir los datos.
// •Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
// •Crea un método para mostrar todos los datos personales (será el método abstracto).
// •Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
// •En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
// •La clase Empleado va heredar de la clase Persona.
// •Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.

abstract class Persona {
  public nombre: string;
  public apellido: string;
  public direccion: string;
  public telefono: string;
  public edad: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  // Metodo para ver  si es mayor de edad
  verificarMayorEdad(): void {
    if (this.edad >= 18) {
      console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} ${this.apellido} es menor de edad.`);
    }
  }

  // Método abstracto para mostrar datos personales
  abstract mostrarDatos(): void;
}

class Empleado extends Persona {
  public sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number,
    sueldo: number
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  // Método para el sueldo
  cargarSueldo(monto: number): void {
    this.sueldo = monto;
  }

  // Método de impresion de sueldo
  imprimirSueldo(): void {
    console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
  }

  // Implementando el método abstracto
  mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
  }
}


const emp = new Empleado(
  'Roberto',
  'Arce',
  'Av. Central, San Salvador #123',
  '5555-1234',
  25,
  900
);

emp.mostrarDatos();
emp.verificarMayorEdad();
emp.imprimirSueldo();
emp.cargarSueldo(1200);
emp.imprimirSueldo();
