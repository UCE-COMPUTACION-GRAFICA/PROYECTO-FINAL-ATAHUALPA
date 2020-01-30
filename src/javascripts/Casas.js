import Textura from "./Textura";
import Cubo from "./Cubo";
//import { t, cu, darColor,textura } from "../Principal";
var t=new Textura();
var cu;
var textura;

export default class Casas {
constructor(scene){
  this.scene=scene;
}

  crear_casa(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    this.suelo();
    this.casa1();
    this.casa2();
    this.casa3();
    this.casa4();
    this.casa5();
    this.casa6();
    this.casa7();
  }

  suelo() {
    cu=new Cubo(this.scene);
    //suelo
    textura=t.crear_texturas("texturas/adoquin2.jpg", 15, 15);
    cu.crear_cubo(
      1400,
      -3,
      -240,
      500,
      10,
      800,
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
  casa1() {
    cu=new Cubo(this.scene);
    //casa blanca
    // t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    //parte cubo de base blanco
    cu.darColor = true;
    cu.crear_cubo(
      1450,
      130,
      -550,
      400,
      300,
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
    //textura de piedra de abajo
  }
  casa2() {
    cu=new Cubo(this.scene);
    //patio
    textura=t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    cu.crear_cubo(
      1470,
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
    //parte frontal
    textura=t.crear_texturas("texturas/piedra.webp", 15, 15);
    cu.crear_cubo(
      1270,
      20,
      -300,
      20,
      50,
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
    //casa 2
    textura=t.crear_texturas("texturas/amarillo.jpg", 15, 15);
    cu.crear_cubo(
      1500,
      50,
      -125,
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
      1
    );
    textura=t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    cu.crear_cubo(
      1450,
      110,
      -125,
      400,
      20,
      160,
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
  casa3() {
    cu=new Cubo(this.scene);
    //t.crear_texturas("texturas/muro3.jpg", 15, 15);
    cu.crear_cubo(
      1450,
      70,
      45,
      400,
      130,
      180,
      null,
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
  casa4() {
    cu=new Cubo(this.scene);
    cu.crear_cubo(
      1450,
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
      0xff00ff
    );
  }
  casa5() {
    cu=new Cubo(this.scene);
    cu.crear_cubo(
      1450,
      70,
      550,
      400,
      80,
      180,
      null,
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

  casa6() {
    cu=new Cubo(this.scene);
    cu.crear_cubo(
      1450,
      70,
      650,
      400,
      80,
      180,
      null,
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

  casa7() {
    cu=new Cubo(this.scene);
    cu.crear_cubo(
      1450,
      70,
      750,
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
      0xff00ff
    );
  }
}
