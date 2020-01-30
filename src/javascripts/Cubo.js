import * as THREE from 'three';
import Pileta from './Pileta';
import Bancas from './Bancas';
import Iglesia from './Iglesia';

var darColor=false;
var cubo;

var pi=new Pileta(this.scene);
var b=new Bancas(this.scene);
var i=new Iglesia(this.scene);



export default class Cubo {

  constructor(scene){
    this.scene=scene;
  }
  crear_cubo(
    pos_x,
    pos_y,
    pos_z,
    x,
    z,
    y,
    text,
    esq,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    colorCubo
  ) {
    var geometry = new THREE.BoxGeometry(x, z, y);   

   if(darColor==true){
    var material = new THREE.MeshBasicMaterial({
      color: colorCubo,
      wireframe: esq
    });
   }else{
 var material = new THREE.MeshBasicMaterial({
      map: text,
      side: THREE.DoubleSide,
      wireframe: esq
    });
   }
     
    cubo = new THREE.Mesh(geometry, material);
    cubo.position.x = pos_x;
    cubo.position.y = pos_y;
    cubo.position.z = pos_z;

    cubo.rotation.x = rot_x;
    cubo.rotation.y = rot_y;
    cubo.rotation.z = rot_z;

    cubo.scale.x = esc_x;
    cubo.scale.y = esc_y;
    cubo.scale.z = esc_z;

    //Añade los objetos 3D
    this.scene.add(i.pivotPoint);
    this.scene.add(pi.pil);
    this.scene.add(b.ban);
    this.scene.add(cubo);

    return cubo,darColor=false;

  }
}
