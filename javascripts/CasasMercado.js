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


    casa1(pos_x, pos_y,_pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z){

        t.crear_texturas("texturas/lava.jpg ", 1, 1);
        cu.crear_cubo(-750, 50, 815, 100, 100, 150, textura, false, 0, 0, 0, 1, 1, 1);
        ca1.add(cubo);



    }

    casa2(){
        t.crear_texturas("texturas/Chrome.png ", 1, 1);
        cu.crear_cubo(-750, 50, 665, 100, 100, 150, textura, false, 0, 0, 0, 1, 1, 1);
        ca2.add(cubo);
    }

    casa3(){
        t.crear_texturas("texturas/lava.jpg ", 1, 1);
        cu.crear_cubo(-750, 50, 510, 150, 100, 150, textura, false, 0, 0, 0, 1, 1, 1);
        ca3.add(cubo);
    }

    casa4(){
        t.crear_texturas("texturas/Chrome.png ", 1, 1);
        cu.crear_cubo(-750, 50, 200, 150, 100, 250, textura, false, 0, 0, 0, 1, 1, 1);
        ca4.add(cubo);
    }

}