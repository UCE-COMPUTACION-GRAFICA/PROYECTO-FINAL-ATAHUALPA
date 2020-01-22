class Casas{


crear_casa(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){



this.suelo();

this.casa1();
this.casa2();
this.casa3();



    }


    suelo(){
//suelo 
t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
cu.crear_cubo(1400, -3, -220, 500, 10,920, textura, false, 0, 0, 0, 1, 1, 1);



    scene.add(cubo);


    }
 casa1 (){
//casa blanca
    t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    cu.crear_cubo(1450, 130, -550, 400, 300,300, textura, false, 0, 0, 0, 1, 1, 1);


        scene.add(cubo);
 }

 casa2(){

//patio
    t.crear_texturas("texturas/cesped.jpg", 15, 15);
    cu.crear_cubo(1470, 10, -300, 400, 20,200, textura, false, 0, 0, 0, 1, 1, 1);
        scene.add(cubo);

    
    //parte frontal
    
    t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    cu.crear_cubo(1270, 20, -300, 20, 50,200, textura, false, 0, 0, 0, 1, 1, 1);
        scene.add(cubo);

//casa 2
        t.crear_texturas("texturas/amarillo.jpg", 15, 15);
        cu.crear_cubo(1450, 50, -125, 400, 110,150, textura, false, 0, 0, 0, 1, 1, 1);
                scene.add(cubo);  
                
         t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
        cu.crear_cubo(1450, 110, -125, 400, 20,160, textura, false, 0, 0, 0, 1, 1, 1);
                        scene.add(cubo);  







 }

 casa3(){


                    
t.crear_texturas("texturas/muro3.jpg", 15, 15);
cu.crear_cubo(1450, 70, 45, 400, 150,180, textura, false, 0, 0, 0, 1, 1, 1);


    scene.add(cubo);




 }

}