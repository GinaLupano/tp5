
class Juego {
  constructor() {
    this.i = new Imagenes ();
    this.personaje = new Personaje ();
    this.contador = new Contador ();
    this.libros = [];
    for (let i = 0; i < 100; i++) {
      this.libros [i] = new Libro()
    }
    this.seg = 0;
  }

  display() {
    if ( frameCount % 60 === 0) {
      this.seg ++;
    }
    if (this.seg < 10) {
      this.i.Instrucciones();
    } else {


      for (let i = 0; i < 100; i++) {
        this.libros [i] .dibujar();
      }
      this.personaje.dibujar();
      this.agarrar();
      this.contador.dibujarTiempo();
      this.contador.dibujarLibrosGuardados();
    }
    if (this.personaje.perder === true){
      this.i.Perdiste();
    }
    if(this.personaje.victorioso === true){
      this.i.Ganaste();
    }
  }
  
  victoria (){
    if (this.contador.victoria()){
      this.personaje.victorioso = true;
    }
  }
  
  fracasar (){
    if (this.contador.perder()){
      this.personaje.perder = true;
    }
  }


  tecla(keyCode) {
    if  (keyCode === RIGHT_ARROW) {
      this.personaje.Derecha();
    } else if (keyCode ===LEFT_ARROW) {
      this.personaje.Izquierda();
    } else if (keyCode === UP_ARROW) {
      this.personaje.Arriba();
    } else if (keyCode === DOWN_ARROW) {
      this.personaje.Abajo();
    }
  }

  zonaAgarrar (px, py, lx, ly) {
    return lx + 30 > px && lx < px + 35 && ly + 30 > py && ly < py + 40;
  }

  agarrar () {
    for (let i = 0; i < 100; i++) {
      if (this.zonaAgarrar (this.personaje.posX, this.personaje.posY, this.libros[i].posX, this.libros[i].posY) && this.libros[i].activo === true) {
        this.libros[i].activo = false;
        this.contador.sumaLibro();
      }
    }
  }
}
