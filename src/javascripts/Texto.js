import * as THREE from 'three';
var textMesh;

export default class Texto {
  constructor(scene){
    this.scene=scene;

  }
  crearTexto() {
    // Font with textures applied:
    var chromeTexture = THREE.ImageUtils.loadTexture("texturas/Chrome.png");
    chromeTexture.wrapS = chromeTexture.wrapT = THREE.RepeatWrapping;
    chromeTexture.repeat.set(0.5, 0.5);
    var chromeMaterial = new THREE.MeshBasicMaterial({ map: chromeTexture });
    var lavaTexture = THREE.ImageUtils.loadTexture("texturas/ad.jpg");
    lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
    lavaTexture.repeat.set(0.05, 0.05);
    var lavaMaterial = new THREE.MeshBasicMaterial({ map: lavaTexture });

    var materialArray = [lavaMaterial, chromeMaterial];
    var textGeom = new THREE.TextGeometry("Textures!", {
      size: 30,
      height: 4,
      curveSegments: 3,
      font: "front page neue",
      weight: "bold",
      style: "normal",
      bevelThickness: 2,
      bevelSize: 1,
      bevelEnabled: true,
      material: 0,
      extrudeMaterial: 1
    });
    // font: helvetiker, gentilis, droid sans, droid serif, optimer
    // weight: normal, bold

    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
     textMesh = new THREE.Mesh(textGeom, textMaterial);

    //textGeom.computeBoundingBox();
   // var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;

   // textMesh.position.set(-0.5 * textWidth, 20, 100);
    textMesh.rotation.x = -Math.PI / 4;
    this.scene.add(textMesh);
    return textMesh;
  }
}
