/*//CREACION DE LA ESCENA
//"use strict";
//Physijs.scripts.worker = "javascripts/libs/physijs_worker.js";
//Physijs.scripts.ammo = "javascripts/libs/ammo.js";*/

//@Autor: Estefania Nicolalde
//fecha:13/02/2020

var scene = new THREE.Scene();
//var scene = new Physijs.Scene();
var ancho = window.innerWidth,
  largo = window.innerHeight;
var angulo = 45,
  aspecto = ancho / largo,
  cerca = 0.1,
  lejos = 10000;
var camera = new THREE.PerspectiveCamera(angulo, aspecto, cerca, lejos);
var renderer = new THREE.WebGLRenderer();
var teclado = new THREEx.KeyboardState();
THREEx.WindowResize(renderer, camera); //se adapta al tamaño de la pantalla

//DECLARACION DE VARIABLES
var figura, material, textura_fig, arbol;
var cubo;
var cono;
var sphere;
var cilindro;
var semiCilindro;
var controls;
var reloj;
var figura_j;
var plano;
var triangulo;
var mallaextrusion;
var modelo;
var torus;
var malla;
var FiguraP;
var semisphere;
var textura, textura2, textura_piedra, textura_cesped, loader;
var darColor = false;
var textGeom;
var textMaterial;
var container, stats;
var trasladaZ = 600;
var trasladaX = 210;
var trasladaY = 14;
var girarZ = Math.PI;
var numcam = 1;
var subir = true;
var bajar = false;
var limite_sup = 16;
var limite_inf = 14;
var su = true;
var ba = false;
var limite_arriba = 650;
var limite_abajo = -700;
var pil;
var abajo = false;
var delta = 0,
  delta2 = 0,
  seno,
  coseno,
  seno2,
  coseno2,
  radio = 10,
  radio2 = 15;
var mover = true;
var contA = -100,
  contB = 0;
var noche = false;

//DECLARACION DE OBJETOS
var ci = new Cilindro();
var nu = new Nube();
var sci = new SemiCilindro();
var cu = new Cubo();
var t = new Textura();
var e = new Esfera();
var a = new Parque();
var i = new Iglesia();
var ar = new Modelo3D();
var to = new Torus();
var pi = new Pileta();
var f = new Fondo();
var banca = new Bancas();
var banca1 = new Bancas();
var ses = new SemiEsfera();
var lamp = new Lamparas();
var arb = new Arbol();
var p = new PlanoBase();
var banca = new Bancas();
var ca = new Casas();
var lab = new Laberinto();
var cm = new CasasMercado();
var co = new Cono();
var carr = new Carro();

var light3;
/****************************llamado de funciones************************/
inicio();
animacion();

//********************INICIO**********************
function inicio() {
  //RENDERER
  if (Detector.webgl) renderer = new THREE.WebGLRenderer({ antialias: true });
  else renderer = new THREE.CanvasRenderer();
  renderer.setSize(ancho, largo);
  document.body.appendChild(renderer.domElement);
  material = new THREE.MeshBasicMaterial({ color: 0x00ff0000 });
  //CAMARAS
  //camara que sigue al objeto
  camera.position.x = 210;
  camera.position.z = 600;
  camera.position.y = 20;

  // EVENTS
  THREEx.WindowResize(renderer, camera);
  THREEx.FullScreen.bindKey({ charCode: "m".charCodeAt(0) });
  //controls = new THREE.OrbitControls(camera, renderer.domElement);
  //para no salirse del skybox
  //controls.minDistance = 500;
  //controls.maxDistance = 1500;

  // STATS corresponde a los fotogramas por segundo
  stats = new Stats();
  stats.domElement.style.position = "absolute";
  stats.domElement.style.bottom = "0px";
  stats.domElement.style.zIndex = 100;
  document.body.appendChild(stats.domElement);

  //LLAMADO Y EJECUCION DE LOS DIFERENTES ELEMENTOS
  //creamos los objetos de la escena en forma de capas
  CargarScenario();
}

