class Cubo {

  
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
    /* para ancho, largo, profunsdidad*/

    
     
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
   //cubo= new Physijs.BoxMesh(geometry,material);
  /* cubo.addEventListener( 'collision', function( arbol, relative_velocity, relative_rotation, contact_normal ) {
    
    
    // `this` has collided with `other_object` with an impact speed of `relative_velocity` and a rotational force of `relative_rotation` and at normal `contact_normal`
});*/
    //
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
    scene.add(pivotPoint);
    scene.add(pil);
    scene.add(ban);
    scene.add(atahualpa);
    scene.add(tu);
    scene.add(casas);
    scene.add(cubo);
    
    
    darColor=false;
  }
}
