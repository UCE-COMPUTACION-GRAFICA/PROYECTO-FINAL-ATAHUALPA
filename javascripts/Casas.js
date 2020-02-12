var c1 = new THREE.Object3D();
var c2 = new THREE.Object3D();
var c4 = new THREE.Object3D();
var c5 = new THREE.Object3D();
var c6 = new THREE.Object3D();

class Casas {
  crear_casa(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    this.suelo();

    this.casa1(0, 0, 0, 0, 0, 0, 1, 1, 1);
    this.casa2(0, 0, 0, 0, 0, 0, 1, 1, 1);
    this.casa3();
    this.casa4(0, 0, 20, 0, 0, 0, 1, 1, 1);
    this.casa5(0, 0, -250, 0, 0, 0, 1, 1, 1.5);
    this.casa6(0, 0, 420, 0, 0, 0, 1, 1, 1.2);
  }

  suelo() {
    //suelo

    t.crear_texturas("texturas/adoquin2.jpg", 15, 15);
    cu.crear_cubo(
      1400,
      -3,
      -300,
      500,
      10,
      870,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );

    cu.crear_cubo(
      1400,
      -3,
      630,
      500,
      10,
      780,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
  }
  casa1(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    //casa blanca
    // t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    //parte cubo de base blanco
    darColor = true;
    cu.crear_cubo(
      1450,
      180,
      -550,
      430,
      260,
      300,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xcef6f5
    );
    c1.add(cubo);
    //textura de piedra de abajo
    t.crear_texturas("texturas/piedra.webp", 2, 2);
    cu.crear_cubo(
      1450,
      20,
      -550,
      430,
      60,
      300,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    c1.add(cubo);
    //puertas abajo
    this.puertas(40, 50);

    darColor = true;
    cu.crear_cubo(
      1440,
      150,
      -550,
      430,
      8,
      300,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    c1.add(cubo);

    //puertas arriba
    this.puertasArriba(200, 70);

    //partes de arriba
    darColor = true;
    cu.crear_cubo(
      1440,
      270,
      -550,
      430,
      5,
      300,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    c1.add(cubo);

    darColor = true;
    cu.crear_cubo(
      1440,
      280,
      -550,
      430,
      5,
      300,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    c1.add(cubo);

    darColor = true;
    cu.crear_cubo(
      1440,
      305,
      -550,
      430,
      13,
      300,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    c1.add(cubo);

    c1.position.x = pos_x;
    c1.position.y = pos_y;
    c1.position.z = pos_z;

    c1.rotation.x = rot_x;
    c1.rotation.y = rot_y;
    c1.rotation.z = rot_z;

    c1.scale.x = esc_x;
    c1.scale.y = esc_y;
    c1.scale.z = esc_z;

    scene.add(c1);
  }

  puertas(vy, vz) {
    //puertas medio azul
    t.crear_texturas("texturas/puertaMaderaA.jpg", 1, 1);
    cu.crear_cubo(1240, vy, -560, 20, 90, 45, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);
    //grada
    t.crear_texturas("texturas/piedras.jpg", 1, 1);
    cu.crear_cubo(1235, 5, -560, 20, 10, vz, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);

    t.crear_texturas("texturas/puertaMa.jpg", 1, 1);
    cu.crear_cubo(1240, vy, -470, 20, 90, 45, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);
    //grada
    t.crear_texturas("texturas/piedras.jpg", 1, 1);
    cu.crear_cubo(1240, 5, -470, 20, 10, vz, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);

    //puertas
    t.crear_texturas("texturas/puertaMa.jpg", 1, 1);
    cu.crear_cubo(1240, vy, -660, 20, 90, 45, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);
    //grada
    t.crear_texturas("texturas/piedras.jpg", 1, 1);
    cu.crear_cubo(1235, 5, -660, 20, 10, vz, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);
  }

  puertasArriba(vy, vz) {
    //puertas medio azul
    t.crear_texturas("texturas/puertaMa.jpg", 1, 1);
    cu.crear_cubo(1240, vy, -560, 20, 90, 45, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);
    //grada
    darColor = true;
    cu.crear_cubo(
      1235,
      170,
      -560,
      40,
      45,
      vz,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xa9f5f2
    );
    c1.add(cubo);

    t.crear_texturas("texturas/puertaMa.jpg", 1, 1);
    cu.crear_cubo(1240, vy, -470, 20, 90, 45, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);
    //grada
    darColor = true;
    cu.crear_cubo(
      1240,
      170,
      -470,
      40,
      45,
      vz,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xa9f5f2
    );
    c1.add(cubo);
    //puertas
    t.crear_texturas("texturas/puertaMa.jpg", 1, 1);
    cu.crear_cubo(1240, vy, -660, 20, 90, 45, textura, false, 0, 0, 0, 1, 1, 1);
    c1.add(cubo);
    //grada
    darColor = true;
    cu.crear_cubo(
      1235,
      170,
      -660,
      40,
      45,
      vz,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xa9f5f2
    );
    c1.add(cubo);
  }
  casa2(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    //patio
    t.crear_texturas("texturas/cesped.jpg", 1, 1);
    cu.crear_cubo(
      1490,
      10,
      -300,
      400,
      20,
      200,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    c2.add(cubo);
    //parte frontal

    t.crear_texturas("texturas/piedras.jpg", 1, 0.8);
    cu.crear_cubo(
      1290,
      20,
      -300,
      20,
      50,
      210,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    c2.add(cubo);

    //casa 2
    darColor = true;
    cu.crear_cubo(
      1500,
      50,
      -125,
      400,
      110,
      150,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0x58fad0
    );
    c2.add(cubo);
    //techo
    darColor = true;
    cu.crear_cubo(
      1450,
      110,
      -125,
      400,
      20,
      160,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0x00ffbf
    );

    c2.add(cubo);

    //puertas

    t.crear_texturas("texturas/puertaMadera2.jpg", 1, 1);
    cu.crear_cubo(1305, 30, -85, 20, 70, 30, textura, false, 0, 0, 0, 1, 1, 1);
    c2.add(cubo);
    //ventana

    t.crear_texturas("texturas/ventanaVidrio.jpg", 1, 1);
    cu.crear_cubo(1305, 80, -125, 20, 25, 32, textura, false, 0, 0, 0, 1, 1, 1);
    c2.add(cubo);

    t.crear_texturas("texturas/puertaMadera2.jpg", 1, 1);
    cu.crear_cubo(1305, 30, -165, 20, 70, 30, textura, false, 0, 0, 0, 1, 1, 1);
    c2.add(cubo);

    c2.position.x = pos_x;
    c2.position.y = pos_y;
    c2.position.z = pos_z;

    c2.rotation.x = rot_x;
    c2.rotation.y = rot_y;
    c2.rotation.z = rot_z;

    c2.scale.x = esc_x;
    c2.scale.y = esc_y;
    c2.scale.z = esc_z;

    scene.add(c2);
  }

  casa3() {
    t.crear_texturas("texturas/casadestruida.jpg", 0.7, 0.7);
    cu.crear_cubo(
      1440,
      60,
      35,
      400,
      110,
      150,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xff00ff
    );
  }

  casa4(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    darColor = true;
    cu.crear_cubo(
      1500,
      70,
      350,
      400,
      150,
      200,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffbf00
    );
    c4.add(cubo);

    //adorno parte media
    darColor = true;
    cu.crear_cubo(
      1500,
      70,
      350,
      400,
      10,
      220,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xb43104
    );

    c4.add(cubo);

    //adorno parte sup
    darColor = true;
    cu.crear_cubo(
      1480,
      150,
      350,
      400,
      15,
      210,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xb43104
    );

    c4.add(cubo);
    //cono parte superior de la casa
    darColor = true;
    co.crear_cono(
      1480,
      180,
      353,
      120,
      50,
      5,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );

    //puertas

    t.crear_texturas("texturas/puertaMadera2.jpg", 1, 1);
    cu.crear_cubo(1305, 30, 300, 20, 60, 50, textura, false, 0, 0, 0, 1, 1, 1);
    c4.add(cubo);
    //ventana

    t.crear_texturas("texturas/ventanaVidrio.jpg", 1, 1);
    cu.crear_cubo(1305, 30, 380, 20, 50, 90, textura, false, 0, 0, 0, 1, 1, 1);
    c4.add(cubo);
    //VENTANA SUPERIOR

    t.crear_texturas("texturas/ventanaVidrio.jpg", 1, 1);
    cu.crear_cubo(1305, 110, 350, 20, 50, 90, textura, false, 0, 0, 0, 1, 1, 1);
    c4.add(cubo);

    c4.position.x = pos_x;
    c4.position.y = pos_y;
    c4.position.z = pos_z;

    c4.rotation.x = rot_x;
    c4.rotation.y = rot_y;
    c4.rotation.z = rot_z;

    c4.scale.x = esc_x;
    c4.scale.y = esc_y;
    c4.scale.z = esc_z;

    scene.add(c4);
  }

  casa5(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {


    //BARRA ARRIBA
    darColor = true;
    cu.crear_cubo(
      1490,
      115,
      563,
      400,
      30,
      170,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xf7d358
    );
    c5.add(cubo);

    //BARRA ABAJO
    darColor = true;
    cu.crear_cubo(
      1510,
      0,
      550,
      400,
      50,
      200,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xf7d358
    );
    c5.add(cubo);

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
      0xf5da81
    );
    c5.add(cubo);

    //puertas

    t.crear_texturas("texturas/puertaMadera2.jpg", 1, 1);
    cu.crear_cubo(1315, 30, 500, 20, 60, 30, textura, false, 0, 0, 0, 1, 1, 1);
    c5.add(cubo);

    t.crear_texturas("texturas/puertaMadera2.jpg", 1, 1);
    cu.crear_cubo(1315, 30, 590, 20, 60, 30, textura, false, 0, 0, 0, 1, 1, 1);
    c5.add(cubo);

    //ventanaS

    t.crear_texturas("texturas/ventanaVidrio.jpg", 1, 1);
    cu.crear_cubo(1315, 80, 545, 20, 30, 40, textura, false, 0, 0, 0, 1, 1, 1);
    c5.add(cubo);

    c5.position.x = pos_x;
    c5.position.y = pos_y;
    c5.position.z = pos_z;

    c5.rotation.x = rot_x;
    c5.rotation.y = rot_y;
    c5.rotation.z = rot_z;

    c5.scale.x = esc_x;
    c5.scale.y = esc_y;
    c5.scale.z = esc_z;

    scene.add(c5);
  }

  casa6(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    darColor = true;
    cu.crear_cubo(
      1500,
      70,
      350,
      400,
      150,
      200,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xf7be81
    );
    c6.add(cubo);

    //adorno parte media
    darColor = true;
    cu.crear_cubo(
      1490,
      70,
      350,
      400,
      40,
      210,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xf5d0a9
    );

    c6.add(cubo);

    //adorno parte sup
    darColor = true;
    cu.crear_cubo(
      1480,
      150,
      350,
      400,
      15,
      210,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );

    c6.add(cubo);

    //puertas

    darColor = true;
    cu.crear_cubo(
      1305,
      30,
      300,
      20,
      50,
      30,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0x000000
    );
    c6.add(cubo);
    //ventana

    t.crear_texturas("texturas/lanford.jfif", 1, 1);
    cu.crear_cubo(1305, 30, 380, 20, 50, 90, textura, false, 0, 0, 0, 1, 1, 1);
    c6.add(cubo);
    //VENTANA SUPERIOR

    t.crear_texturas("texturas/ventanaVidrio.jpg", 1, 1);
    cu.crear_cubo(1305, 110, 370, 20, 40, 90, textura, false, 0, 0, 0, 1, 1, 1);
    c6.add(cubo);
    //puerta sup
    t.crear_texturas("texturas/puertaMadera2.jpg", 1, 1);
    cu.crear_cubo(1305, 110, 300, 20, 50, 30, textura, false, 0, 0, 0, 1, 1, 1);
    c6.add(cubo);

    c6.position.x = pos_x;
    c6.position.y = pos_y;
    c6.position.z = pos_z;

    c6.rotation.x = rot_x;
    c6.rotation.y = rot_y;
    c6.rotation.z = rot_z;

    c6.scale.x = esc_x;
    c6.scale.y = esc_y;
    c6.scale.z = esc_z;

    scene.add(c6);
  }
}
