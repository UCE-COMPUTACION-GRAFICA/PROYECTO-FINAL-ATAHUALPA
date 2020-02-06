var ca1=new THREE.Object3D();
var ca2=new THREE.Object3D();
var ca3=new THREE.Object3D();
var ca4=new THREE.Object3D();

var casas=new THREE.Object3D();
class CasasMercado{


crearCasas(){

    //suelo

    t.crear_texturas("texturas/Chrome.png ", 1, 1);
    cu.crear_cubo(-1000, 5, 490, 700, 7, 900, textura, false, 0, 0, 0, 1, 1, 1);


    this.casa1();
    casas.add(ca1);
    this.casa2();
    casas.add(ca2);
    this.casa3();
    casas.add(ca3);
    this.casa4();
    casas.add(ca4);
    
}

//casas de abajo para arriba 
//primera fila

    casa1(pos_x, pos_y,_pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){

        //primer piso
        darColor=true;
        cu.crear_cubo(-750, 40, 815, 100, 100, 150, textura, false, 0, 0, 0, 1, 1, 1,0xEAEAAE);
        ca1.add(cubo);

        //ventana
        darColor=true;
        cu.crear_cubo(-700, 70, 780, 5, 30,50, textura, false, 0, 0, 0, 1, 1, 1,0x38B0DE);
        ca1.add(cubo);
        //puerta

  darColor=true;
  cu.crear_cubo(-680, 25, 820, 5, 30,30, textura, false, 0, 0, 0, 1, 1, 1,0x8E6B23);
  ca1.add(cubo);


        //segundo piso
        darColor=true;
        cu.crear_cubo(-750, 130, 815, 110, 80, 150, textura, false, 0, 0, 0, 1, 1, 1,0xDBDB70);
        ca1.add(cubo);

          //ventana
          darColor=true;
          cu.crear_cubo(-695, 140, 800, 5, 30,60, textura, false, 0, 0, 0, 1, 1, 1,0x38B0DE);
          ca1.add(cubo);


//terraza
        darColor=true;
        cu.crear_cubo(-750, 180, 815, 110, 20, 150, textura, false, 0, 0, 0, 1, 1, 1,0xFFFFFF);
        ca1.add(cubo);


    }

    casa2(){
        t.crear_texturas("texturas/Chrome.png ", 1, 1);
        cu.crear_cubo(-780, 50, 665, 150, 100, 150, textura, false, 0, 0, 0, 1, 1, 1);
        ca2.add(cubo);
    }

    casa3(){
        t.crear_texturas("texturas/lava.jpg ", 1, 1);
        cu.crear_cubo(-810, 50, 480, 150, 100, 150, textura, false, 0, 0, 0, 1, 1, 1);
        ca3.add(cubo);
    }

    casa4(){
        t.crear_texturas("texturas/Chrome.png ", 1, 1);
        cu.crear_cubo(-750, 50, 200, 150, 100, 250, textura, false, 0, 0, 0, 1, 1, 1);
        ca4.add(cubo);
    }




}