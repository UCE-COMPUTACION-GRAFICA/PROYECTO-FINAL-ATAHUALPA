
import * as THREE from "three";

import Textura from "./Textura";
import Cubo from "./Cubo";
import Cilindro from "./Cilindro";
import Arbol from "./Arbol";
import Esfera from "./Esfera";
import Bancas from "./Bancas";
import Lamparas from "./Lamparas";
import Modelo3D from "./Modelo3D";


import { Object3D } from "three";

var t=new Textura();
var cu=new Cubo();
var ci,arb,e,banca,lamp,ar;


var textura;

//creacion de objetos 3d a usarse

export var lado1,
  lado2,
  baseiglesia,
  flr,
  flr1,
  flr2,
  flr3,
  fl4,
  flr5 = new Object3D();
  

export default class Parque {
 
 

  constructor(scene) {
    this.scene = scene;
    cu = new Cubo(this.scene);
  }


  
  crearParque() {
cu = new Cubo(this.scene);
ci = new Cilindro(this.scene);
arb = new Arbol(this.scene);
e = new Esfera(this.scene);
banca = new Bancas(this.scene);
lamp = new Lamparas(this.scene);
ar = new Modelo3D(this.scene);
    //parque: cuadrado principal que abarca todo el parque
    textura = t.crear_texturas("texturas/ad.jpg", 5, 5);
    cu.darColor = true;
    cu.crear_cubo(
      180,
      10,
      500,
      1100,
      4,
      800,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0x6e6e6e
    );

    //cuadrado central con textura que abarca la pileta
    textura = t.crear_texturas("texturas/adoquin2.jpg", 10, 20);
    cu.crear_cubo(
      169.7,
      13,
      340,
      390,
      1,
      420,
      textura,
      false,
      0,
      0,
      0,
      1.03,
      1.1,
      1
    );
    textura = t.crear_texturas("texturas/adoquin2.jpg", 0.025, 0.05);
    //completa la figura de arriba,
    this.figuraTextura_parque(
      -182,
      13,
      500,
      Math.PI / 2,
      0,
      0,
      1,
      1,
      1,
      textura,
      false
    );
    //textura de los lados superiores de las calles
    textura = t.crear_texturas("texturas/adoquin2.jpg", 9, 3);
    cu.crear_cubo(505, 13, 172, 320, 1, 70, textura, false, 0, 0, 0, 0.8, 1, 1);
    cu.crear_cubo(
      -168,
      13,
      172,
      320,
      1,
      70,
      textura,
      false,
      0,
      0,
      0,
      0.8,
      1,
      1
    );
    cu.crear_cubo(
      -168,
      13,
      400,
      320,
      1,
      70,
      textura,
      false,
      0,
      0,
      0,
      0.8,
      1,
      1
    );
    cu.crear_cubo(505, 13, 400, 320, 1, 70, textura, false, 0, 0, 0, 0.8, 1, 1);
    //frente
    cu.crear_cubo(
      165,
      13,
      725,
      320,
      1,
      70,
      textura,
      false,
      0,
      Math.PI / 2,
      0,
      0.73,
      1,
      1
    );
    //laterales
    cu.crear_cubo(
      -142,
      13,
      695,
      320,
      1,
      70,
      textura,
      false,
      0,
      Math.PI / 4.5,
      0,
      1.07,
      1,
      1
    );
    cu.crear_cubo(
      475,
      13,
      695,
      320,
      1,
      70,
      textura,
      false,
      0,
      -Math.PI / 4.5,
      0,
      1.07,
      1,
      1
    );
    textura = t.crear_texturas("texturas/ad.jpg", 10, 20);
    cu.crear_cubo(200, 3, 100, 1200, 9, 1600, textura, false, 0, 0, 0, 1, 1, 1);
    //gradas
   // this.parte_parque1(0, 10, 0, 0, 0, 0, 1, 1, 1);
    //this.scene.add(baseiglesia);
    //lados
    this.lado(10, 10, 0, 0, 0, 0, 1.2, 1, 1);
    this.scene.add(lado1);
    lado1 = lado2;
    this.lado(660, 10, 0, 0, 0, 0, 1.2, 1, 1);
    this.scene.add(lado1);
    //textura de lineas del circulo central
    cu.darColor = true;
    ci.crearCilindro(
      167,
      15,
      405,
      0,
      0,
      0,
      1,
      1,
      1,
      83,
      0.1,
      null,
      false,
      0xf4fa58
    );
    //textura de lineas verticales
    //arriba
    cu.darColor = true;
    cu.crear_cubo(
      170,
      14,
      240,
      3,
      0.1,
      210,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xf4fa58
    );
    //abajo
    cu.darColor = true;
    cu.crear_cubo(
      170,
      14,
      490,
      3,
      0.1,
      230,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xf4fa58
    );
    //laterales
    cu.darColor = true;
    cu.crear_cubo(
      170,
      14,
      410,
      3,
      0.1,
      485,
      null,
      false,
      0,
      Math.PI / 3.3,
      0,
      1,
      1,
      1,
      0xf4fa58
    );
    cu.darColor = true;
    cu.crear_cubo(
      170,
      14,
      420,
      3,
      0.1,
      485,
      null,
      false,
      0,
      -Math.PI / 3.3,
      0,
      1,
      1,
      1,
      0xf4fa58
    );
    //lineas horizontales
    cu.darColor = true;
    cu.crear_cubo(
      170,
      14,
      410,
      3,
      0.1,
      400,
      null,
      false,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      1,
      0xf4fa58
    );
    //cu.crear_cubo(200,50,0,10,0.1,50,0,false,0,Math.Pi/2,0,1,1,1,0xF4FA58)
    //circulo central
    textura = t.crear_texturas("texturas/piedra.webp", 7, 7);
    ci.crearCilindro(167, 15.5, 405, 0, 0, 0, 1, 1, 1, 80, 0.5, textura, false);
    //partes de los jardines
    this.jardines();
    this.mostrarArboles();
    //crear bancas del parque
    banca.crearBancas();
    //lamparas
    lamp.crearLamparas();
  }

