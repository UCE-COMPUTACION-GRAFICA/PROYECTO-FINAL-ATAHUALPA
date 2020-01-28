class Arbol{

crearArboles(){

    arb.FiguraArbol(-230,15,100,0,0,0,1.5,1.2,1.5);
    arbl=arbl1;
    arb.FiguraArbol(-330,15,160,0,0,0,0.7,1.4,0.8);
    arbl=arbl2;
    arb.FiguraArbol(-330,15,160,0,0,0,0.7,1.4,0.8);

}



FiguraArbol(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z,esc_x, esc_y, esc_z){

    
    t.crear_texturas("texturas/textura_madera.jpg", 1, 2);
    ci.crearCilindro(100,10,100,0,0,0,1,1,1,7,50,textura,false);
    arbl.add(cilindro);


    darColor=true;
    //palos pequeños
    ci.crearCilindro(100,30,110,Math.PI/5,0,0,1,1,1,1,20,null,false,0xFF22FF);
    arbl.add(cilindro);

    darColor=true;

    ci.crearCilindro(100,30,90,-Math.PI/5,0,0,1,1,1,1,20,null,false,0xFF22FF);
    arbl.add(cilindro);

    darColor=true;

    ci.crearCilindro(90,30,100,0,0,Math.PI/5,1,1,1,1,20,null,false,0xFF00FF);
    arbl.add(cilindro);

   darColor=true;
    ci.crearCilindro(110,30,100,0,0,-Math.PI/5,1,1,1,1,20,null,false,0xFF00FF);
    arbl.add(cilindro);

    //capa de arbol
    t.crear_texturas("texturas/cipresverde.jpg", 3, 3);

    e.crear_esfera(100,60,100,0,0,0,1,1,1,textura,false,30,10,10);
    arbl.add(sphere);


    e.crear_esfera(100,50,80,0,0,0,1,1,1.2,textura,false,20,5,10);
    arbl.add(sphere);

    e.crear_esfera(100,50,120,0,0,0,1,1,1.2,textura,false,20,5,7);
    arbl.add(sphere);


    e.crear_esfera(120,50,100,0,Math.PI/4,0,1.4,0.8,1.4,textura,false,20,5,7);
    arbl.add(sphere);

    e.crear_esfera(80,50,100,0,Math.PI/4,0,1.4,0.8,1.4,textura,false,20,10,5);
    arbl.add(sphere);


    e.crear_esfera(100,85,100,0,0,0,1,1,1,textura,false,15,10,5);
    arbl.add(sphere);






    arbl.position.x=pos_x;
    arbl.position.y=pos_y;
    arbl.position.z=pos_z;

    arbl.rotation.x=rot_x;
    arbl.rotation.y=rot_y;
    arbl.rotation.z=rot_z;

    arbl.scale.x=esc_x;
    arbl.scale.y=esc_y;
    arbl.scale.z=esc_z;

}

}