class Esfera {
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
    par
  ) {
    var geometry = new THREE.SphereGeometry(t, par, par);

    var material = new THREE.MeshBasicMaterial({
      map: textura,
      side: THREE.DoubleSide,
      wireframe: esq
    });

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

    scene.add(pivotPoint);
    scene.add(arbl);
    scene.add(flr);

    scene.add(sphere);
    return sphere;
  }
}
