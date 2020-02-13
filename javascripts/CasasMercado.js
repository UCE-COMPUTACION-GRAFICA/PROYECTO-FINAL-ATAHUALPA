var ca0 = new THREE.Object3D();
var ca1 = new THREE.Object3D();
var ca2 = new THREE.Object3D();
var ca3 = new THREE.Object3D();
var ca4 = new THREE.Object3D();
var ca5 = new THREE.Object3D();
var ca6 = new THREE.Object3D();
var ca7 = new THREE.Object3D();
var ca8 = new THREE.Object3D();
var ca9 = new THREE.Object3D();
var ca10 = new THREE.Object3D();
var ca11 = new THREE.Object3D();
var ca12 = new THREE.Object3D();
var pc = new THREE.Object3D();

var casas = new THREE.Object3D();
class CasasMercado {
  crearCasas() {
    //suelo

    t.crear_texturas("texturas/Chrome.png ", 1, 1);
    cu.crear_cubo(-1000, 5, 490, 700, 7, 900, textura, false, 0, 0, 0, 1, 1, 1);

    this.casa1(0, 0, 0, 0, 0, 0, 1, 1, 1, 0xf5f6ce, 0xf3f781, 0xffffff);
    ca1 = ca0;
    casas.add(ca0);

    ca.casa5(-80, 5, 1060, 0, -Math.PI, 0, 0.5, 0.8, 0.7, 0xf5d0a9, 0xffffff);
    c5 = ca2;
    casas.add(ca2);

    ca.casa4(
      -100,
      5,
      800,
      0,
      -Math.PI,
      0,
      0.5,
      1,
      0.8,
      0xf5f6ce,
      0xb18904,
      0xf5f6ce
    );
    c4 = ca3;
    casas.add(ca3);
//baño
    ca.casa5(-110, 5, 730, 0, -Math.PI, 0, 0.5, 0.8, 0.7, 0xf5d0a9, 0xffffff);
    c5 = ca4;
    casas.add(ca4);

    //asas atras
    ca.casa5(-695, 5, 1100, 0, -Math.PI, 0, 0.15, 0.8, 1.2, 0xf5d0a9, 0xffffff);
    c5 = ca10;
    casas.add(ca10);

//asas atras final
    ca.casa5(-500, 5, 1050, 0, -Math.PI, 0, 0.5, 0.8, 1.3, 0xf5d0a9, 0xffffff);
    c5 = ca9;
    casas.add(ca9);

    //casas para atras cooperativa
    ca.casa6(
      -1250,
      0,
      2170,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      0.7,
      0x088a29,
      0x088a29,
      0xe0f8e6
    );
    c6 = ca5;
    casas.add(ca5);
//parte del medio
    this.parteCope(
      -1500,
      0,
      1750,
      0,
      Math.PI / 2,
      0,
      0.7,
      0.8,
      0.7,
      0x088a29,
      0xe0f8e6
    );
    pc = ca7;
    casas.add(ca7);

    ca.casa6(
      -1500,
      0,
      2170,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      0.7,
      0x088a29,
      0x088a29,
      0xe0f8e6
    );
    c6 = ca6;
    casas.add(ca6);

    //casa que rellena

    ca.casa5(
      -1240,
      0,
      1280,
      0,
      Math.PI / 2,
      0,
      0.3,
      0.9,
      0.67,
      0xf5da81,
      0xffffff
    );
    c5 = ca8;
    casas.add(ca8);

    this.gradas();

    //junta parroquial encima de las gradas
    //asas atras final
    ca.casa5(-500, 10, -670, 0, -Math.PI/2, 0, 0.5, 0.8, 1.3, 0xFACC2E, 0xffffff);
    c5 = ca11;
    casas.add(ca11);

    ca.casa5(-400, 10, -670, 0, -Math.PI/2, 0, 0.5, 1, 1, 0x0174DF, 0xffffff);
    c5 = ca12;
    casas.add(ca12);
    
  }

