class Casas{


crear_casa(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){



this.suelo(0,0,0,0,0,0,1,1,1);

this.casa1(0,0,0,0,0,0,1,1,1);
this.casa2(0,0,0,0,0,0,1,1,1);
this.casa3(0,0,0,0,0,0,1,1,1);



    }


    suelo(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){
//suelo 
t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
cu.crear_cubo(1400, -3, -220, 500, 10,920, textura, false, 0, 0, 0, 1, 1, 1);

cubo.position.x=pos_x;
cubo.position.y=pos_y;
cubo.position.z=pos_z;

cubo.rotation.x=rot_x;
cubo.rotation.y=rot_y;
cubo.rotation.z=rot_z;

cubo.scale.x=esc_x;
cubo.scale.y=esc_y;
cubo.scale.z=esc_z;

    scene.add(cubo);


    }
 casa1 (pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){
//casa blanca
    t.crear_texturas("texturas/ad_blanco.jpg", 15, 15);
    cu.crear_cubo(1450, 130, -550, 400, 300,300, textura, false, 0, 0, 0, 1, 1, 1);
    cubo.position.x=pos_x;

    //hay que hacerles objetos 3D a cada casa
cubo.position.y=pos_y;
cubo.position.z=pos_z;

cubo.rotation.x=rot_x;
cubo.rotation.y=rot_y;
cubo.rotation.z=rot_z;

cubo.scale.x=esc_x;
cubo.scale.y=esc_y;
cubo.scale.z=esc_z;

        scene.add(cubo);
 }

 casa2(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){

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




                        cubo.position.x=pos_x;
cubo.position.y=pos_y;
cubo.position.z=pos_z;

cubo.rotation.x=rot_x;
cubo.rotation.y=rot_y;
cubo.rotation.z=rot_z;

cubo.scale.x=esc_x;
cubo.scale.y=esc_y;
cubo.scale.z=esc_z;


 }

 casa3(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){


                    
t.crear_texturas("texturas/muro3.jpg", 15, 15);
cu.crear_cubo(1450, 70, 45, 400, 150,180, textura, false, 0, 0, 0, 1, 1, 1);


    scene.add(cubo);

    cubo.position.x=pos_x;
cubo.position.y=pos_y;
cubo.position.z=pos_z;

cubo.rotation.x=rot_x;
cubo.rotation.y=rot_y;
cubo.rotation.z=rot_z;

cubo.scale.x=esc_x;
cubo.scale.y=esc_y;
cubo.scale.z=esc_z;


 }

}