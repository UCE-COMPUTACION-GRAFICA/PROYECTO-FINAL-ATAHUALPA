import * as THREE from "three";
var terriorio;
export default class Plano {

  constructor(scene){
this.scene=scene;
  }
  

  crear_plano(pos_x, pos_y, pos_z, ancho, largo, rotx, roty, text) {
    //geometria plano
    var plano = new THREE.PlaneGeometry(ancho, largo, 10, 10);
    //material Y textura
    var material_plano = new THREE.MeshBasicMaterial({
      map: text,
      side: THREE.DoubleSide
    });
    //plano territorio
    territorio = new THREE.Mesh(plano, material_plano);

    territorio.position.x = pos_x;
    territorio.position.y = pos_y;
    territorio.position.z = pos_z;

    territorio.rotation.y = roty;
    territorio.rotation.x = rotx;

    this.scene.add(territorio);
    return terriorio;
  }
}
