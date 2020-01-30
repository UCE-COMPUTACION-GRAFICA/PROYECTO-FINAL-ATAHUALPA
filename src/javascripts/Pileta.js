import * as THREE from "three";
import Cubo from "./Cubo";
import Textura from "./Textura";
import Torus from "./Torus";
import SemiEsfera from "./SemiEsfera";
//import { pil, cu, cubo, t, textura,to, torus,ses,semisphere } from "../Principal";


var cu=new Cubo(this.scene);
var t=new Textura();
var to=new Torus(this.scene);
var ses=new SemiEsfera(this.scene);
var pil=new Object3D(this.scene);
var FiguraP,textura;

export default class Pileta {
  constructor(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    scene
   
  ) {
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.pos_z = pos_z;

    this.rot_x = rot_x;
    this.rot_y = rot_y;
    this.rot_z = rot_z;

    this.esc_x = esc_x;
    this.esc_y = esc_y;
    this.esc_z = esc_z;
   this.scene=scene;
  }

  dibujarPileta() {
   textura=t.crear_texturas("texturas/muro3.jpg", 1, 1);
    cu.crear_cubo(168, 25, 375, 35, 20, 35, textura, false, 0, 0, 0, 1, 1, 1);
    pil.add(cubo);
    // t.crear_texturas("texturas/piedra.webp", 0.5, 0.5);
    cu.crear_cubo(168, 35, 375, 40, 3, 36, textura, false, 0, 0, 0, 1, 1, 1);
    pil.add(cubo);
    //arriba
    cu.crear_cubo(170, 75, 375, 15, 4, 20, textura, false, 0, 0, 0, 1, 1, 1);
    pil.add(cubo);
    cu.crear_cubo(170, 77, 375, 10, 4, 15, textura, false, 0, 0, 0, 1, 1, 1);
    pil.add(cubo);
    //para crear el torus que formara la pila
    to.crear_toro(
      168,
      25,
      375,
      60,
      5,
      5,
      8,
      Math.PI / 2,
      0,
      0,
      1,
      1,
      2.5,
      0x6e6e6e
    );
    pil.add(torus); 
    // intermedio
    to.crear_toro(
      168,
      15.5,
      375,
      60,
      5,
      5,
      8,
      Math.PI / 2,
      0,
      0,
      1.1,
      1.1,
      1.1,
      0x585858
    );
    pil.add(torus);
    to.crear_toro(
      168,
      15,
      375,
      60,
      5,
      5,
      8,
      Math.PI / 2,
      0,
      0,
      1.2,
      1.2,
      1.2,
      0x6e6e6e
    );
    pil.add(torus);

    this.cargar_figuraPileta(152, 35, 363, 0, 0, 0, 1, 1, 1, 25, 0x585858);

    pil.add(FiguraP);

    ses.cargar_semiesfera(
      170,
      98,
      375,
      Math.PI,
      0,
      0,
      1,
      1,
      1,
      textura,
      false,
      20,
      8,
      6,
      0,
      6.3,
      0,
      1.1
    );
    pil.add(semisphere);

    pil.position.x = this.pos_x;
    pil.position.y = this.pos_y;
    pil.position.z = this.pos_z;

    pil.rotation.x = this.rot_x;
    pil.rotation.y = this.rot_y;
    pil.rotation.z = this.rot_z;

    pil.scale.x = this.esc_x;
    pil.scale.y = this.esc_y;
    pil.scale.z = this.esc_z;

    return pil;

  }

  cargar_figuraPileta(
    pos_x,
    pos_y,
    pos_z,
    rot_x,
    rot_y,
    rot_z,
    esc_x,
    esc_y,
    esc_z,
    prof,
    c
  ) {
    // Geometría
    var Geometria = new THREE.Geometry();
    var array_extrude = [];
    var vertices = [
      [-3, 0, 0],
      [35, 0, 0],
      [28, 40, 45],
      [8, 40, 45],
      [-3, 0, 0]
    ];
    var long_vertices = vertices.length;
    for (i = 0; i < long_vertices; i++) {
      var x = vertices[i][0];
      var y = vertices[i][1];
      var z = vertices[i][2];
      //Agregamos vértices al vector
      var Vector = new THREE.Vector3(x, y, z);
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
    var Material = new THREE.ParticleBasicMaterial({ color: c });
    // creamos una partícula con la geometría y el material
    FiguraP = new THREE.Mesh(extrude_geometria, Material);
    // agregamos la partícula al escenario

    FiguraP.position.x = pos_x;
    FiguraP.position.y = pos_y;
    FiguraP.position.z = pos_z;

    FiguraP.rotation.x = rot_x;
    FiguraP.rotation.y = rot_y;
    FiguraP.rotation.z = rot_z;

    FiguraP.scale.x = esc_x;
    FiguraP.scale.y = esc_y;
    FiguraP.scale.z = esc_z;

    this.scene.add(FiguraP);
    return FiguraP;
    
  }
}
