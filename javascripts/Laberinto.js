class Laberinto{

crearLaberinto(){



    //marco que contiene todo el laberinto
    darColor=true;
    cu.crear_cubo(-2300, 35, -620, 1300, 70,30, null, false, 0, 0, 0, 1, 1, 1, 0xFFFFFF);

    darColor=true;
    cu.crear_cubo(-2300, 35, 920, 1300, 70,30, null, false, 0, 0, 0, 1, 1, 1, 0xFFFFFF);

    darColor=true;
    cu.crear_cubo(-2930, 35, 150, 1600, 70,30, null, false, 0, Math.PI/2, 0, 1, 1, 1, 0xFFFFFF);


    darColor=true;
    cu.crear_cubo(-1650, 35, -390, 500, 70,30, null, false, 0, Math.PI/2, 0, 1, 1, 1, 0xFFFFFF);

    darColor=true;
    cu.crear_cubo(-1650, 35, 490, 880, 70,30, null, false, 0, Math.PI/2, 0, 1, 1, 1, 0xFFFFFF);



    //forma de laberinto 1
t.crear_texturas("texturas/cipresverde.jpg", 2, 2);

cu.crear_cubo(-2400, 35, 350, 700, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);

cu.crear_cubo(-2600, 35, 350, 700, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);

//forma 2
cu.crear_cubo(-2100, 35, 70, 550, 70,100, textura, false, 0, 0, 0, 1, 1, 1);


//forma 3
cu.crear_cubo(-1850, 35, 520, 540, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);


cu.crear_cubo(-2100, 35, 570, 550, 70,100, textura, false, 0, 0, 0, 1, 1, 1);
}


}