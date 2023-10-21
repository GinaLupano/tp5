

let juego

  function setup() {
  createCanvas(600, 600);
  juego = new Juego();
}

function draw() {
  background(255,219,246);
  juego.display();
  if (keyIsPressed){
  juego.tecla(keyCode);
  }
  
}
