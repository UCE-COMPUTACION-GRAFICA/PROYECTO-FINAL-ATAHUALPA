var lA = new THREE.Object3D();
var lT = new THREE.Object3D();
var lA1 = new THREE.Object3D();
var lH = new THREE.Object3D();
var lU = new THREE.Object3D();
var lA2 = new THREE.Object3D();
var lL = new THREE.Object3D();
var lP = new THREE.Object3D();
var lA3 = new THREE.Object3D();
var lA4 = new THREE.Object3D();
var atahualpa = new THREE.Object3D();
var atahualpa1 = new THREE.Object3D();

class Letras {
  constructor(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z,t) {
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.pos_z = pos_z;
    this.rot_x = rot_x;
    this.rot_y = rot_y;
    this.rot_z = rot_z;
    this.esc_x = esc_x;
    this.esc_y = esc_y;
    this.esc_z = esc_z;
    this.t=t;

  }

  crearLetras() {
    lA = lA1;
    this.letraA(0, 0, 0, 0, 0, 0, 1, 1, 1);
    atahualpa.add(lA);
    this.letraT(0, 0, 0, 0, 0, 0, 1, 1, 1);
    atahualpa.add(lT);
    lA = lA2;
    this.letraA(25, 0, 0, 0, 0, 0, 1, 1, 1);
    atahualpa.add(lA);

    this.letraH(0, 0, 0, 0, 0, 0, 1, 1, 1);
    atahualpa.add(lH);

    this.letraU(0, 0, 0, 0, 0, 0, 1, 1, 1);
    atahualpa.add(lU);

    lA = lA3;
    this.letraA(75, 0, 0, 0, 0, 0, 1, 1, 1);
    atahualpa.add(lA);

    this.letraL(0,0,0,0,0,0,1,1,1);
    atahualpa.add(lL);

    this.letraP(0,0,0,0,0,0,1,1,1);
    atahualpa.add(lP);

    lA = lA4;
    this.letraA(115, 0, 0, 0, 0, 0, 1, 1, 1);
    atahualpa.add(lA);





     
  atahualpa.position.x = this.pos_x;
  atahualpa.position.y = this.pos_y;
  atahualpa.position.z = this.pos_z;

  atahualpa.rotation.x = this.rot_x;
  atahualpa.rotation.y = this.rot_y;
  atahualpa.rotation.z = this.rot_z;

  atahualpa.scale.x = this.esc_x;
  atahualpa.scale.y = this.esc_y;
  atahualpa.scale.z = this.esc_z;

  }

  //Metodos para las lETRAS EN 3D

  letraA(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    
    cu.crear_cubo(
      400,
      48,
      900,
      4,
      19,
      7,
      this.t,
      false,
      0,
      0,
      -Math.PI / 10,
      1,
      1,
      1,
      0xffffff
    );
    lA.add(cubo);

    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      406,
      48,
      900,
      4,
      19,
      7,
     this.t,
      false,
      0,
      0,
      Math.PI / 10,
      1,
      1,
      1,
      0xffffff
    );
    lA.add(cubo);

   if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }

    cu.crear_cubo(
      403,
      45,
      900,
      5,
      3,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lA.add(cubo);

    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      403,
      56,
      900,
      3,
      3,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lA.add(cubo);

    lA.position.x = pos_x;
    lA.position.y = pos_y;
    lA.position.z = pos_z;

    lA.rotation.x = rot_x;
    lA.rotation.y = rot_y;
    lA.rotation.z = rot_z;

    lA.scale.x = esc_x;
    lA.scale.y = esc_y;
    lA.scale.z = esc_z;
  }

  letraT(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    //vertical
    cu.crear_cubo(
      415,
      48,
      900,
      4,
      19,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lT.add(cubo);
    //horizontal
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      415,
      55.7,
      900,
      15,
      4,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lT.add(cubo);

    lT.position.x = pos_x;
    lT.position.y = pos_y;
    lT.position.z = pos_z;

    lT.rotation.x = rot_x;
    lT.rotation.y = rot_y;
    lT.rotation.z = rot_z;

    lT.scale.x = esc_x;
    lT.scale.y = esc_y;
    lT.scale.z = esc_z;
  }
  letraH(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    //vertical
    cu.crear_cubo(
      440,
      48,
      900,
      4,
      19,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lH.add(cubo);

    //intermedio

    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      445,
      48,
      900,
      13,
      4,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lH.add(cubo);
    
    //mas a la derecha

    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    //vertical
    cu.crear_cubo(
      450,
      48,
      900,
      4,
      19,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lH.add(cubo);

    lH.position.x = pos_x;
    lH.position.y = pos_y;
    lH.position.z = pos_z;

    lH.rotation.x = rot_x;
    lH.rotation.y = rot_y;
    lH.rotation.z = rot_z;

    lH.scale.x = esc_x;
    lH.scale.y = esc_y;
    lH.scale.z = esc_z;
  }

  letraU(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    //vertical
    cu.crear_cubo(
      458,
      49,
      900,
      4,
      17,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lU.add(cubo);

    //intermedio

    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      463,
      41,
      900,
      13,
      4,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lU.add(cubo);

    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    //mas a la derecha
    cu.crear_cubo(
      468,
      49,
      900,
      4,
      17,
      7,
     this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lU.add(cubo);

    lU.position.x = pos_x;
    lU.position.y = pos_y;
    lU.position.z = pos_z;

    lU.rotation.x = rot_x;
    lU.rotation.y = rot_y;
    lU.rotation.z = rot_z;

    lU.scale.x = esc_x;
    lU.scale.y = esc_y;
    lU.scale.z = esc_z;
  }

  letraL(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    //vertical
    cu.crear_cubo(
      489,
      49,
      900,
      4,
      17,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lL.add(cubo);

    //abajo
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      491,
      41,
      900,
      8,
      4,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lL.add(cubo);



    
    lL.position.x = pos_x;
    lL.position.y = pos_y;
    lL.position.z = pos_z;

    lL.rotation.x = rot_x;
    lL.rotation.y = rot_y;
    lL.rotation.z = rot_z;

    lL.scale.x = esc_x;
    lL.scale.y = esc_y;
    lL.scale.z = esc_z;
  }

  letraP(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    //vertical
    cu.crear_cubo(
      500,
      48,
      900,
      4,
      18,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lP.add(cubo);

    //parte de la p abajo
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      505,
      47,
      900,
      10,
      4,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lP.add(cubo);
//arriba
if(t==null){
  darColor = true;
}else{
  darColor = false;
}
    cu.crear_cubo(
      505,
      55,
      900,
      10,
      4,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lP.add(cubo);

    //vertical
    if(t==null){
      darColor = true;
    }else{
      darColor = false;
    }
    cu.crear_cubo(
      508,
      51,
      900,
      4,
      12,
      7,
      this.t,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xffffff
    );
    lP.add(cubo);



    
    
    lP.position.x = pos_x;
    lP.position.y = pos_y;
    lP.position.z = pos_z;

    lP.rotation.x = rot_x;
    lP.rotation.y = rot_y;
    lP.rotation.z = rot_z;

    lP.scale.x = esc_x;
    lP.scale.y = esc_y;
    lP.scale.z = esc_z;
  }



 


}
