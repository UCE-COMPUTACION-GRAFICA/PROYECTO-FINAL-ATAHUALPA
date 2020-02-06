loader = new THREE.GLTFLoader();
class Modelo3D {
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
        arbol = gltf.scene;

        console.log(gltf);
        arbol = gltf.scene;
        console.log(arbol.children[0]);
        arbol.children[0].material = new THREE.MeshLambertMaterial();

        arbol.position.x = pos_x;
        arbol.position.y = pos_y;
        arbol.position.z = pos_z;

        arbol.rotation.x = rot_x;
        arbol.rotation.y = rot_y;
        arbol.rotation.z = rot_z;

        arbol.scale.x = esc_x;
        arbol.scale.y = esc_y;
        arbol.scale.z = esc_z;

        scene.add(arbol);
        return arbol;
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
  }
}
