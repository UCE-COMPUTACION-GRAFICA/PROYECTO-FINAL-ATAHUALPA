import * as THREE from 'three';
import Arbol from './Arbol';
import Parque from './Parque';
import Iglesia from './Iglesia';

var sphere;
var a=new Arbol(this.scene);
var p=new Parque(this.scene);
var i=new Iglesia(this.scene);

var darColor=false;

export default class Esfera {

  constructor(scene){
    this.scene=scene;
  }
  crear_esfera(
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
    t,
    par,
    colorEsfera
  ) {
    var geometry = new THREE.SphereGeometry(t, par, par);

    if(darColor==true){
      var material = new THREE.MeshBasicMaterial({
        color: colorEsfera,
        wireframe: esq
      });
     }else{
      var material = new THREE.MeshBasicMaterial({
        map: textura,
        side: THREE.DoubleSide,
        wireframe: esq
      });
     }

    sphere = new THREE.Mesh(geometry, material);

    sphere.position.x = pos_x;
    sphere.position.y = pos_y;
    sphere.position.z = pos_z;

    sphere.rotation.x = rot_x;
    sphere.rotation.y = rot_y;
    sphere.rotation.z = rot_z;

    sphere.scale.x = esc_x;
    sphere.scale.y = esc_y;
    sphere.scale.z = esc_z;

    this.scene.add(i.pivotPoint);
    this.scene.add(a.arbl);
    this.scene.add(p.flr);    
    this.scene.add(sphere);

    return sphere, darColor=false;

  }
}
