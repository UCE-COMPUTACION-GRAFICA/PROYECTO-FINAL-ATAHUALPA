//CREACION DE LA ESCENA
var scene = new THREE.Scene();
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
var figura, material, textura_fig;
var cubo;
var sphere;
var cilindro;
var semiCilindro;
var controls;
var reloj;
var figura_j;
var plano;
var triangulo;
var mallaextrusion;
var arbol;
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
var limite_sup = 20;
var limite_inf = 14;
var pil;

//DECLARACION DE OBJETOS
var ci = new Cilindro();
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
  camera.position.x = 0;
  camera.position.z = 500;
  camera.position.y = 0;
  //camera.rotation.y = Math.PI;

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

  light3 = new THREE.PointLight(0x8a4b08, 3);
  

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
}

function animacion() {
  requestAnimationFrame(animacion);
  //Camara numero 1 es para poder visualizar el avatar que realizará el recorrido virtual
  if (numcam == 1) {
    //sigue al perrito

    camera.lookAt(arbol.position.x,arbol.position.y+10,arbol.position.z-50);
     camera.position.x = arbol.position.x;
    camera.position.z =arbol.position.z + 20;
    camera.position.y =arbol.position.y + 14;
  }
  //camara panoramica de todo el escenario
  if (numcam == 2) {
  
  camera.rotation.set(-0.1965,0.04098,0.008156);
  camera.position.x=-458.52;
  camera.position.y=659.86;
  camera.position.z=2964.6417;
    
  }
  //camara estática para ver el parque desde la aprte superior de la iglesia
  if(numcam==3){

    camera.rotation.set(-2.3,0.014,3.12);
    camera.position.x=189;
    camera.position.y=580;
    camera.position.z=-211;
  }

  console.log(camera);
  //controls.target.set(camera.position.x,camera.position.y,camera.position.z);
  Teclado();
  render_modelo();
}

function Teclado() {
  if (teclado.pressed("up")) {
    // camera.position.z -= 2;
    trasladaZ -= 2;
    girarZ = Math.PI;
  }

  if (teclado.pressed("down")) {
    //  camera.position.z += 2;
    trasladaZ += 2;
    girarZ = 0;
  }

  if (teclado.pressed("right")) {
    //   camera.position.x += 2;
    trasladaX += 2;

    girarZ = Math.PI / 2;
  }

  if (teclado.pressed("left")) {
    //  camera.position.x -= 2;
    trasladaX -= 2;
    girarZ = -Math.PI / 2;
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
    numcam = 1;
  }

  if (teclado.pressed("2")) {
    numcam = 2;
  }

  if (teclado.pressed("3")) {
    numcam = 3;
  }

  if (teclado.pressed("4")) {
    numcam = 4;
  }

  if (teclado.pressed("5")) {
    numcam = 5;
  }
}

function render_modelo() {
  // controls.update();
  stats.update();

  //movimiento del perrito
  arbol.position.x = trasladaX;
  arbol.position.y = trasladaY;
  arbol.position.z = trasladaZ;
  arbol.rotation.y = girarZ;

  //colision del perrito para que salte
  if (trasladaY < limite_sup && bajar == false) {
    trasladaY += 0.3;
    bajar = false;
    subir = true;
  } else {
    bajar = true;
    trasladaY -= 0.3;

    if (trasladaY < limite_inf && subir == true) {
      trasladaY += 0.3;
      bajar = false;
      // limite_sup -= 1;
    }
  }

  //luces para el perrito

  //Crear Avatar

  light3.position.x = trasladaX;
  light3.position.y = trasladaY + 5;
  light3.position.z = trasladaZ + 10;
  scene.add(light3);

  console.log(trasladaY);
  renderer.render(scene, camera);
}
