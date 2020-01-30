import * as THREE from 'three';
var loader=new GLTFLoader();
var modelo;

export default class Modelo3D {
  constructor(scene){
    this.scene=scene;

  }
  cargarModelo3D(
    direccion,
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z
  ) {
    loader.load(
      direccion,
      function(gltf) {
        modelo = gltf.scene;

        console.log(gltf);
        modelo = gltf.scene;
        console.log(modelo.children[0]);
        modelo.children[0].material = new THREE.MeshLambertMaterial();

        modelo.position.x = pos_x;
        modelo.position.y = pos_y;
        modelo.position.z = pos_z;

        modelo.scale.x = esc_x;
        modelo.scale.y = esc_y;
        modelo.scale.z = esc_z;

        this.scene.add(modelo);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
  }
}
