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
var cm=new CasasMercado();


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
  texto3();
 //Crea un SkyBox
  f.crearFondo();
  p.PlanoPrincipal();
  a.crearParque();
 var i = new Iglesia(40, 30, 0, 0, 0, 0, 0.7, 1, 1);
  i.crearIglesia();

 var pi = new Pileta(0, 0, 30, 0, 0, 0, 1, 1, 1);
  pi.dibujarPileta();

t.crear_texturas("texturas/piedra.webp", 0.1, 0.1);
var lt=new Letras(-9,-10,-81,0,0,0,1,1,1,textura);
lt.crearLetras(); 

cm.crearCasas();


  banca.crearBancas();
  //lamparas
  lamp.crearLamparas();

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

  textMaterial = new THREE.MeshBasicMaterial({ color: 0x808000 });

  var textMesh = new THREE.Mesh(textGeom, textMaterial);

  scene.add(textGeom);
  //textGeom.computeBoundingBox();

  //var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
  textMesh.position.set(0, 0, 0);

  //textMesh.rotation.x = -Math.PI / 4;
  scene.add(textMesh);
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
  //controls.target.set(camera.position.x,camera.position.y,camera.position.z);
  render_modelo();
}

function render_modelo() {
  controls.update();
  stats.update();
  renderer.render(scene, camera);
}
