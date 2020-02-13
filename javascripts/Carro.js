
var auto= new THREE.Object3D();
var auto1= new THREE.Object3D();

class Carro{

crearCarro(){
    this.dibujarCarro(1500, 0, 200, 0, -Math.PI/2, 0, 1, 1, 1, 0xdf01d7, 0xff00ff);
}


dibujarCarro(pos_x,pos_y,pos_z,rot_x,rot_y,rot_z,esc_x,esc_y,esc_z,colorA, colorB){
    darColor = true;
    cu.crear_cubo(
      900,
      40,
      570,
      70,
      60,
      80,
      null,
      false,
      0,
      -Math.PI/2,
      0,
      1,
      1,
      1,
      colorA
    ); 
    auto.add(cubo);

    darColor = true;
    cu.crear_cubo(
      900,
      40,
      610,
      50,
      50,
      50,
      null,
      false,
      0,
      -Math.PI/2,
      0,
      1,
      1,
      1,
      colorB
    ); 
    auto.add(cubo);

//atras




    t.crear_texturas("texturas/negro.jpg",1,1);
    e.crear_esfera(890, 7, 610, 0, -Math.PI/2, 0, 1, 1, 1, textura, false, 10, 20, 20);
    auto.add(sphere);
    
    e.crear_esfera(910, 7, 610, 0, -Math.PI/2, 0, 1, 1, 1,textura, false, 10, 20, 20);
    auto.add(sphere);



    e.crear_esfera(895, 7, 540, 0, -Math.PI/2, 0, 1, 1, 1, textura, false, 10, 20, 20);
    auto.add(sphere);
    
    e.crear_esfera(925, 7, 540, 0, -Math.PI/2, 0, 1, 1, 1,textura, false, 10, 20, 20);
    auto.add(sphere);



    
    auto.position.x = pos_x;
    auto.position.y = pos_y;
    auto.position.z = pos_z;

    auto.rotation.x = rot_x;
    auto.rotation.y = rot_y;
    auto.rotation.z = rot_z;

    auto.scale.x = esc_x;
    auto.scale.y = esc_y;
    auto.scale.z = esc_z;

    scene.add(auto);
    return auto;

    
}

}