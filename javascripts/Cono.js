class Cono {

  
    crear_cono(
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
      colorCono
    ) {
  
  
      var geometry = new THREE.ConeGeometry(x, z, y);
      /* para ancho, largo, profunsdidad*/
  
      
       
     if(darColor==true){
      var material = new THREE.MeshBasicMaterial({
        color: colorCono,
        wireframe: esq
      });
     }else{
  
      var material = new THREE.MeshBasicMaterial({
        map: text,
        side: THREE.DoubleSide,
        wireframe: esq
      });
     }
       
     
     cono = new THREE.Mesh(geometry, material);
     //cubo= new Physijs.BoxMesh(geometry,material);
    /* cubo.addEventListener( 'collision', function( arbol, relative_velocity, relative_rotation, contact_normal ) {
      
      
      // `this` has collided with `other_object` with an impact speed of `relative_velocity` and a rotational force of `relative_rotation` and at normal `contact_normal`
  });*/
      //
      cono.position.x = pos_x;
      cono.position.y = pos_y;
      cono.position.z = pos_z;
  
      cono.rotation.x = rot_x;
      cono.rotation.y = rot_y;
      cono.rotation.z = rot_z;
  
      cono.scale.x = esc_x;
      cono.scale.y = esc_y;
      cono.scale.z = esc_z;
  
     
      scene.add(cono);
      
      
      darColor=false;
    }
  }
  