function CargarScenario() {
  //Crea un SkyBox

  f.crearFondo();

  p.PlanoPrincipal();
  a.crearParque();
  var i = new Iglesia(40, 30, 0, 0, 0, 0, 0.7, 1, 1);
  i.crearIglesia();

  var pi = new Pileta(0, 0, 30, 0, 0, 0, 1, 1, 1);
  pi.dibujarPileta();

  t.crear_texturas("texturas/blanco_abstracto.jpg", 0.2, 0.8);
  var lt = new Letras(-9, -10, -81, 0, 0, 0, 1, 1, 1, textura);
  lt.crearLetras();

  cm.crearCasas();

  banca.crearBancas();
  //lamparas
  lamp.crearLamparas();

  //CASAS de lado izquierdo del parque central
  ca.crear_casa(0, 0, 0, 0, 0, 0, 1, 1, 1);
  lab.crearLaberinto();

  light3 = new THREE.PointLight(0x8a4b08, 4);

  ar.cargarModelo3D(
    "Modelos/Dog.glb",
    trasladaX,
    trasladaY,
    trasladaZ,
    0,
    Math.PI,
    0,
    4,
    4,
    4
  );

  nu.crearNube(700, 0, -980, 0, 0, 0, 1, 1, 1);

  //crear una pelota
  t.crear_texturas("texturas/balon_fut.jpg", 1, 0.69);

  e.crear_esfera(100, 20, 100, 0, 0, 0, 1.5, 1, 1, textura, false, 7, 10, 10);
  nuevaE = sphere;

  //poner un torus

  to.crear_toro(
    568,
    15,
    375,
    10,
    3,
    16,
    100,
    Math.PI / 2,
    0,
    0,
    1.2,
    1.2,
    1.2,
    null,
    0x6e6e6e
  );
  torit = torus;

  carr.crearCarro();
  //carrito = auto;
  //cargar carro
}
var nuevaE, nube2, torit, carrito;
function animacion() {
  requestAnimationFrame(animacion);

  //Camara numero 1 es para poder visualizar el avatar que realizará el recorrido virtual
  if (numcam == 1) {
    //sigue al perrito
    camera.lookAt(
      modelo.position.x,
      modelo.position.y + 10,
      modelo.position.z - 50
    );
    camera.position.x = modelo.position.x;
    camera.position.z = modelo.position.z + 20;
    camera.position.y = modelo.position.y + 14;
  }
  //camara panoramica de todo el escenario
  if (numcam == 2) {
    camera.rotation.set(-0.1965, 0.04098, 0.008156);
    camera.position.x = -458.52;
    camera.position.y = 659.86;
    camera.position.z = 2964.6417;
  }
  //camara estática para ver el parque desde la aprte superior de la iglesia
  if (numcam == 3) {
    camera.rotation.set(-2.3, 0.014, 3.12);
    camera.position.x = 189;
    camera.position.y = 580;
    camera.position.z = -211;
  }
  //mueve en forma eliptica

  if (numcam == 4) {
    camera.lookAt(modelo.position.x, modelo.position.y, modelo.position.z);

    camera.position.y = 800;
    camera.position.x = seno;
    camera.position.z = coseno;
  }

  if (numcam == 5) {
    camera.lookAt(pil.position.x, pil.position.y, pil.position.z);

    camera.position.y = 200;
    camera.position.x = seno2 + 100;
    camera.position.z = coseno2 + 600;
  }
  //camara para el cementerio
  if (numcam == 6) {
    camera.lookAt(modelo.position.x, modelo.position.y, modelo.position.z);

    camera.position.y = 300;
    camera.position.x = -1800;
    camera.position.z = 800;
  }

  if (numcam == 7) {
    camera.rotation.set(-0.1965, 0.04098, 0.008156);
    camera.lookAt(auto.position.x, auto.position.y , auto.position.z);
    
    camera.position.x = -458.52;
    camera.position.y = 459.86;
    camera.position.z = 2064.6417;

  }

  //console.log(camera);
  //controls.target.set(camera.position.x,camera.position.y,camera.position.z);
  Teclado();
  render_modelo();
}

