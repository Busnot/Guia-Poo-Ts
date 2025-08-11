// EJERCICIO 1. 
// Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
// obtenga el título, color y fuente de la página, el segundo método que indique como desea que
// aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
// propiedades.

type Alineacion = 'izquierda' | 'derecha' | 'centrado';

class CabeceraPagina {
  private titulo: string = '';
  private color: string = '#000000';
  private fuente: string = 'Arial';
  private alineacion: Alineacion = 'izquierda';

  // 1) Método para configurar título, color y fuente
  configurar(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  // 2) Método para indicar cómo aparece el título 
  setAlineacion(posicion: Alineacion): void {
    this.alineacion = posicion;
  }

  // 3) Método que imprime todas las propiedades
  imprimir(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }

}

//Imprimiendo 
const cabecera = new CabeceraPagina();
cabecera.configurar('Mi Página', '#1e90ff', 'Inter');
cabecera.setAlineacion('centrado');
cabecera.imprimir();

