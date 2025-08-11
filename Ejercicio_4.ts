// EJERCICIO 4. 
// Crea una clase llamada Cuenta y va contener lo siguiente:

// Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.

// Métodos:
// •Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
// número de cuenta.
// •Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
// condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
// depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
// correctamente y la cantidad depositada.
// •Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
// que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
// cuanto le queda en su cuenta.

// Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
// si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
// •Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
// •Define un objeto de la clase Cuenta y llama sus métodos.


type TipoCuenta = 'Ahorro' | 'Corriente' | 'Crédito' | string;

class Cuenta {
  public nombre: string;
  private cantidad: number;       
  public tipoCuenta: TipoCuenta;
  public numeroCuenta: string;

  constructor(
    nombre: string,
    cantidad: number,
    tipoCuenta: TipoCuenta,
    numeroCuenta: string
  ) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  // Validando  que el depósito sea >= 5.00
  depositar(valor: number): void {
    if (valor < 5) {
      console.log('El valor a depositar debe ser mayor a $5.00');
      return;
    }
    this.cantidad += valor;
    console.log(`Depósito realizado: $${valor.toFixed(2)}. Saldo: $${this.cantidad.toFixed(2)}.`);
  }

  // Validando que el retiro sea >= 5.00 y que haya fondos
  retirar(valor: number): void {
    if (this.cantidad <= 0) {
      console.log('No hay nada en la cuenta.');
      return;
    }
    if (valor < 5) {
      console.log('El retiro debe ser mayor a $5.00');
      return;
    }
    if (valor > this.cantidad) {
      console.log(`Fondos insuficientes. Saldo disponible: $${this.cantidad.toFixed(2)}.`);
      return;
    }
    this.cantidad -= valor;
    console.log(`Retiro realizado: $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}.`);
  }

  // Mostrando Tipo de cuenta y numero 
  mostrarDatos(): string {
    return `Nombre: ${this.nombre}\nTipo de cuenta: ${this.tipoCuenta}\nNúmero de cuenta: ${this.numeroCuenta}`;
  }
}


const cta = new Cuenta('Roberto Argueta', 26, 'Ahorro', '001-123456-7');
console.log(cta.mostrarDatos());
cta.depositar(3);   
cta.depositar(25);  
cta.retirar(4);     
cta.retirar(15);    
cta.retirar(100);   
