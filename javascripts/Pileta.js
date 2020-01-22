class Pileta{

      dibujarPileta(){

        t.crear_texturas("texturas/muro3.jpg", 1, 1);
          cu.crear_cubo(
            168,
            25,
            375,
            35,
            20,
            35,
            textura,
            false,
            0,
            0,
            0,
            1,
            1,
            1
          );
         // t.crear_texturas("texturas/piedra.webp", 0.5, 0.5);
          cu.crear_cubo(
            168,
            35,
            375,
            40,
            3,
            36,
            textura,
            false,
            0,
            0,
            0,
            1,
            1,
            1
          );
        
              //arriba

          cu.crear_cubo(
            170,
            75,
            375,
            15,
            4,
            20,
            textura,
            false,
            0,
            0,
            0,
            1,
            1,
            1
          );

          cu.crear_cubo(
            170,
            77,
            375,
            10,
            4,
            15,
            textura,
            false,
            0,
            0,
            0,
            1,
            1,
            1
          );



        //para crear el torus que formara la pila
        to.crear_toro(168,25,375,60,5,5,8,Math.PI/2,0,0,1,1,2.5, 0x6E6E6E);
         // intermedio
         to.crear_toro(168,15.5,375,60,5,5,8,Math.PI/2,0,0,1.1,1.1,1.1,0x585858 );
         to.crear_toro(168,15,375,60,5,5,8,Math.PI/2,0,0,1.2,1.2,1.2,0x6E6E6E );

        

       this.cargar_figuraPileta(152,35,363,0,0,0,1,1,1,25,0x585858);


       this.cargar_semiesfera(170,98,375,Math.PI,0,0,1,1,1,textura,false,20,8,6,0,6.3,0,1.1);

      


      }

    
       cargar_figuraPileta(pos_x, pos_y,pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z,prof,c ){
        // Geometría
        var Geometria=new THREE.Geometry();
        var array_extrude = [];
        var vertices=[
                        [-3,0,0],
                        [35,0,0],
                        [28,40,45],
                        [8,40,45],
                        [-3,0,0],


                        
        
                    ];
        var long_vertices=vertices.length;
        for(i=0;i<long_vertices;i++){
           var x=vertices[i][0];
           var y=vertices[i][1];
           var z=vertices[i][2];
            //Agregamos vértices al vector
           var Vector=new THREE.Vector3(x,y,z);
            //Agregamos el vector a la geometría
            Geometria.vertices.push(Vector);   
            array_extrude.push(Vector);
        }



//para dar profundidad
var nueva_figura = new THREE.Shape(array_extrude);
//excrusion
var datos_extrusion = {
  amount: prof, //cantidad de profundidad
  bevelEnabled: false, // activando bisel
  bevelSegments: 1, // segmentos del bisel
  steps: 10, // "profundidad y N�m. de segmentos que marcan la profundidad�
  bevelThickness: 100 // grosor del bisel
};

var extrude_geometria = new THREE.ExtrudeGeometry(
  nueva_figura,
  datos_extrusion
);

//Material de la figura
/*
var material = new THREE.MeshBasicMaterial({
  map: textura,
  side: THREE.DoubleSide,
  wireframe: sqr
});*/


        
        // agregamos un material para que el punto tenga color
       var Material=new THREE.ParticleBasicMaterial({color:c});
        // creamos una partícula con la geometría y el material
        var Figura=new THREE.Mesh(extrude_geometria,Material);
        // agregamos la partícula al escenario

        Figura.position.x=pos_x;
        Figura.position.y=pos_y;
        Figura.position.z=pos_z;

        Figura.rotation.x=rot_x;
        Figura.rotation.y=rot_y;
        Figura.rotation.z=rot_z;

        Figura.scale.x=esc_x;
        Figura.scale.y=esc_y;
        Figura.scale.z=esc_z;



        scene.add(Figura);
    }
     
      cargar_semiesfera(
        pos_x,
        pos_y,
        pos_z,
        rot_x,
        rot_y,
        rot_z,
        esc_x,
        esc_y,
        esc_z,
        textura,
        esq,
        radio,
        ws,
        hs,
        ps,
        pl,
        ts,
        tl){
        


        
        
          var geometry = new THREE.SphereGeometry(radio, ws, hs,ps,pl,ts,tl);
      
          var material = new THREE.MeshBasicMaterial({
            map: textura,
            side: THREE.DoubleSide,
            wireframe: esq
          });
      
         var semisphere = new THREE.Mesh(geometry, material);
      
          semisphere.position.x = pos_x;
          semisphere.position.y = pos_y;
          semisphere.position.z = pos_z;
      
          semisphere.rotation.x = rot_x;
          semisphere.rotation.y = rot_y;
          semisphere.rotation.z = rot_z;
      
          semisphere.scale.x = esc_x;
          semisphere.scale.y = esc_y;
          semisphere.scale.z = esc_z;


      scene.add(semisphere);
}
}


