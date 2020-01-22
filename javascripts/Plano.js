class Plano {
  crear_plano(pos_x, pos_y, pos_z, ancho, largo, rotx, roty, text) {
    //geometria plano
    plano = new THREE.PlaneGeometry(ancho, largo, 10, 10);
    //material Y textura
    var material_plano = new THREE.MeshBasicMaterial({
      map: text,
      side: THREE.DoubleSide
    });
    //plano territorio
    var territorio = new THREE.Mesh(plano, material_plano);

    territorio.position.x = pos_x;
    territorio.position.y = pos_y;
    territorio.position.z = pos_z;

    territorio.rotation.y = roty;
    territorio.rotation.x = rotx;

    scene.add(territorio);
  }
}
