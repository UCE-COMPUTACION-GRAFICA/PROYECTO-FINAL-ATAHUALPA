import * as THREE from 'three';
//import {scene,torus} from '../Principal';

var torus;

export default class Torus {
  constructor(scene){
    this.scene=scene;
  }
  crear_toro(
    pos_x,
    pos_y,
    pos_z,
    a,
    b,
    c,
    d,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    colort
  ) {
    var geometry = new THREE.TorusGeometry(a, b, c, d);
    /* para ancho, largo, profunsdidad*/
    var material = new THREE.MeshBasicMaterial({
      color: colort
    });

    torus = new THREE.Mesh(geometry, material);

    torus.position.x = pos_x;
    torus.position.y = pos_y;
    torus.position.z = pos_z;

    torus.rotation.x = rot_x;
    torus.rotation.y = rot_y;
    torus.rotation.z = rot_z;

    torus.scale.x = esc_x;
    torus.scale.y = esc_y;
    torus.scale.z = esc_z;

    this.scene.add(torus);
    return torus;
    
  }
}
