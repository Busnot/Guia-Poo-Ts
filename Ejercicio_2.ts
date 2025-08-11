// EJERCICIO 2: 
// Crear una clase Calculadora que contendrá los siguientes métodos:
// •Sumar
// •Restar
// •Multiplicar
// •Dividir
// •Potencia
// •Factorial

//Clase para suma 
class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }

//Clase para resta   
  restar(a: number, b: number): number {
    return a - b;
  }

//Clase para multiplicacion  
  multiplicar(a: number, b: number): number {
    return a * b;
  }

//Clase para divicion 
  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero");
    }
    return a / b;
  }

//Clase para potencia
  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

//Clase para numero factorial  
  factorial(n: number): number {
    if (n < 0) throw new Error("No existe factorial de números negativos");
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

//Imprimiendo 
const calc = new Calculadora();

console.log("Suma:", calc.sumar(5, 3));          
console.log("Resta:", calc.restar(5, 3));         
console.log("Multiplicación:", calc.multiplicar(5, 3)); 
console.log("División:", calc.dividir(10, 2));    
console.log("Potencia:", calc.potencia(2, 3));   
console.log("Factorial:", calc.factorial(5));    
