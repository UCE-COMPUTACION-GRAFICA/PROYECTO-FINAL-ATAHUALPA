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
var trasladaZ=600;
var trasladaX=210;

var aabjo,arriba;
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
  camera.position.x = 100;
  camera.position.z = 800;
  camera.position.y = 100;
  //camera.rotation.y = Math.PI;

  // EVENTS
  THREEx.WindowResize(renderer, camera);
  THREEx.FullScreen.bindKey({ charCode: "m".charCodeAt(0) });
  controls = new THREE.OrbitControls(camera, renderer.domElement);
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
  //Crea un SkyBox
 // f.crearFondo();
  p.PlanoPrincipal();
 // a.crearParque();
  //var i = new Iglesia(40, 30, 0, 0, 0, 0, 0.7, 1, 1);
 // i.crearIglesia();

  var pi = new Pileta(0, 0, 30, 0, 0, 0, 1, 1, 1);
  pi.dibujarPileta();

  t.crear_texturas("texturas/piedra.webp", 0.1, 0.1);
  var lt = new Letras(-9, -10, -81, 0, 0, 0, 1, 1, 1, textura);
  lt.crearLetras();

  cm.crearCasas();

  banca.crearBancas();
  //lamparas
  lamp.crearLamparas();

  //CASAS de lado izquierdo del parque central
  ca.crear_casa(0, 0, 0, 0, 0, 0, 1, 1, 1);
  lab.crearLaberinto();

  //Crear Avatar 
  var light3 = new THREE.PointLight(0xB18904, 3);
  light3.position.x =trasladaX;
  light3.position.y = 20;
  light3.position.z =trasladaZ;
  scene.add(light3);

 ar.cargarModelo3D("Modelos/Dog.glb", trasladaX, 20, trasladaZ,0, Math.PI,  0, 4, 4, 4);

}

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
//arriba
  if (teclado.pressed("P")) {
    trasladaZ += 0.5;
   arriba=true;

  }
  //abajo
  if (teclado.pressed("l")) {
    trasladaZ -= 0.5;
    
  }
  if (teclado.pressed("O")) {
    trasladaX += 0.5;
    
  }
  if (teclado.pressed("K")) {
    trasladaX -= 0.5;
  }
  //controls.target.set(camera.position.x,camera.position.y,camera.position.z);
  render_modelo();
}

function render_modelo() {
  controls.update();
  stats.update();
 
  arbol.position.x=trasladaX;
arbol.position.z=trasladaZ;

//light3.position.x =trasladaX;
//light3.position.z =trasladaZ;

  renderer.render(scene, camera);
}
