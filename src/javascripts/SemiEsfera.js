import * as THREE from 'three';
import {lmp} from './Lamparas';
//import {darColor,scene,lmp} from '../Principal';


var darColor=false;
var semisphere;

export default class SemiEsfera {
  constructor(scene){
    this.scene=scene;

  }
  cargar_semiesfera(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    textura,
    esq,
    radio,
    ws,
    hs,
    ps,
    pl,
    ts,
    tl,
    colorSemiEsfera
  ) {
   

    var geometry = new THREE.SphereGeometry(radio, ws, hs, ps, pl, ts, tl);

    if (darColor == true) {
      var material = new THREE.MeshBasicMaterial({
        color: colorSemiEsfera,
        wireframe: esq
      });
    } else {
      var material = new THREE.MeshBasicMaterial({
        map: textura,
        side: THREE.DoubleSide,
        wireframe: esq
      });
    }

    semisphere = new THREE.Mesh(geometry, material);

    semisphere.position.x = pos_x;
    semisphere.position.y = pos_y;
    semisphere.position.z = pos_z;

    semisphere.rotation.x = rot_x;
    semisphere.rotation.y = rot_y;
    semisphere.rotation.z = rot_z;

    semisphere.scale.x = esc_x;
    semisphere.scale.y = esc_y;
    semisphere.scale.z = esc_z;

    this.scene.add(lmp);
    this.scene.add(semisphere);
     return semisphere, 
     darColor = false;
  }
}
