//Librerias
import * as THREE from "three";
import * as WindowResize from "three-window-resize";
import KeyboardState from "./javascripts/libs/THREEx.KeyboardState";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Detector from "./javascripts/libs/Detector";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "./javascripts/libs/Stats";
import FullScreen from "./javascripts/libs/THREEx.FullScreen";
//CLASES
import Agua from "./javascripts/Agua";
import Arbol from "./javascripts/Arbol";
import Bancas from "./javascripts/Bancas";
import Casas from "./javascripts/Casas";
import Cilindro from "./javascripts/Cilindro";

import Esfera from "./javascripts/Esfera";
import Fondo from "./javascripts/Fondo";
import Iglesia from "./javascripts/Iglesia";
import Laberinto from "./javascripts/Laberinto";
import Lamparas from "./javascripts/Lamparas";
import Modelo3D from "./javascripts/Modelo3D";
import Pileta from "./javascripts/Pileta";
import Plano from "./javascripts/Plano";
import PlanoBase from "./javascripts/PlanoBase";
import SemiCilindro from "./javascripts/SemiCilindro";
import SemiEsfera from "./javascripts/SemiEsfera";
import Texto from "./javascripts/Texto";
import Textura from "./javascripts/Textura";
import Torus from "./javascripts/Torus";
import Parque from "./javascripts/Parque";
import Cubo from "./javascripts/Cubo";

var textGeom, textMaterial, stats, controls;

//CREACION DE ESCENA
export var scene = new THREE.Scene();

var ancho = window.innerWidth,
  largo = window.innerHeight;
var angulo = 45,
  aspecto = ancho / largo,
  cerca = 0.1,
  lejos = 10000;
var camera = new THREE.PerspectiveCamera(angulo, aspecto, cerca, lejos);
var renderer = new THREE.WebGLRenderer();
var teclado = new KeyboardState();
WindowResize(renderer, camera); //se adapta al tamaño de la pantalla




//DECLARACION DE OBJETOS
var f = new Fondo(scene);
var p = new PlanoBase(scene);
var par = new Parque(scene);
var i,pi; 
var ca = new Casas(scene);
var lab = new Laberinto(scene);



//hacerObjetos3D();
/****************************llamado de funciones************************/
inicio();
animacion();

//********************INICIO**********************
function inicio() {
  // RENDERER
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(ancho, largo);
  document.body.appendChild(renderer.domElement);
  material = new THREE.MeshBasicMaterial({ color: 0x00ff0000 });
  //CAMARAS
  camera.position.z = 1000;
  camera.position.y = 100;
  // EVENTS
  WindowResize(renderer, camera);
  FullScreen.bindKey({ charCode: "m".charCodeAt(0) });
  controls = new OrbitControls(camera, renderer.domElement);
  //para no salirse del skybox
  //controls.minDistance = 500;
  //controls.maxDistance = 1500;
  
  // STATS corresponde a los fotogramas por segundo
  stats = new Stats();
  stats.domElement.style.position = "absolute";
  stats.domElement.style.bottom = "0px";
  stats.domElement.style.zIndex = 100;
  document.body.appendChild(stats.domElement);
  //probar texto 3D
  // texto3();

  //creamos los objetos de la escena en forma de capas
  f.crearFondo();
  p.PlanoPrincipal();
  par.crearParque();
  i = new Iglesia(40, 30, 0, 0, 0, 0, 0.7, 1, 1, scene);
  i.crearIglesia();
  pi = new Pileta(0, 0, 30, 0, 0, 0, 1, 1, 1, scene);
  pi.dibujarPileta();
  //CASAS de lado izquierdo del parque central
  ca.crear_casa(0, 0, 0, 0, 0, 0, 1, 1, 1);
  lab.crearLaberinto();

  // var nuevoTexto=new Texto();
  // nuevoTexto.crearTexto();
}

function texto3() {
  var loader = new THREE.FontLoader();

  loader.load(
    "three.js-master/examples/fonts/helvetiker_regular.typeface.json",
    function(font) {
      textGeom = new THREE.TextGeometry("Hello three.js!", {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
      });
    }
  );

  textMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  var textMesh = new THREE.Mesh(textGeom, textMaterial);

  textGeom.computeBoundingBox();

  // var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
  textMesh.position.set(0, 0, 0);

  //textMesh.rotation.x = -Math.PI / 4;
  scene.add(textMesh);
}
/*
function hacerObjetos3D() {
  //Iglesia
  pivotPoint,
    pivotPuerta,
    pivotPuerta2,
    pivotPuerta3,
    pivotPuerta4,
    (pivotPuerta5 = new THREE.Object3D());
  //ventanas y figuras de los lados de la iglesia y base de la misma
  Puertapeque1,
   Puertapeque2,
    ventana1,
    ventana2,
    ventana3,
    ventana4,
    lado1,
    lado2,
    (baseiglesia = new THREE.Object3D());
  //pileta y las diferentes bancas
  pil,
    ban,
    ban1,
    ban2,
    ban3,
    ban4,
    ban6,
    ban7,
    ban8,
    (ban9 = new THREE.Object3D());
  //las diferentes lamparas
  lmp,
    lmp1,
    lmp2,
    lmp3,
    lmp4,
    lmp5,
    lmp6,
    lmp7,
    lmp8,
    lmp9,
    lmp10,
    lmp11,
    lmp12,
    lmp13,
    lmp14,
    lmp15,
    lmp16,
    lmp17,
    lmp18,
    lmp19,
    lmp20,
    lmp21,
    lmp22,
    lmp23,
    lmp24,
    lmp25,
    lmp26,
    lmp27,
    lmp28,
    lmp29,
    lmp30,
    lmp31,
    lmp32,
    lmp33,
    (lmp34 = new THREE.Object3D());
  //arboles y flores
  arbl,
  arbl1,
    arbl2,
    arbl3,
    flr,
    flr1,
    flr2,
    flr3,
    flr4,
    (flr5 = new THREE.Object3D());
}
*/

function animacion() {
  requestAnimationFrame(animacion);
  /* obj_mov=cubo;*/

  if (teclado.pressed("up")) {
    camera.position.z -= 2;
  }

  if (teclado.pressed("down")) {
    camera.position.z += 2;
  }

  if (teclado.pressed("right")) {
    camera.position.x += 2;
  }

  if (teclado.pressed("left")) {
    camera.position.x -= 2;
  }
  if (teclado.pressed("Q")) {
    camera.position.y += 1;
  }
  if (teclado.pressed("A")) {
    camera.position.y -= 1;
  }
  //controls.target.set(camera.position.x,camera.position.y,camera.position.z);
  render_modelo();
}

function render_modelo() {
  controls.update();
  stats.update();

  renderer.render(scene, camera);
}
