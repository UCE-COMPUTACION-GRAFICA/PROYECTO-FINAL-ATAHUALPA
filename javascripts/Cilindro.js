class Cilindro

 {

 
crearCilindro(pos_x,
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
  esq,
  colorCilindro){

 var geometria_cilindro = new THREE.CylinderGeometry(
    ancho,
    ancho,
   altura,
    30,
    30,
    false
    
  );





  if(darColor==true){
  var material = new THREE.MeshBasicMaterial({
      color: colorCilindro,
      wireframe: esq
    });
   }else{

    var material = new THREE.MeshBasicMaterial({
      map: text,
      side: THREE.DoubleSide,
      wireframe: esq
    });
   }

  cilindro = new THREE.Mesh(geometria_cilindro, material);

  cilindro.position.x = pos_x;
  cilindro.position.y = pos_y;
  cilindro.position.z = pos_z;

  cilindro.rotation.x = rot_x;
  cilindro.rotation.y = rot_y;
  cilindro.rotation.z = rot_z;

  cilindro.scale.x = esc_x;
  cilindro.scale.y = esc_y;
  cilindro.scale.z = esc_z;

scene.add(flr);
  scene.add(arbl);
  scene.add(lmp);
  scene.add(cilindro);
  darColor=false;
}
  
}
