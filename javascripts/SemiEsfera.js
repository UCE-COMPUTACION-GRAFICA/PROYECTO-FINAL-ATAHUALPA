class SemiEsfera {
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
    text,
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
        map: text,
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

    scene.add(lmp);

    darColor = false;
    scene.add(semisphere);
  }
}
