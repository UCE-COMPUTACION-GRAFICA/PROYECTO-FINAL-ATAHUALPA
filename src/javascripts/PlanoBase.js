import Textura from "./Textura";
import Plano from "./Plano";
//objetos 
var t=new Textura();
var nuevo;
var textura;

export default class PlanoBase {
  constructor(scene){
    this.scene=scene;
  }
 
  PlanoPrincipal() {
    nuevo=new Plano(this.scene);
    textura=t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    nuevo.crear_plano(-500, 0, 290, 5000, 2000, Math.PI / 2, 0, textura);

  }
}