  Lineacirculo(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    radio
  ) {
    var semicirGeometry = new THREE.Geometry();

    var material = new THREE.LineBasicMaterial({
      //map: textura,
      color: 0x006633,
      linewidth: 5
      // side: THREE.DoubleSide
    });

    //hacer mas grueso OJO

    for (var j = 0; j < 10; j = j + 0.01) {
      var a = Math.cos(j) * radio;
      var b = Math.sin(j) * radio;

      semicirGeometry.vertices.push(new THREE.Vector3(a, b, 0));
      // semicirGeometry.faces.push(new THREE.Face4(0,1,2,3));
    }

    var semicir = new THREE.Line(semicirGeometry, material);
    //semicir=new THREE.Mesh(semicirGeometry, material);

    //semicir.position.set(0,0,0);

    semicir.position.x = pos_x;
    semicir.position.y = pos_y;
    semicir.position.z = pos_z;

    semicir.rotation.x = rot_x;
    semicir.rotation.y = rot_y;
    semicir.rotation.z = rot_z;

    semicir.scale.x = esc_x;
    semicir.scale.y = esc_y;
    semicir.scale.z = esc_z;

    this.scene.add(semicir);
    return semicir;

    // console.log(semicir);
  }

  jardines(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
   
  
    //dere
    textura = t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    cu.crear_cubo(
      502,
      15,
      286.5,
      250,
      4,
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

    textura = t.crear_texturas("texturas/cesped.jpg", 5, 5);
    cu.crear_cubo(
      502,
      19,
      286.5,
      250,
      5,
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
    //izq
    textura = t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    cu.crear_cubo(
      -163,
      15,
      286.5,
      250,
      4,
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
    textura = t.crear_texturas("texturas/cesped.jpg", 5, 5);
    cu.crear_cubo(
      -163,
      19,
      286.5,
      250,
      5,
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

    //figuras
    //derecha
    textura = t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    this.figura_jardin(
      375,
      14,
      440,
      -Math.PI / 2,
      0,
      0,
      2.5,
      1,
      1,
      textura,
      false
    );

    textura = t.crear_texturas("texturas/cesped.jpg", 0.05, 0.05);
    this.figura_jardin(
      375,
      19,
      440,
      -Math.PI / 2,
      0,
      0,
      2.5,
      1,
      1,
      textura,
      false
    );

    //izquierda
    textura = t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    this.figura_jardin(
      -40,
      14,
      440,
      -Math.PI / 2,
      Math.PI,
      0,
      2.5,
      1,
      1,
      textura,
      false
    );

    textura = t.crear_texturas("texturas/cesped.jpg", 0.05, 0.05);
    this.figura_jardin(
      -40,
      19,
      440,
      -Math.PI / 2,
      Math.PI,
      0,
      2.5,
      1,
      1,
      textura,
      false
    );

    //centrales
    textura = t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    this.figura_jardin2(
      26,
      9,
      570,
      -Math.PI / 2,
      0,
      0,
      1,
      1,
      1,
      textura,
      false
    );

    textura = t.crear_texturas("texturas/cesped.jpg", 0.05, 0.05);
    this.figura_jardin2(
      26,
      14,
      570,
      -Math.PI / 2,
      0,
      0,
      1,
      1,
      1,
      textura,
      false
    );

    textura = t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    this.figura_jardin2(
      304,
      15,
      570,
      -Math.PI / 2,
      Math.PI,
      0,
      1,
      1,
      1,
      textura,
      false
    );
    textura = t.crear_texturas("texturas/cesped.jpg", 0.05, 0.05);
    this.figura_jardin2(
      304,
      20,
      570,
      -Math.PI / 2,
      Math.PI,
      0,
      1,
      1,
      1,
      textura,
      false
    );

    this.vallas();
  }

  vallas() {
    //izquierda

    /*izq 1*/
    for (var i = 0; i < 63; i++) {
      this.Lineacirculo(-39 - 4 * i, 17, 211, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(-39 - 4 * i, 17, 210.9, 0, 0, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(-39 - 4 * i, 18, 211, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(-39 - 4 * i, 18, 210.9, 0, 0, 0, 1, 1, 1, 2);
    }
    for (var i = 0; i < 38; i++) {
      this.Lineacirculo(-289, 17, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(-289, 17, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(-289, 18, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(-289, 18, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 38; i++) {
      this.Lineacirculo(-38, 17, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(-38, 17, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(-38, 18, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(-38, 18, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }
    for (var i = 0; i < 63; i++) {
      this.Lineacirculo(-39 - 4 * i, 17, 362, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(-39 - 4 * i, 17, 361.9, 0, 0, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(-39 - 4 * i, 18, 362, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(-39 - 4 * i, 18, 361.9, 0, 0, 0, 1, 1, 1, 2);
    }

    //3 abajo izquierda
    for (var i = 0; i < 29; i++) {
      this.Lineacirculo(127 - 4 * i, 17, 610, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(127 - 4 * i, 17, 609.9, 0, 0, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(127 - 4 * i, 18, 610, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(127 - 4 * i, 18, 609.9, 0, 0, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 94; i++) {
      this.Lineacirculo(125 - 4 * i, 17, 840, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(125 - 4 * i, 17, 839.9, 0, 0, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(125 - 4 * i, 18, 840, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(125 - 4 * i, 18, 839.9, 0, 0, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 58; i++) {
      this.Lineacirculo(127, 17, 612 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(127, 17, 611.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(127, 18, 612 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(127, 18, 611.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 59; i++) {
      this.Lineacirculo(-249 + 4.62 * i, 17, 839 - 4 * i, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(
        -248.9 + 4.62 * i,
        17,
        838.9 - 4 * i,
        0,
        0,
        0,
        1,
        5,
        1,
        2
      );
      //central
      this.Lineacirculo(-249 + 4.62 * i, 17, 839 - 4 * i, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(
        -248.9 + 4.62 * i,
        17,
        838.9 - 4 * i,
        0,
        0,
        0,
        1,
        1,
        1,
        2
      );
    }

    /**** */

    /* 2 izquierdo*/

    for (var i = 0; i < 83; i++) {
      this.Lineacirculo(-290, 17, 442 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(-290, 17, 441.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);

      //central
      this.Lineacirculo(-290, 18, 442 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(-290, 18, 441.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 30; i++) {
      this.Lineacirculo(-40, 17, 442 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(-40, 17, 441.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(-40, 18, 442 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(-40, 18, 441.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 63; i++) {
      this.Lineacirculo(-40 - 4 * i, 17, 440, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(-40 - 4 * i, 17, 439.9, 0, 0, 0, 1, 5, 1, 2);

      //central
      this.Lineacirculo(-40 - 4 * i, 18, 440, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(-40 - 4 * i, 18, 439.9, 0, 0, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 52; i++) {
      this.Lineacirculo(-287 + 4.78 * i, 17, 769 - 4 * i, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(
        -286.9 + 4.78 * i,
        17,
        768.9 - 4 * i,
        0,
        0,
        0,
        1,
        5,
        1,
        2
      );
      //central
      this.Lineacirculo(-287 + 4.78 * i, 17, 769 - 4 * i, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(
        -286.9 + 4.78 * i,
        17,
        768.9 - 4 * i,
        0,
        0,
        0,
        1,
        1,
        1,
        2
      );
    }

    //derecha

    /* 1 derecha*/
    for (var i = 0; i < 63; i++) {
      this.Lineacirculo(379 + 4 * i, 17, 211, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(379 + 4 * i, 17, 210.9, 0, 0, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(379 + 4 * i, 18, 211, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(379 + 4 * i, 18, 210.9, 0, 0, 0, 1, 1, 1, 2);
    }
    for (var i = 0; i < 63; i++) {
      this.Lineacirculo(379 + 4 * i, 17, 362, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(379 + 4 * i, 17, 361.9, 0, 0, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(379 + 4 * i, 18, 362, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(379 + 4 * i, 18, 361.9, 0, 0, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 38; i++) {
      this.Lineacirculo(377, 17, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(377, 17, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(377, 18, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(377, 18, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 38; i++) {
      this.Lineacirculo(628, 17, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(628, 17, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(628, 18, 212 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(628, 18, 211.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    /*2derecha*/

    for (var i = 0; i < 63; i++) {
      this.Lineacirculo(377 + 4 * i, 17, 440, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(377 + 4 * i, 17, 439.9, 0, 0, 0, 1, 5, 1, 2);
      //central
      this.Lineacirculo(377 + 4 * i, 18, 440, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(377 + 4 * i, 18, 439.9, 0, 0, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 30; i++) {
      this.Lineacirculo(375, 17, 441 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(375, 17, 440.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(375, 18, 441 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(375, 18, 440.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 83; i++) {
      this.Lineacirculo(626, 17, 441 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(626, 17, 440.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(626, 18, 441 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(626, 18, 440.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 53; i++) {
      this.Lineacirculo(374 + 4.8 * i, 17, 561 + 4 * i, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(
        373.9 + 4.8 * i,
        17,
        560.9 + 4 * i,
        0,
        0,
        0,
        1,
        5,
        1,
        2
      );
      //central

      this.Lineacirculo(374 + 4.8 * i, 18, 561 + 4 * i, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(
        373.9 + 4.8 * i,
        18,
        560.9 + 4 * i,
        0,
        0,
        0,
        1,
        1,
        1,
        2
      );
    }

    /* 3 derecha*/

    for (var i = 0; i < 26; i++) {
      this.Lineacirculo(206 + 4 * i, 17, 610, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(206 + 4 * i, 17, 609.9, 0, 0, 0, 1, 5, 1, 2);

      //central
      this.Lineacirculo(206 + 4 * i, 18, 610, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(206 + 4 * i, 18, 609.9, 0, 0, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 94; i++) {
      this.Lineacirculo(206 + 4 * i, 17, 840, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(206 + 4 * i, 17, 839.9, 0, 0, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(206 + 4 * i, 18, 840, 0, 0, 0, 1, 1, 1, 2);
      this.Lineacirculo(206 + 4 * i, 18, 839.9, 0, 0, 0, 1, 1, 1, 2);
    }

    for (var i = 0; i < 58; i++) {
      this.Lineacirculo(204, 17, 610 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      this.Lineacirculo(204, 17, 609.9 + 4 * i, 0, Math.PI / 2, 0, 1, 5, 1, 2);
      //central

      this.Lineacirculo(204, 18, 610 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
      this.Lineacirculo(204, 18, 609.9 + 4 * i, 0, Math.PI / 2, 0, 1, 1, 1, 2);
    }
    //lateral
    for (var i = 0; i < 56; i++) {
      this.Lineacirculo(315 + 4.6 * i, 17, 610 + 4 * i, 0, 0, 0, 1, 5, 1, 2);
      this.Lineacirculo(
        314.9 + 4.6 * i,
        17,
        609.9 + 4 * i,
        0,
        0,
        0,
        1,
        5,
        1,
        2
      );
      //central
    }
  }

  figuraTextura_parque(
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
    sqr
  ) {
    var geometry = new THREE.Geometry();

    var array_extrude = [];
    var vertices = [
      [200, 103, 0],
      [500, 103, 0],
      [550, 50, 0],
      [150, 50, 0],
      [200, 103, 0]
    ];
    var vector;
    var long_vertices = vertices.length;
    for (var i = 0; i < long_vertices; i++) {
      var x = vertices[i][0];
      var y = vertices[i][1];
      var z = vertices[i][2];
      vector = new THREE.Vector3(x, y, z);
      geometry.vertices.push(vector);

      array_extrude.push(vector);
    }
    //para dar profundidad
    var nueva_figura = new THREE.Shape(array_extrude);
    //excrusion
    var datos_extrusion = {
      amount: 5, //cantidad de profundidad
      bevelEnabled: false, // activando bisel
      bevelSegments: 1, // segmentos del bisel
      steps: 10, // "profundidad y N�m. de segmentos que marcan la profundidad�
      bevelThickness: 100 // grosor del bisel
    };

    var extrude_geometria = new THREE.ExtrudeGeometry(
      nueva_figura,
      datos_extrusion
    );

    //Material de la figura

    var material = new THREE.MeshBasicMaterial({
      map: textura,
      side: THREE.DoubleSide,
      wireframe: sqr
    });

    //agregar a malla
    var figura_t = new THREE.Mesh(extrude_geometria, material);

    figura_t.position.x = pos_x;
    figura_t.position.y = pos_y;
    figura_t.position.z = pos_z;

    figura_t.rotation.x = rot_x;
    figura_t.rotation.y = rot_y;
    figura_t.rotation.z = rot_z;

    figura_t.scale.x = esc_x;
    figura_t.scale.y = esc_y;
    figura_t.scale.z = esc_z;

    this.scene.add(figura_t);
  }

  figura_jardin(
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
    sqr
  ) {
    var geometry = new THREE.Geometry();

    var array_extrude = [];
    var vertices = [
      [0, 0, 0],
      [100, 0, 0],
      [100, -330, 0],
      [0, -120, 0],
      [0, 0, 0]
    ];
    var vector;
    var long_vertices = vertices.length;
    for (var i = 0; i < long_vertices; i++) {
      var x = vertices[i][0];
      var y = vertices[i][1];
      var z = vertices[i][2];
      vector = new THREE.Vector3(x, y, z);
      geometry.vertices.push(vector);

      array_extrude.push(vector);
    }
    //para dar profundidad
    var nueva_figura = new THREE.Shape(array_extrude);
    //excrusion
    var datos_extrusion = {
      amount: 5, //cantidad de profundidad
      bevelEnabled: false, // activando bisel
      bevelSegments: 1, // segmentos del bisel
      steps: 10, // "profundidad y N�m. de segmentos que marcan la profundidad�
      bevelThickness: 100 // grosor del bisel
    };

    var extrude_geometria = new THREE.ExtrudeGeometry(
      nueva_figura,
      datos_extrusion
    );

    //Material de la figura

    var material = new THREE.MeshBasicMaterial({
      map: textura,
      side: THREE.DoubleSide,
      wireframe: sqr
    });

    //agregar a malla
    var figura_j = new THREE.Mesh(extrude_geometria, material);

    figura_j.position.x = pos_x;
    figura_j.position.y = pos_y;
    figura_j.position.z = pos_z;

    figura_j.rotation.x = rot_x;
    figura_j.rotation.y = rot_y;
    figura_j.rotation.z = rot_z;

    figura_j.scale.x = esc_x;
    figura_j.scale.y = esc_y;
    figura_j.scale.z = esc_z;

    this.scene.add(figura_j);
  }

  figura_jardin2(
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
    sqr
  ) {
    var geometry = new THREE.Geometry();

    var array_extrude = [];
    var vertices = [
      [-10, -40, 0],
      [100, -40, 0],
      [100, -270, 0],
      [-275, -270, 0],
      [-10, -40, 0]
    ];
    var vector;
    var long_vertices = vertices.length;
    for (var i = 0; i < long_vertices; i++) {
      var x = vertices[i][0];
      var y = vertices[i][1];
      var z = vertices[i][2];
      vector = new THREE.Vector3(x, y, z);
      geometry.vertices.push(vector);

      array_extrude.push(vector);
    }
    //para dar profundidad
    var nueva_figura = new THREE.Shape(array_extrude);
    //excrusion
    var datos_extrusion = {
      amount: 5, //cantidad de profundidad
      bevelEnabled: false, // activando bisel
      bevelSegments: 1, // segmentos del bisel
      steps: 10, // "profundidad y N�m. de segmentos que marcan la profundidad�
      bevelThickness: 100 // grosor del bisel
    };

    var extrude_geometria = new THREE.ExtrudeGeometry(
      nueva_figura,
      datos_extrusion
    );

    //Material de la figura

    var material = new THREE.MeshBasicMaterial({
      map: textura,
      side: THREE.DoubleSide,
      wireframe: sqr
    });

    //agregar a malla
    var figura_j = new THREE.Mesh(extrude_geometria, material);

    figura_j.position.x = pos_x;
    figura_j.position.y = pos_y;
    figura_j.position.z = pos_z;

    figura_j.rotation.x = rot_x;
    figura_j.rotation.y = rot_y;
    figura_j.rotation.z = rot_z;

    figura_j.scale.x = esc_x;
    figura_j.scale.y = esc_y;
    figura_j.scale.z = esc_z;

    this.scene.add(figura_j);
  }

  lado(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    cu = new Cubo(this.scene);

    textura = t.crear_texturas("texturas/muro.jpg", 5, 1);
    cu.crear_cubo(-235, 20, 114, 10, 40, 35, textura, false, 0, 0, 0, 1, 1, 1);
    lado1.add(cu.cubo);
    cu.crear_cubo(-45, 20, 114, 10, 40, 35, textura, false, 0, 0, 0, 1, 1, 1);
    lado1.add(cu.cubo);
    cu.crear_cubo(-140, 10, 125, 200, 20, 15, textura, false, 0, 0, 0, 1, 1, 1);
    lado1.add(cu.cubo);
    //cesped
    textura = t.crear_texturas("texturas/cesped.jpg", 5, 1);
    cu.crear_cubo(
      -141,
      20,
      110,
      178,
      20,
      30,
      textura,
      false,
      Math.PI / 4,
      0,
      0,
      1,
      1,
      1
    );
    lado1.add(cu.cubo);
    textura = t.crear_texturas("texturas/muro.jpg", 5, 1);
    cu.crear_cubo(-140, 30, 95, 200, 20, 15, textura, false, 0, 0, 0, 1, 1, 1);
    lado1.add(cu.cubo);

    lado1.position.x = pos_x;
    lado1.position.y = pos_y;
    lado1.position.z = pos_z;

    lado1.rotation.x = rot_x;
    lado1.rotation.y = rot_y;
    lado1.rotation.z = rot_z;

    lado1.scale.x = esc_x;
    lado1.scale.y = esc_y;
    lado1.scale.z = esc_z;
  }

  //para la base de la iglesia, y gradas centrales de abajo del parque
  parte_parque1(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
   
    cu = new Cubo(this.scene);
    console.log(this.scene);
    console.log(cu);


    textura = t.crear_texturas("texturas/piedra.webp", 3, 3);
    cu.crear_cubo(
      220,
      10,
      -300,
      1000,
      25,
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

    baseiglesia.add(cu.cubo);
    //gradas frente
    cu.darColor = true;
    cu.crear_cubo(
      220,
      3,
      -278,
      1000,
      5,
      800,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0x6e6e6e
    );
    baseiglesia.add(cu.cubo);
    cu.darColor = true;
    cu.crear_cubo(
      220,
      6,
      -286,
      1000,
      9,
      800,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0x848484
    );
    baseiglesia.add(cu.cubo);
    cu.darColor = true;
    cu.crear_cubo(
      220,
      10,
      -292,
      1000,
      13,
      800,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0x6e6e6e
    );
    baseiglesia.add(cu.cubo);

    baseiglesia.position.x = pos_x;
    baseiglesia.position.y = pos_y;
    baseiglesia.position.z = pos_z;

    baseiglesia.rotation.x = rot_x;
    baseiglesia.rotation.y = rot_y;
    baseiglesia.rotation.z = rot_z;

    baseiglesia.scale.x = esc_x;
    baseiglesia.scale.y = esc_y;
    baseiglesia.scale.z = esc_z;

    return baseiglesia;

  }

  mostrarArboles() {
   
  
    //PARTE DEL PARQUE 1
    arb.crearArboles();
    var light2 = new THREE.PointLight(0x66ff00, 1);
    light2.position.x = -70;
    light2.position.y = 40;
    light2.position.z = 350;
    this.scene.add(light2);
    //insertar un modelo de arbol
    ar.cargarModelo3D("Modelos/arbol2.glb", -70, 20, 310, 0, 0, 0, 1.5, 1.5, 2);
    this.flores(-60, 20, 100, 0, 0, 0, 1.1, 1, 1.1);
    flr = flr1;
    this.flores(-60, 30, 80, 0, 0, 0, 1.1, 1, 1.1);
    flr = flr2;
    this.flores(-60, 40, 95, 0, 0, 0, 1.1, 1, 1.1);
    flr = flr3;
    this.flores(-80, 40, 100, 0, 0, 0, 1.1, 1, 1.1);
  }

  flores(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
  
    
    e.darColor = true;
    e.crear_esfera(
      0,
      30,
      200,
      0,
      0,
      0,
      1,
      1,
      1,
      null,
      false,
      1,
      10,
      10,
      0x00ff11
    );

    flr.add(e.sphere);

    ci.darColor = true;
    ci.crearCilindro(
      2,
      30,
      200,
      0,
      0,
      0,
      1,
      1,
      0.7,
      2,
      1,
      null,
      false,
      0xff0011
    );
    flr.add(ci.cilindro);

    ci.darColor = true;
    ci.crearCilindro(
      -2,
      30,
      200,
      0,
      0,
      0,
      1,
      1,
      0.7,
      2,
      1,
      null,
      false,
      0xff0011
    );
    flr.add(ci.cilindro);

    ci.darColor = true;
    ci.crearCilindro(
      0,
      30,
      202,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      0.7,
      2,
      1,
      null,
      false,
      0xff0011
    );
    flr.add(ci.cilindro);

    ci.darColor = true;
    ci.crearCilindro(
      0,
      30,
      198,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      0.7,
      2,
      1,
      null,
      false,
      0xff0011
    );
    flr.add(ci.cilindro);

    flr.position.x = pos_x;
    flr.position.y = pos_y;
    flr.position.z = pos_z;

    flr.rotation.x = rot_x;
    flr.rotation.y = rot_y;
    flr.rotation.z = rot_z;

    flr.scale.x = esc_x;
    flr.scale.y = esc_y;
    flr.scale.z = esc_z;
  }
}
