
var nube=new THREE.Object3D();
class Nube{


    crearNube(pos_x,pos_y,pos_z,rot_x,rot_y,rot_z,esc_x,esc_y,esc_z){
        t.crear_texturas("texturas/blanco.jpg");

        e.crear_esfera(100, 60, 100, 0, 0, 0, 4, 1, 1, textura, false, 100, 10, 10);
        nube.add(sphere);
        e.crear_esfera(200, 100, 100, 0, 0, 0, 3, 1, 1, textura, false, 100, 10, 10);
        nube.add(sphere);

        e.crear_esfera(110, 100, 100, 0, 0, 0, 1, 4, 1, textura, false, 20, 10, 10);
        nube.add(sphere);




        //otra nube

    e.crear_esfera(-1500, 60, -700, 0, 0, 0, 5, 1, 1, textura, false, 100, 10, 10);
        nube.add(sphere);
        e.crear_esfera(-1400, 100, -700, 0, 0, 0, 3, 1, 1, textura, false, 100, 10, 10);
        nube.add(sphere);

        e.crear_esfera(-1510, 110, -700, 0, 0, 0, 1, 4, 1, textura, false, 20, 10, 10);
        nube.add(sphere);



        nube.position.x = pos_x;
        nube.position.y = pos_y;
        nube.position.z = pos_z;
    
        nube.rotation.x = rot_x;
        nube.rotation.y = rot_y;
        nube.rotation.z = rot_z;
    
        nube.scale.x = esc_x;
        nube.scale.y = esc_y;
        nube.scale.z = esc_z;
    
        scene.add(nube);
return nube;


    }
   
    
}