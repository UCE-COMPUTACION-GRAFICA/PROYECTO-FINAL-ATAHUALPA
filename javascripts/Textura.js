class Textura {
  crear_texturas(nombre, pasox, pasoy) {
    textura = new THREE.ImageUtils.loadTexture(nombre);
    //repetir la textura figura
    textura.repeat.set(pasox, pasoy);
    //repetir la textura de la figura
    textura.wrapS = textura.wrapT = THREE.RepeatWrapping;
  }
}
