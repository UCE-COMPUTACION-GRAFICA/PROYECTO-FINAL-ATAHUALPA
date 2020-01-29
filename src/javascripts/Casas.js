class Casas{


crear_casa(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){



this.suelo();

this.casa1();
this.casa2();
this.casa3();
this.casa4();
this.casa5();
this.casa6();
this.casa7();

    }


    suelo(){
//suelo 

t.crear_texturas("texturas/adoquin2.jpg", 15, 15);
cu.crear_cubo(1400, -3, -240, 500, 10,800, textura, false, 0, 0, 0, 1, 1, 1);




    }
 casa1 (){
//casa blanca
   // t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
   //parte cubo de base blanco
   darColor=true;
    cu.crear_cubo(1450, 130, -550, 400, 300,300, null, false, 0, 0, 0, 1, 1, 1,0xFFFFFF);
//textura de piedra de abajo

 }

 casa2(){

//patio
    t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    cu.crear_cubo(1470, 10, -300, 400, 20,200, textura, false, 0, 0, 0, 1, 1, 1);
      

    
    //parte frontal
    
    t.crear_texturas("texturas/piedra.webp", 15, 15);
    cu.crear_cubo(1270, 20, -300, 20, 50,200, textura, false, 0, 0, 0, 1, 1, 1);
     

//casa 2
        t.crear_texturas("texturas/amarillo.jpg", 15, 15);
        cu.crear_cubo(1500, 50, -125, 400, 110,150, textura, false, 0, 0, 0, 1, 1, 1);
            
                
         t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
        cu.crear_cubo(1450, 110, -125, 400, 20,160, textura, false, 0, 0, 0, 1, 1, 1);
                        







 }

 casa3(){


                    
//t.crear_texturas("texturas/muro3.jpg", 15, 15);
cu.crear_cubo(1450, 70, 45, 400, 130,180,null, false, 0, 0, 0, 1, 1, 1, 0xFF00FF);




 }


 casa4(){
    cu.crear_cubo(1450, 70, 350, 400, 150,200,null, false, 0, 0, 0, 1, 1, 1, 0xFF00FF);


 }

 casa5(){
    cu.crear_cubo(1450, 70, 550, 400, 80,180,null, false, 0, 0, 0, 1, 1, 1, 0xFF00FF);
 }

 casa6(){
    cu.crear_cubo(1450, 70, 650, 400, 80,180,null, false, 0, 0, 0, 1, 1, 1, 0xFF00FF);
 }

 casa7(){
    cu.crear_cubo(1450, 70, 750, 400, 150,200,null, false, 0, 0, 0, 1, 1, 1, 0xFF00FF);


 }

}