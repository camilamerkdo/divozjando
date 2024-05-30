// Arreglos para almacenar las imágenes
/*let manchasChiquitas = [];
let manchasGrandes = [];
let indiceImagenActual = 0; // Índice de la imagen actual
let tiempoEspera = 2000; // 2 segundos (en milisegundos)
let conteoDibujos = 0; // Contador de dibujos mostrados

function preload() {
  // Cargar imágenes chiquitas
  for (let i = 1; i <= 2; i++) {
    manchasChiquitas.push(loadImage(`data/manchachica0${i}.png`));
  }
  // Cargar imágenes grandes
  for (let i = 1; i <= 2; i++) {
    manchasGrandes.push(loadImage(`data/manchagrande0${i}.png`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  // Dibujar la primera imagen (chiquita y grande)
  image(manchasChiquitas[indiceImagenActual], mouseX, mouseY);
  image(manchasGrandes[indiceImagenActual], mouseX + 50, mouseY + 50); // Ajusta la posición

  // temporizador para cambiar la imagen
  setTimeout(cambiarImagen, tiempoEspera);
}

function draw() {
  // Noseqponerle
}

function cambiarImagen() {
  // Cambiar al siguiente índice de imagen
  indiceImagenActual = (indiceImagenActual + 1) % manchasChiquitas.length;

  // Dibujar la nueva imagen (chiquita y grande)
  //background(220); // Limpiar el fondo
  image(manchasChiquitas[indiceImagenActual], mouseX, mouseY);
  image(manchasGrandes[indiceImagenActual], mouseX + 50, mouseY + 50); // Ajusta la posición

  // Incrementar el contador de dibujos
  conteoDibujos++;

  // Verificar si se han mostrado 10 veces
  if (conteoDibujos < 10) {
    // Configurar el próximo cambio de imagen
    setTimeout(cambiarImagen, tiempoEspera);
  }
}
/*/

// Arreglos para almacenar las imágenes
let manchasChiquitas = [];
let manchasGrandes = [];
let indiceImagenActual = 0; // Índice de la imagen actual
let tiempoEspera = 2000; // 2 segundos (en milisegundos)
let conteoDibujos = 0; // Contador de dibujos mostrados

function preload() {
  // Cargar imágenes chiquitas
  for (let i = 1; i <= 2; i++) {
    manchasChiquitas.push(loadImage(`data/manchachica0${i}.png`));
  }
  // Cargar imágenes grandes
  for (let i = 1; i <= 2; i++) {
    manchasGrandes.push(loadImage(`data/manchagrande0${i}.png`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  // Configurar el temporizador para cambiar la imagen
  setTimeout(cambiarImagen, tiempoEspera);
}

function draw() {
  // No es necesario dibujar continuamente en este ejemplo
}

function cambiarImagen() {
  // Cambiar al siguiente índice de imagen
  indiceImagenActual = (indiceImagenActual + 1) % manchasChiquitas.length;

  // Dibujar la nueva imagen (chiquita y grande)
  //background(220); // Limpiar el fondo
  drawRotatedImage(manchasChiquitas[indiceImagenActual], mouseX, mouseY, millis() / 1000); // Rotación basada en el tiempo
  drawRotatedImage(manchasGrandes[indiceImagenActual], mouseX + 50, mouseY + 50, millis() / 1000 + PI / 4); // Ajusta la posición y el ángulo

  // Incrementar el contador de dibujos
  conteoDibujos++;

  // Verificar si se han mostrado 10 veces
  if (conteoDibujos < 10) {
    // Configurar el próximo cambio de imagen
    setTimeout(cambiarImagen, tiempoEspera);
  }
}

function drawRotatedImage(img, x, y, angle) {
  push(); // Guardar la configuración actual
  translate(x, y); // Mover al punto de dibujo
  rotate(angle); // Rotar según el ángulo
  imageMode(CENTER);
  image(img, 0, 0); // Dibujar la imagen
  pop(); // Restaurar la configuración original
}


