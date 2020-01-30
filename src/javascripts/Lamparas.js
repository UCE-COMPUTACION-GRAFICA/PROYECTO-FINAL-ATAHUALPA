//import { darColor, scene, lamp,ci, cilindro, ses,semisphere } from "../Principal";
import { Object3D } from "three";
import Cilindro from "./Cilindro";
import SemiEsfera from "./SemiEsfera";

var ci=new Cilindro(this.scene);
var ses=new SemiEsfera(this.scene);


var lmp,
  lmp1,
  lmp2,
  lmp3,
  lmp4,
  lmp5,
  lmp6,
  lmp7,
  lmp8,
  lmp9,
  lmp10,
  lmp11,
  lmp12,
  lmp13,
  lmp14,
  lmp15,
  lmp16,
  lmp17,
  lmp18,
  lmp19,
  lmp20,
  lmp21,
  lmp22,
  lmp23,
  lmp24,
  lmp25,
  lmp26,
  lmp27,
  lmp28,
  lmp29,
  lmp30,
  lmp31,
  lmp32,
  lmp33,
  lmp34=new Object3D();

export default class Lamparas {

  constructor(scene){
    this.scene=scene;

  }
  crearLamparas() {
    //las 4 primeras en forma en fila
    this.figurasLampara(0, 0, 110, 0, 0, 0, 1, 1, 1);
    lmp = lmp1;
    this.figurasLampara(140, 0, 110, 0, 0, 0, 1, 1, 1);
    lmp = lmp2;
    this.figurasLampara(285, 0, 120, 0, 0, 0, 1, 1, 1);
    lmp = lmp3;
    this.figurasLampara(-150, 0, 120, 0, 0, 0, 1, 1, 1);

    //lampara mas abajo en columna a la derecha
    lmp = lmp4;
    this.figurasLampara(285, 0, 210, 0, 0, 0, 1, 1, 1);
    lmp = lmp5;
    this.figurasLampara(285, 0, 350, 0, 0, 0, 1, 1, 1);
    lmp = lmp6;
    this.figurasLampara(285, 0, 460, 0, 0, 0, 1, 1, 1);

    //del medio
    lmp = lmp7;
    this.figurasLampara(70, 0, 400, 0, 0, 0, 1, 1, 1);
    lmp = lmp18;
    this.figurasLampara(70, 0, 220, 0, 0, 0, 1, 1, 1);

    //otro lado izquierda de abajo hacia arriba
    lmp = lmp8;
    this.figurasLampara(-150, 0, 460, 0, 0, 0, 1, 1, 1);

    lmp = lmp9;
    this.figurasLampara(-150, 0, 350, 0, 0, 0, 1, 1, 1);

    lmp = lmp29;
    this.figurasLampara(-150, 0, 200, 0, 0, 0, 1, 1, 1);

    //otro lado de mas  izquierda de arriba hacia abajo
    lmp = lmp24;
    this.figurasLampara(-385, 0, 120, 0, 0, 0, 1, 1, 1);

    lmp = lmp25;
    this.figurasLampara(-385, 0, 255, 0, 0, 0, 1, 1, 1);

    lmp = lmp26;
    this.figurasLampara(-385, 0, 350, 0, 0, 0, 1, 1, 1);

    lmp = lmp27;
    this.figurasLampara(-385, 0, 570, 0, 0, 0, 1, 1, 1);

    lmp = lmp28;
    this.figurasLampara(-385, 0, 650, 0, 0, 0, 1, 1, 1);

    //lamparas abajo derecha de arriba hacia abajo y luego de izquierda a derecha

    lmp = lmp10;
    this.figurasLampara(110, 0, 520, 0, 0, 0, 1, 1, 1);
    lmp = lmp19;
    this.figurasLampara(110, 0, 700, 0, 0, 0, 1, 1, 1);
    lmp = lmp20;
    this.figurasLampara(190, 0, 735, 0, 0, 0, 1, 1, 1);
    lmp = lmp23;
    this.figurasLampara(460, 0, 735, 0, 0, 0, 1, 1, 1);

    //lamparas abajo izquierda de arriba hacia abajo

    lmp = lmp21;
    this.figurasLampara(20, 0, 610, 0, 0, 0, 1, 1, 1);

    lmp = lmp22;
    this.figurasLampara(20, 0, 700, 0, 0, 0, 1, 1, 1);

    lmp = lmp30;
    this.figurasLampara(-100, 0, 735, 0, 0, 0, 1, 1, 1);

    //lamparas mas a la derecha en columna de abajo hacia arriba
    lmp = lmp11;
    this.figurasLampara(520, 0, 660, 0, 0, 0, 1, 1, 1);
    lmp = lmp12;
    this.figurasLampara(520, 0, 500, 0, 0, 0, 1, 1, 1);
    lmp = lmp13;
    this.figurasLampara(520, 0, 350, 0, 0, 0, 1, 1, 1);
    lmp = lmp14;
    this.figurasLampara(520, 0, 235, 0, 0, 0, 1, 1, 1);
    lmp = lmp15;
    this.figurasLampara(520, 0, 120, 0, 0, 0, 1, 1, 1);

    //lampara lateral a la derecha
    lmp = lmp16;
    this.figurasLampara(315, 0, 600, 0, 0, 0, 1, 1, 1);

    //lampara lateral de la izquierda

    lmp = lmp32;
    this.figurasLampara(-85, 0, 520, 0, 0, 0, 1, 1, 1);

    lmp = lmp33;
    this.figurasLampara(-200, 0, 620, 0, 0, 0, 1, 1, 1);

    lmp = lmp34;
    this.figurasLampara(-330, 0, 730, 0, 0, 0, 1, 1, 1);

    //lampara horizontal de la derecha
    lmp = lmp17;
    this.figurasLampara(420, 0, 255, 0, 0, 0, 1, 1, 1);
  }

  figurasLampara(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z
  ) {
    //cilindro, correspondiente al palo principal
    ci.darColor = true;
    ci.crearCilindro(
      100,
      50,
      100,
      0,
      0,
      0,
      1,
      1,
      1,
      2,
      100,
      2,
      false,
      0x585858
    );
    lmp.add(cilindro);

    ses.darColor = true;
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
      0xffffff
    );

    lmp.add(semisphere);
    //cilindro tapa

    ci.darColor = true;
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

    return lmp;

  }

  luces() {
    //Luz del ambiente

    var luzScene = new THREE.HemisphereLight(0xffffff, 0x0808dd, 1000);
    luzScene.target = lmp;
    luzScene.position.y = 50;
    luzScene.position.x = 120;
    luzScene.position.z = 100;
    this.scene.add(luzScene);
  }
}