function Teclado() {
  if (teclado.pressed("up")) {
    // camera.position.z -= 2;
    trasladaZ -= 2;
    girarZ = Math.PI;
    abajo = false;
    if (numcam == 1) {
      camera.rotation.y = 0;
      camera.position.x = modelo.position.x;
      camera.position.z = modelo.position.z + 20;
    }

    //camera.position.y =arbol.position.y + 14;
  }

  if (teclado.pressed("down")) {
    //  camera.position.z += 2;
    trasladaZ += 2;
    girarZ = 0;
    abajo = true;
    if (numcam == 1) {
      //virar camara
      camera.rotation.y = Math.PI;
      camera.position.x = modelo.position.x;
      camera.position.z = modelo.position.z - 15;
      camera.position.y = modelo.position.y + 10;
    }
  }

  if (teclado.pressed("right")) {
    //   camera.position.x += 2;
    trasladaX += 2;

    girarZ = Math.PI / 2;
    abajo = false;
    if (numcam == 1) {
      //virar camara
      camera.rotation.y = -Math.PI / 2;
      camera.position.x = modelo.position.x - 20;
      camera.position.z = modelo.position.z;
    }
  }

  if (teclado.pressed("left")) {
    //  camera.position.x -= 2;
    trasladaX -= 2;
    girarZ = -Math.PI / 2;
    abajo = false;
    if (numcam == 1) {
      //virar camara
      camera.rotation.y = Math.PI / 2;
      camera.position.x = modelo.position.x + 20;
      camera.position.z = modelo.position.z;
    }

    //trasladaX=trasladaZ;
  }
  if (teclado.pressed("Q")) {
    //  camera.position.y += 1;
    trasladaY += 2;
  }
  if (teclado.pressed("A")) {
    // camera.position.y -= 1;
    trasladaY -= 2;
  }
  //CAMARAS
  if (teclado.pressed("1")) {
    mover = false;
    numcam = 1;
  }

  if (teclado.pressed("2")) {
    mover = true;
    numcam = 2;
  }

  if (teclado.pressed("3")) {
    mover = true;
    numcam = 3;
  }

  if (teclado.pressed("4")) {
    mover = true;
    numcam = 4;
  }

  if (teclado.pressed("5")) {
    mover = true;
    numcam = 5;
  }
  if (teclado.pressed("6")) {
    if (mover == true) {
      trasladaX = -1800;
      trasladaZ = 0;
    }

    numcam = 6;
  }

  if (teclado.pressed("7")) {
    mover = true;
    numcam = 7;
  }

  if (teclado.pressed("P")) {
    radio += 1;
  }
  if (teclado.pressed("L")) {
    radio -= 1;
  }

  //volver al inicio
  if (teclado.pressed("V")) {
    trasladaX = 210;
    trasladaZ = 600;
    numcam = 1;
  }
}

function render_modelo() {
  //controls.update();
  stats.update();

  //movimiento del perrito
  modelo.position.x = trasladaX;
  modelo.position.y = trasladaY;
  modelo.position.z = trasladaZ;
  modelo.rotation.y = girarZ;

  //colision del perrito para que salte
  if (trasladaY < limite_sup && bajar == false) {
    trasladaY += 0.15;
    bajar = false;
    subir = true;
  } else {
    bajar = true;
    trasladaY -= 0.15;

    if (trasladaY < limite_inf && subir == true) {
      trasladaY += 0.15;
      bajar = false;
      // limite_sup -= 1;
    }
  }

  //motor de fisica
  //scene.simulate();

  //Crear Avatar
  light3.position.x = trasladaX;

  if (abajo == true) {
    light3.position.z = trasladaZ - 10;
    light3.position.y = trasladaY + 65;
  } else {
    light3.position.z = trasladaZ + 10;
    light3.position.y = trasladaY + 20;
  }
  //luces para el perrito
  scene.add(light3);

  //elipse
  seno = Math.sin(delta) * 3300;
  coseno = Math.cos(delta) * 500;
  seno2 = Math.sin(delta) * radio;
  coseno2 = Math.cos(delta) * radio;

  //colision carro
  //AUTO

  if (auto.position.x > -2500) {
    auto.position.x -= 20;
  } else {
    auto.position.x = 1500;
  }

  //pelota
  if (nuevaE.position.z < 800) {
    nuevaE.position.z += 10;
  } else {
    nuevaE.position.z = -100;
  }

  //nube

  if (nube.position.y < 800 && ba == false) {
    nube.position.y += 5;
    ba = false;
    su = true;
  } else {
    ba = true;
    nube.position.y -= 5;

    if (nube.position.y < 10 && su == true) {
      nube.position.y += 5;
      ba = false;
      // limite_sup -= 1;
    }
  }

  //torus
  torit.rotation.z += 1;

  delta += 0.03;
  delta2 += 0.03;

  // console.log(trasladaY);
  renderer.render(scene, camera);
}
