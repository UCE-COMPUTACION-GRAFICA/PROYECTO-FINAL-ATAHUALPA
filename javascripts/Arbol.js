
//arboles
var arbl = new THREE.Object3D();
var arbl1 = new THREE.Object3D();
var arbl2 = new THREE.Object3D();
var arbl3 = new THREE.Object3D();
var arbl4=new THREE.Object3D();
var arbl5=new THREE.Object3D();
var arbl6=new THREE.Object3D();
var arbl7=new THREE.Object3D();
var arbl8=new THREE.Object3D();
var arbl9=new THREE.Object3D();
var arbl10=new THREE.Object3D();
var arbl11=new THREE.Object3D();
var arbl12=new THREE.Object3D();
var arbl13=new THREE.Object3D();

var arbl14=new THREE.Object3D();
var arbl15=new THREE.Object3D();

class Arbol {
  crearArboles() {
      //arboles de la primera seccion izquierda superior 
    arb.FiguraArbol(-230, 15, 100, 0, 0, 0, 1.5, 1.2, 1.5,"texturas/cipresverde.jpg",3,3);
    arbl = arbl1;
    arb.FiguraArbol(-330, 15, 160, 0, 0, 0, 0.7, 1.4, 0.8,"texturas/cipresverde.jpg",3,3);
    arbl = arbl2;
//arboles de la seccion izquierda bajo la anterior
    arb.FiguraArbol(-200, 15, 460, 0, 0, 0, 0.7, 1.4, 0.8,"texturas/hojas.jpg",4,4);
    arbl = arbl3;

    arb.FiguraArbol(-150, 0, 410, 0, 0, 0, 0.4, 1.8, 0.5,"texturas/cipres.jpg",3,5);
    arbl = arbl4;
 
    arb.FiguraArbol(-280, 0, 480, 0, 0, 0, 0.7, 1.7, 0.7,"texturas/hojas.jpg",3,5);
    arbl = arbl9;

//arboles de abajo 
    

    arb.FiguraArbol(-50, 15, 660, 0, 0, 0, 0.7, 1.4, 0.8,"texturas/cipres.jpg",3,3);
    arbl = arbl6;

//arbol arriba derecha
    arb.FiguraArbol(330, 15, 200, 0, 0, 0, 0.7, 1.4, 0.8,"texturas/cipresverde.jpg",3,3);
    arbl = arbl5;
    //Arbustos
    //arriba derecha
    arb.FiguraArbol(370, 10, 200, 0, 0, 0, 1, 0.5, 0.7,"texturas/hojas.jpg",3,3);
    arbl = arbl7;
    //abajo
    arb.FiguraArbol(420, 10, 200, 0, 0, 0, 1, 0.5, 0.7,"texturas/hojas.jpg",3,3);
    arbl = arbl8;

    arb.FiguraArbol(170, 10, 750, 0, 0, 0, 1, 0.5, 0.7,"texturas/hojas.jpg",3,3);
    arbl = arbl9;

    //arboles de la derecha abajo
    arb.FiguraArbol(450, 15, 500, 0, 0, 0, 0.7, 1.2, 0.8,"texturas/cipresverde.jpg",3,3);
    arbl = arbl13;

    arb.FiguraArbol(200, 15, 600, 0, 0, 0, 0.7, 1.1, 0.8,"texturas/cipres.jpg",3,3);
    arbl = arbl11;

    arb.FiguraArbol(-40, 15, 700, 0, 0, 0, 0.9, 1.2, 0.8,"texturas/cipresverde.jpg",3,3);
    arbl = arbl12;
    //arbustos circulares
    t.crear_texturas("texturas/hojas.jpg", 4, 4);
    to.crear_toro(370,20,760,10, 3, 16, 100 ,Math.PI/2,0,0,4,2,5,textura);

    


  }

  FiguraArbol(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z,texturaArbol,pa,pb) {
    t.crear_texturas("texturas/textura_madera.jpg", 1, 2);
    ci.crearCilindro(100, 10, 100, 0, 0, 0, 1, 1, 1, 7, 50, textura, false);
    arbl.add(cilindro);

    darColor = true;
    //palos pequeños
    ci.crearCilindro(
      100,
      30,
      110,
      Math.PI / 5,
      0,
      0,
      1,
      1,
      1,
      1,
      20,
      null,
      false,
      0x61210B
    );
    arbl.add(cilindro);

    darColor = true;

    ci.crearCilindro(
      100,
      30,
      90,
      -Math.PI / 5,
      0,
      0,
      1,
      1,
      1,
      1,
      20,
      null,
      false,
      0x61210B
    );
    arbl.add(cilindro);

    darColor = true;

    ci.crearCilindro(
      90,
      30,
      100,
      0,
      0,
      Math.PI / 5,
      1,
      1,
      1,
      1,
      20,
      null,
      false,
      0x61210B
    );
    arbl.add(cilindro);

    darColor = true;
    ci.crearCilindro(
      110,
      30,
      100,
      0,
      0,
      -Math.PI / 5,
      1,
      1,
      1,
      1,
      20,
      null,
      false,
      0x61210B
    );
    arbl.add(cilindro);

    //capa de arbol
    t.crear_texturas(texturaArbol, pa, pb);

    e.crear_esfera(100, 60, 100, 0, 0, 0, 1, 1, 1, textura, false, 30, 10, 10);
    arbl.add(sphere);

    e.crear_esfera(100, 50, 80, 0, 0, 0, 1, 1, 1.2, textura, false, 20, 5, 10);
    arbl.add(sphere);

    e.crear_esfera(100, 50, 120, 0, 0, 0, 1, 1, 1.2, textura, false, 20, 5, 7);
    arbl.add(sphere);

    e.crear_esfera(
      120,
      50,
      100,
      0,
      Math.PI / 4,
      0,
      1.4,
      0.8,
      1.4,
      textura,
      false,
      20,
      5,
      7
    );
    arbl.add(sphere);

    e.crear_esfera(
      80,
      50,
      100,
      0,
      Math.PI / 4,
      0,
      1.4,
      0.8,
      1.4,
      textura,
      false,
      20,
      10,
      5
    );
    arbl.add(sphere);

    e.crear_esfera(100, 85, 100, 0, 0, 0, 1, 1, 1, textura, false, 15, 10, 5);
    arbl.add(sphere);

    arbl.position.x = pos_x;
    arbl.position.y = pos_y;
    arbl.position.z = pos_z;

    arbl.rotation.x = rot_x;
    arbl.rotation.y = rot_y;
    arbl.rotation.z = rot_z;

    arbl.scale.x = esc_x;
    arbl.scale.y = esc_y;
    arbl.scale.z = esc_z;
  }
}
