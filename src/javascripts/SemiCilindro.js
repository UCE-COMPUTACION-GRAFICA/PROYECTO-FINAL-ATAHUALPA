import * as THREE from "three";
//import { scene,semiCilindro } from "../Principal";

var semiCilindro;

export default class SemiCilindro {
  constructor(scene){
    this.scene=scene;

  }
  crearSemiCilindro(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    ancho,
    altura,
    text,
    esq
  ) {
    var geometria_cilindro = new THREE.CylinderGeometry(
      ancho,
      ancho,
      altura,
      30,
      30,
      false,
      0,
      3.15
    );

    var material = new THREE.MeshBasicMaterial({
      map: text,
      side: THREE.DoubleSide,
      wireframe: esq
    });

    semiCilindro = new THREE.Mesh(geometria_cilindro, material);

    semiCilindro.position.x = pos_x;
    semiCilindro.position.y = pos_y;
    semiCilindro.position.z = pos_z;

    semiCilindro.rotation.x = rot_x;
    semiCilindro.rotation.y = rot_y;
    semiCilindro.rotation.z = rot_z;

    semiCilindro.scale.x = esc_x;
    semiCilindro.scale.y = esc_y;
    semiCilindro.scale.z = esc_z;

    this.scene.add(semiCilindro);
    return semiCilindro;
  }
}
