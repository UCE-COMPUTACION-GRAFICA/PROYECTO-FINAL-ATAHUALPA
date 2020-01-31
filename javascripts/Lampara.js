 //las diferentes lamparas
 lmp = new THREE.Object3D();
 lmp1 = new THREE.Object3D();
 lmp2 = new THREE.Object3D();
 lmp3 = new THREE.Object3D();
 lmp4 = new THREE.Object3D();
 lmp5 = new THREE.Object3D();
 lmp6 = new THREE.Object3D();
 lmp7 = new THREE.Object3D();
 lmp8 = new THREE.Object3D();
 lmp9 = new THREE.Object3D();
 lmp10 = new THREE.Object3D();

 lmp11 = new THREE.Object3D();
 lmp12 = new THREE.Object3D();
 lmp13 = new THREE.Object3D();
 lmp14 = new THREE.Object3D();
 lmp15 = new THREE.Object3D();

 lmp16 = new THREE.Object3D();
 lmp17 = new THREE.Object3D();
 lmp18 = new THREE.Object3D();

 lmp19 = new THREE.Object3D();
 lmp20 = new THREE.Object3D();
 lmp21 = new THREE.Object3D();
 lmp22 = new THREE.Object3D();
 lmp23 = new THREE.Object3D();

 lmp24 = new THREE.Object3D();
 lmp25 = new THREE.Object3D();
 lmp26 = new THREE.Object3D();
 lmp27 = new THREE.Object3D();
 lmp28 = new THREE.Object3D();
 lmp29 = new THREE.Object3D();
 lmp30 = new THREE.Object3D();
 lmp31 = new THREE.Object3D();
 lmp32 = new THREE.Object3D();
 lmp33 = new THREE.Object3D();
 lmp34 = new THREE.Object3D();
class Lamparas {
  crearLamparas() {

//las 4 primeras en forma en fila 
    lamp.figurasLampara(0,0,110,0,0,0,1,1,1);
    lmp=lmp1;
    lamp.figurasLampara(140,0,110,0,0,0,1,1,1);
    lmp=lmp2;
    lamp.figurasLampara(285,0,120,0,0,0,1,1,1);
    lmp=lmp3;
    lamp.figurasLampara(-150,0,120,0,0,0,1,1,1);

    //lampara mas abajo en columna a la derecha
    lmp=lmp4;
    lamp.figurasLampara(285,0,210,0,0,0,1,1,1);
    lmp=lmp5;
    lamp.figurasLampara(285,0,350,0,0,0,1,1,1);
    lmp=lmp6;
    lamp.figurasLampara(285,0,460,0,0,0,1,1,1);

    //del medio
    lmp=lmp7;
    lamp.figurasLampara(70,0,400,0,0,0,1,1,1);
    lmp=lmp18;
    lamp.figurasLampara(70,0,220,0,0,0,1,1,1);

    //otro lado izquierda de abajo hacia arriba
    lmp=lmp8;
    lamp.figurasLampara(-150,0,460,0,0,0,1,1,1);
    
    lmp=lmp9;
    lamp.figurasLampara(-150,0,350,0,0,0,1,1,1);

    lmp=lmp29;
    lamp.figurasLampara(-150,0,200,0,0,0,1,1,1);


//otro lado de mas  izquierda de arriba hacia abajo
    lmp=lmp24;
    lamp.figurasLampara(-385,0,120,0,0,0,1,1,1);

    lmp=lmp25;
    lamp.figurasLampara(-385,0,255,0,0,0,1,1,1);

    lmp=lmp26;
    lamp.figurasLampara(-385,0,350,0,0,0,1,1,1);

    lmp=lmp27;
    lamp.figurasLampara(-385,0,570,0,0,0,1,1,1);

    lmp=lmp28;
    lamp.figurasLampara(-385,0,650,0,0,0,1,1,1);

    
    //lamparas abajo derecha de arriba hacia abajo y luego de izquierda a derecha

    lmp=lmp10;
    lamp.figurasLampara(110,0,520,0,0,0,1,1,1);
    lmp=lmp19;
    lamp.figurasLampara(110,0,700,0,0,0,1,1,1);
    lmp=lmp20;
    lamp.figurasLampara(190,0,735,0,0,0,1,1,1);
    lmp=lmp23;
    lamp.figurasLampara(460,0,735,0,0,0,1,1,1);

    //lamparas abajo izquierda de arriba hacia abajo

    lmp=lmp21;
    lamp.figurasLampara(20,0,610,0,0,0,1,1,1);

    lmp=lmp22;
    lamp.figurasLampara(20,0,700,0,0,0,1,1,1);

    lmp=lmp30;
    lamp.figurasLampara(-100,0,735,0,0,0,1,1,1);


//lamparas mas a la derecha en columna de abajo hacia arriba
lmp=lmp11;
lamp.figurasLampara(520,0,660,0,0,0,1,1,1);
lmp=lmp12;
lamp.figurasLampara(520,0,500,0,0,0,1,1,1);
lmp=lmp13;
lamp.figurasLampara(520,0,350,0,0,0,1,1,1);
lmp=lmp14;
lamp.figurasLampara(520,0,235,0,0,0,1,1,1);
lmp=lmp15;
lamp.figurasLampara(520,0,120,0,0,0,1,1,1);
    
//lampara lateral a la derecha
lmp=lmp16;
lamp.figurasLampara(315,0,600,0,0,0,1,1,1);


//lampara lateral de la izquierda

lmp=lmp32;
lamp.figurasLampara(-85,0,520,0,0,0,1,1,1);

lmp=lmp33;
lamp.figurasLampara(-200,0,620,0,0,0,1,1,1);

lmp=lmp34;
lamp.figurasLampara(-330,0,730,0,0,0,1,1,1);



//lampara horizontal de la derecha
lmp=lmp17;
lamp.figurasLampara(420,0,255,0,0,0,1,1,1);

  }

  figurasLampara(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    //cilindro, correspondiente al palo principal
    darColor = true;
    ci.crearCilindro(100, 50, 100, 0, 0, 0, 1, 1, 1, 2, 100, 2, false, 0x585858);
    lmp.add(cilindro);

    darColor = true;
    //semiesfera
    ses.cargar_semiesfera(
      100,
      107,
      100,
      Math.PI,
      0,
      0,
      1,
      1.7,
      1,
      null,
      false,
      10,
      8,
      6,
      0,
      6.3,
      0,
      1.1,
      0xFFFFFF
    );
    

    lmp.add(semisphere);
    //cilindro tapa

    darColor = true;
    ci.crearCilindro(
      100,
      100,
      100,
      0,
      0,
      0,
      1,
      1,
      1,
    10,
      2,
      10,
      false,
      0x6e6e6e
    );
    lmp.add(cilindro);


    lmp.position.x = pos_x;
    lmp.position.y = pos_y;
    lmp.position.z = pos_z;

    lmp.rotation.x = rot_x;
    lmp.rotation.y = rot_y;
    lmp.rotation.z = rot_z;

    lmp.scale.x = esc_x;
    lmp.scale.y = esc_y;
    lmp.scale.z = esc_z;

    

  }


luces(){
  //Luz del ambiente


var luzScene = new THREE.HemisphereLight(0xFFFFFF, 0x0808dd, 1000);
luzScene.target=lmp;
luzScene.position.y=50;
luzScene.position.x=120;
luzScene.position.z=100;
scene.add(luzScene);
}


}
