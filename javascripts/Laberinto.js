class Laberinto {
  crearLaberinto() {
    //piso
    t.crear_texturas("texturas/textura_piso_Mesa de trabajo 1.jpg", 1, 1);

    cu.crear_cubo(
      -2300,
      0,
      190,
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

    darColor = true;
    cu.crear_cubo(
      -2930,
      35,
      150,
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

    darColor = true;
    cu.crear_cubo(
      -1650,
      35,
      -390,
      500,
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

    //formas de laberinto
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

//tumbas
this.tumbas(-2805,140,-240,7);
this.tumbas(-2805,140,-240,7);

this.tumbas(-2405,100,-240, 7);

this.tumbas(-2805,140,-50,7);

  }
tumbas(posx,posy, posz,num){
   
    var cont=0;
for(var i=0; i<num; i++){
    darColor=true;
    cu.crear_cubo(     
        posx+cont,
        posy,
        posz,
        25,
        25,
        10,
        null,
        false,
        0,
        0,
        0,
        1,
        1,
        1,
        0x424242
    );
    cont+=35;
    
}



}


}
