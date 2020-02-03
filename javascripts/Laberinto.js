
var tu= new THREE.Object3D();
var tu1= new THREE.Object3D();
var tu2= new THREE.Object3D();
var tu3= new THREE.Object3D();
var tu4= new THREE.Object3D();
var tu5= new THREE.Object3D();
var tu6= new THREE.Object3D();
var tu7= new THREE.Object3D();

class Laberinto {
  crearLaberinto() {
    //piso
    t.crear_texturas("texturas/textura_piso_Mesa de trabajo 1.jpg", 1, 1);

    cu.crear_cubo(
      -2300,
      0,
      193,
      1300,
      10,
      1520,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );


    //parte de atras del terreno

    t.crear_texturas("texturas/cipres.jpg", 3, 3);
    cu.crear_cubo(
      -2300,
      50,
      -593,
      1230,
      100,
      300,
      textura,
      false,
      Math.PI/12,
     0,
      0,
      1,
      1,
      1
    );


    this.gradas();
    this.marco();
    this.lab();
    this.formas();
    this.bovedas();

//tumbas atras
// izquierda
this.tumbas(-2795,140,-310,6);
this.tumbas(-2795,110,-310,6);
this.tumbas(-2795,80,-310,6);
//derecha
this.tumbas(-2400,140,-310, 17);
this.tumbas(-2400,110,-310, 17);
this.tumbas(-2400,80,-310, 17);

// izquierda
this.tumbas(-2795,80,-157,6);
this.tumbas(-2795,50,-157,6);
this.tumbas(-2795,20,-157,6);
//derecha
this.tumbas(-2400,80,-159, 17);
this.tumbas(-2400,50,-159, 17);
this.tumbas(-2400,20,-159, 17);


tu=tu1;
this.tumbaT(0,0,0,0,0,0,1,1,1);
tu=tu2;
this.tumbaT(120,0,0,0,0,0,1,1,1);
tu=tu3;
this.tumbaT(240,0,0,0,0,0,1,1,1);
tu=tu4;
this.tumbaT(360,0,0,0,0,0,1,1,1);

tu=tu5;
this.tumbaT(60,0,220,0,0,0,1,1,1);
tu=tu6;
this.tumbaT(180,0,220,0,0,0,1,1,1);
tu=tu7;
this.tumbaT(300,0,220,0,0,0,1,1,1);

  }
tumbas(posx,posy, posz,num){
   
    var cont=0;
for(var i=0; i<num; i++){
    darColor=true;
    cu.crear_cubo(     
        posx+cont,
        posy,
        posz,
        27,
        20,
        5,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0xFFFFFF


    );

   
    darColor=true;
    cu.crear_cubo(     
        posx+cont,
        posy,
        posz,
        27,
        2,
        5,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0xA4A4A4
    );

      cont+=38;
}



}

lab(){    
    //FORMAS DEL LABERINTO 
    t.crear_texturas("texturas/cipresverde.jpg", 2, 2);

    //pasillo central
    cu.crear_cubo(
      -2400,
      35,
      150,
      250,
      70,
      100,
      textura,
      false,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      1
    );
    cu.crear_cubo(
      -2400,
      35,
      500,
      250,
      70,
      100,
      textura,
      false,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      1
    );

    cu.crear_cubo(
      -2600,
      35,
      150,
      250,
      70,
      100,
      textura,
      false,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      1
    );
    cu.crear_cubo(
      -2600,
      35,
      500,
      250,
      70,
      100,
      textura,
      false,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      1
    );

    //izquierda grande
    cu.crear_cubo(
      -2800,
      35,
      370,
      710,
      70,
      100,
      textura,
      false,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      1
    );

    //derecha
    cu.crear_cubo(
      -2100,
      35,
      70,
      550,
      70,
      100,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    //izquierda pequeño superior
    cu.crear_cubo(
      -2700,
      35,
      70,
      100,
      70,
      100,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );

    //forma 3
    cu.crear_cubo(
      -1850,
      35,
      520,
      540,
      70,
      100,
      textura,
      false,
      0,
      Math.PI / 2,
      0,
      1,
      1,
      1
    );

    //abajo inferior derecho
    cu.crear_cubo(
      -2130,
      35,
      770,
      650,
      70,
      100,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );

    //abajo inferior izquierdo
    cu.crear_cubo(
      -2700,
      35,
      770,
      300,
      70,
      100,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );

    //parte en la que se puede ingresar
    cu.crear_cubo(
      -2130,
      35,
      570,
      250,
      70,
      130,
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

bovedas(){
    //BOVEDAS

    //derecha
    darColor = true;
    cu.crear_cubo(
      -2100,
      50,
      -210,
      650,
      100,
      100,
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

    darColor = true;
    cu.crear_cubo(
      -2700,
      50,
      -210,
      250,
      100,
      100,
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

    darColor = true;
    cu.crear_cubo(
      -2100,
      110,
      -360,
      650,
      100,
      100,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xA4A4A4
    );

    darColor = true;
    cu.crear_cubo(
      -2700,
      110,
      -360,
      250,
      100,
      100,
      null,
      false,
      0,
      0,
      0,
      1,
      1,
      1,
      0xA4A4A4
    );
}

marco(){
  //marco que contiene todo el cementerio
  darColor = true;
  cu.crear_cubo(
    -2300,
    35,
    -720,
    1300,
    70,
    30,
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

  darColor = true;
  cu.crear_cubo(
    -2300,
    35,
    920,
    1300,
    70,
    30,
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

  //izquierda
  darColor = true;
  cu.crear_cubo(
    -2930,
    35,
    120,
    1650,
    70,
    30,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

  //peque derecha
  darColor = true;
  cu.crear_cubo(
    -1650,
    35,
    -440,
    580,
    70,
    30,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

  darColor = true;
  cu.crear_cubo(
    -1650,
    35,
    490,
    900,
    70,
    30,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

   //puertas principales 

   //dos columnas verticales
  darColor = true;
  cu.crear_cubo(
    -1645,
    75,
    20,
    40,
    150,
    30,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

  darColor = true;
  cu.crear_cubo(
    -1645,
    75,
    -170,
    40,
    150,
    30,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

  //parte encima de la entrada 

darColor = true;
  cu.crear_cubo(
    -1645,
   170,
    -75,
    230,
    40,
    30,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

//partes bordillos del marco principal

//abajo
  darColor = true;
  cu.crear_cubo(
    -1650,
    75,
    130,
    250,
    70,
    25,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );


  darColor = true;
  cu.crear_cubo(
    -1650,
    60,
    380,
    250,
    70,
    25,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

  darColor = true;
  cu.crear_cubo(
    -1650,
    45,
    630,
    250,
    70,
    25,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );


  //arriba

  darColor = true;
  cu.crear_cubo(
    -1650,
    75,
    -280,
    250,
    70,
    25,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

  darColor = true;
  cu.crear_cubo(
    -1650,
    90,
    -480,
    250,
    70,
    25,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );

  darColor = true;
  cu.crear_cubo(
    -1650,
    105,
    -625,
    220,
    70,
    25,
    null,
    false,
    0,
    Math.PI / 2,
    0,
    1,
    1,
    1,
    0xffffff
  );
  

}

gradas(){
      //gradas
      darColor = true;
      cu.crear_cubo(
        -2300,
        10,
        -370,
        1300,
        10,
        400,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0xa4a4a4
      );
  
      darColor = true;
      cu.crear_cubo(
        -2300,
        20,
        -380,
        1300,
        10,
        390,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0x848484
      );
  
      darColor = true;
      cu.crear_cubo(
        -2300,
        30,
        -390,
        1300,
        10,
        380,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0xa4a4a4
      );
  
      darColor = true;
      cu.crear_cubo(
        -2300,
        40,
        -400,
        1300,
        10,
        370,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0x848484
      );

      darColor = true;
      cu.crear_cubo(
        -2300,
        45,
        -445,
        1300,
        10,
        370,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0xa4a4a4
      );

      darColor = true;
      cu.crear_cubo(
        -2300,
        55,
        -460,
        1300,
        10,
        300,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0x848484
      );
  
}

formas(){
  //las diferentes formas y figuras que tienen los cipres 
  t.crear_texturas("texturas/cipresverde.jpg", 2.5, 2.5);
  ses.cargar_semiesfera(
    -2400,
    37,
    430,
   0,
    0,
    0,
    1,
    1.2,
    1,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );



  ses.cargar_semiesfera(
    -2400,
    30,
    560,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );

//mas ancho del lugar donde se debe entrar 
  ses.cargar_semiesfera(
    -2125,
    30,
    565,
   0,
    0,
    0,
    2,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );


  ses.cargar_semiesfera(
    -2400,
    30,
    80,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );


  //izquierdo primero 
  ses.cargar_semiesfera(
    -2600,
    30,
    80,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );

  ses.cargar_semiesfera(
    -2600,
    30,
    480,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );

  //izquierda ultimo
  ses.cargar_semiesfera(
    -2800,
    30,
    80,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );


  ses.cargar_semiesfera(
    -2800,
    30,
    380,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );

  ses.cargar_semiesfera(
    -2800,
    30,
    755,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );


  ses.cargar_semiesfera(
    -2150,
    30,
    755,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );

//primera derecha
  ses.cargar_semiesfera(
    -1850,
    30,
    755,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );


  ses.cargar_semiesfera(
    -1850,
    30,
    380,
   0,
    0,
    0,
    1,
    1.5,
    1.2,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );



  ses.cargar_semiesfera(
    -1880,
    30,
    70,
   0,
    0,
    0,
    1,
    1.5,
    1,
    textura,
    false,
    60,
    20,
    10,
    0,
    10,
    0,
    1.1
  );
}

//tumba de tierra
tumbaT(pos_x,pos_y,pos_z,rot_x,rot_y,rot_z,esc_x,esc_y,esc_z){
darColor=true;
//largo de piso
  cu.crear_cubo(
    -2300,
    10,
    190,
   40,
    70,
    10,
    null,
    false,
    Math.PI/2,
    0,
    0,
    1,
    1,
    1,
    0xFFFFFF
  );
tu.add(cubo);

  //alto
darColor=true;
  cu.crear_cubo(
    -2300,
    20,
    155,
   40,
    30,
    7,
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
  tu.add(cubo);

  //semicilindro que complementa
  darColor=true;
  sci.crearSemiCilindro(
    -2300,
    35,
    155,
    0,
    Math.PI / 2,
    Math.PI / 2,
    1,
    1,
    1,
    20,
    7,
    null,
    false,
    0xBDBDBD
  );
  tu.add(semiCilindro);



  tu.position.x=pos_x;
  tu.position.y=pos_y;
  tu.position.z=pos_z;

  tu.rotation.x=rot_x;
  tu.rotation.y=rot_y;
  tu.rotation.z=rot_z;

  tu.scale.x=esc_x;
  tu.scale.y=esc_y;
  tu.scale.z=esc_z;



}



}
