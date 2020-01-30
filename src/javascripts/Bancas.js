import { Object3D } from "three";
import Textura from "./Textura";
import Cubo from "./Cubo";

export var 
  ban,
  ban1,
  ban2,
  ban3,
  ban4,
  ban6,
  ban7,
  ban8,
  ban9=new Object3D();

  var t=new Textura();
  var cu;
  var textura;
export default class Bancas {
constructor(scene){
  this.scene=scene;

}

  crearBancas() {
    //bancas del lado derecho
   this.FigurasBanca(-21, -19, 0, 0, 0, 0, 1.08, 1.05, 1);
    ban = ban1;
    this.FigurasBanca(-10, -19, -10, 0, 0, 0, 1.05, 1.05, 0.7);
    ban = ban2;
    this.FigurasBanca(-10, -19, -70, 0, 0, 0, 1.05, 1.05, 0.7);
    ban = ban3;
    this.FigurasBanca(-10, -19, -130, 0, 0, 0, 1.05, 1.05, 0.7);
    //bancas del lado izquierdo
    ban = ban4;
    this.FigurasBanca(-421, -19, 0, 0, 0, 0, 1.08, 1.05, 1);
    ban = ban5;
    this.FigurasBanca(-421, -19, -160, 0, 0, 0, 1.08, 1.05, 1);
    ban = ban6;
    this.FigurasBanca(-421, -19, -230, 0, 0, 0, 1.08, 1.05, 1);
    //bancas laterales
    ban = ban8;
    this.FigurasBanca(10, -19, 100, 0, -Math.PI / 3.6, 0, 1.08, 1.05, 1);
    ban = ban7;
    this.FigurasBanca(-165, -19, 680, 0, Math.PI / 3.8, 0, 1.08, 1.05, 1);
  }

  FigurasBanca(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    cu=new Cubo(this.scene);
    //crear la parte superior, se tomara un cubo
    textura=t.crear_texturas("texturas/muro2.jpg", 0.5, 0.5);
    cu.crear_cubo(360, 40, 500, 10, 5, 45, textura, false, 0, 0, 0, 1, 1, 1);
    ban.add(cubo);
    //partes medias
    textura=t.crear_texturas("texturas/piedra.webp", 0.9, 0.9);
    cu.crear_cubo(360, 36, 520, 8.5, 3, 5, textura, false, 0, 0, 0, 1, 1, 1);
    ban.add(cubo);

    cu.crear_cubo(360, 36, 480, 8.5, 3, 5, textura, false, 0, 0, 0, 1, 1, 1);
    ban.add(cubo);
    //partes bajas
    textura=t.crear_texturas("texturas/piedra.webp", 0.5, 0.5);
    cu.crear_cubo(360, 33, 520, 7, 3, 5, textura, false, 0, 0, 0, 1, 1, 1);
    ban.add(cubo);
    cu.crear_cubo(360, 33, 480, 7, 3, 5, textura, false, 0, 0, 0, 1, 1, 1);
    ban.add(cubo);

    ban.position.x = pos_x;
    ban.position.y = pos_y;
    ban.position.z = pos_z;

    ban.rotation.x = rot_x;
    ban.rotation.y = rot_y;
    ban.rotation.z = rot_z;

    ban.scale.x = esc_x;
    ban.scale.y = esc_y;
    ban.scale.z = esc_z;

    return ban;
    
  }
}
