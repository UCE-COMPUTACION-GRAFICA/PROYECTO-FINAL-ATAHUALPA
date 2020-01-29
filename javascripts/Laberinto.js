class Laberinto{

crearLaberinto(){

//piso
t.crear_texturas("texturas/textura_piso_Mesa de trabajo 1.jpg", 1,1);


cu.crear_cubo(-2300, 0, 190, 1300, 10,1520, textura, false, 0, 0, 0, 1, 1, 1);


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



    //formas de laberinto 
t.crear_texturas("texturas/cipresverde.jpg", 2, 2);

//pasillo central 
cu.crear_cubo(-2400, 35, 150, 250, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);
cu.crear_cubo(-2400, 35, 500, 250, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);

cu.crear_cubo(-2600, 35, 150, 250, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);
cu.crear_cubo(-2600, 35, 500, 250, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);


//izquierda grande
cu.crear_cubo(-2800, 35, 370, 710, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);

//derecha
cu.crear_cubo(-2100, 35, 70, 550, 70,100, textura, false, 0, 0, 0, 1, 1, 1);
//izquierda pequeño superior 
cu.crear_cubo(-2700, 35, 70, 100, 70,100, textura, false, 0, 0, 0, 1, 1, 1);


//forma 3
cu.crear_cubo(-1850, 35, 520, 540, 70,100, textura, false, 0, Math.PI/2, 0, 1, 1, 1);

//abajo inferior derecho
cu.crear_cubo(-2130, 35, 770, 650, 70,100, textura, false, 0, 0, 0, 1, 1, 1);

//abajo inferior izquierdo
cu.crear_cubo(-2700, 35, 770, 300, 70,100, textura, false, 0, 0, 0, 1, 1, 1);


//parte en la que se puede ingresar 
cu.crear_cubo(-2130, 35, 570, 250, 70,130, textura, false, 0, 0, 0, 1, 1, 1);



//BOVEDAS

//derecha
darColor=true;
cu.crear_cubo(-2400, 35, -400, 650, 70,200, null, false, 0, 0, 0, 1, 1, 1, 0xFFFFFF);



}


}