  //casas de abajo para arriba
  //primera fila

  casa1(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    colorA,
    colorB,
    colorP
  ) {
    //primer piso
    darColor = true;
    cu.crear_cubo(
      -750,
      40,
      815,
      100,
      100,
      150,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      colorA
    );
    ca1.add(cubo);

    //ventana
    t.crear_texturas("texturas/ventanaVidrio.jpg", 1, 1);
    cu.crear_cubo(-700, 70, 780, 5, 30, 50, textura, false, 0, 0, 0, 1, 1, 1);
    ca1.add(cubo);
    //puerta

    t.crear_texturas("texturas/puertaMadera2.jpg", 1, 1);
    cu.crear_cubo(-700, 25, 835, 5, 50, 30, textura, false, 0, 0, 0, 1, 1, 1);
    ca1.add(cubo);

    //segundo piso
    darColor = true;
    cu.crear_cubo(
      -750,
      130,
      815,
      110,
      80,
      150,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      colorB
    );
    ca1.add(cubo);

    //ventana
    t.crear_texturas("texturas/ventanaVidrio.jpg", 1, 1);
    cu.crear_cubo(-695, 140, 800, 5, 30, 60, textura, false, 0, 0, 0, 1, 1, 1);
    ca1.add(cubo);

    //terraza
    darColor = true;
    cu.crear_cubo(
      -750,
      180,
      815,
      110,
      20,
      160,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      colorP
    );
    ca1.add(cubo);

    ca1.position.x = pos_x;
    ca1.position.y = pos_y;
    ca1.position.z = pos_z;

    ca1.rotation.x = rot_x;
    ca1.rotation.y = rot_y;
    ca1.rotation.z = rot_z;

    ca1.scale.x = esc_x;
    ca1.scale.y = esc_y;
    ca1.scale.z = esc_z;

    scene.add(ca1);
  }

  parteCope(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    colorA,
    colorT
  ) {
    //BARRA ARRIBA
    darColor = true;
    cu.crear_cubo(
      1490,
      115,
      553,
      400,
      30,
      210,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      colorA
    );
    pc.add(cubo);

    //BARRA ABAJO
    darColor = true;
    cu.crear_cubo(
      1510,
      7,
      550,
      400,
      20,
      200,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      colorA
    );
    pc.add(cubo);

    darColor = true;
    cu.crear_cubo(
      1510,
      70,
      550,
      400,
      100,
      200,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      colorT
    );
    pc.add(cubo);

    //puertas

    t.crear_texturas("texturas/lanford.jfif", 1, 1);
    cu.crear_cubo(1315, 30, 527, 20, 80, 100, textura, false, 0, 0, 0, 1, 1, 1);
    pc.add(cubo);

    //ventanaS

    pc.position.x = pos_x;
    pc.position.y = pos_y;
    pc.position.z = pos_z;

    pc.rotation.x = rot_x;
    pc.rotation.y = rot_y;
    pc.rotation.z = rot_z;

    pc.scale.x = esc_x;
    pc.scale.y = esc_y;
    pc.scale.z = esc_z;

    scene.add(pc);
  }

  gradas( pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z){


        darColor=true;
        cu.crear_cubo(
            -1050,
            7,
            100,
            590,
            7,
            200,
            null,
            false,
            0,
            0,
            0,
            1,
            1,
            1,
            0xBDBDBD
            
          );

        t.crear_texturas("texturas/piedra.webp", 2, 2);
        cu.crear_cubo(
            -1050,
            50,
            200,
            500,
            50,
            50,
            textura,
            false,
            0,
            0,
            0,
            1,
            1,
            1,
            
          );

          t.crear_texturas("texturas/piedra.webp", 2, 2);
        cu.crear_cubo(
            -550,
            50,
            200,
            50,
            50,
            500,
            textura,
            false,
            0,
            0,
            0,
            1,
            1,
            1,
            
          );
        



  }
}
