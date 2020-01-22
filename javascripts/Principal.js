/* VARIABLES*/

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
var figura, material, textura_fig;
var cubo;
var sphere;
var cilindro;
var controls;
var reloj;
var figura_j;
var plano;
var triangulo;
var mallaextrusion;
var arbol;
var torus;
var malla;

var textura, textura2, textura_piedra, textura_cesped, loader;
pivotPoint = new THREE.Object3D();
//pivotPoint.position.set(0,20,0);

pivotPuerta = new THREE.Object3D();
pivotPuerta2 = new THREE.Object3D();
pivotPuerta3 = new THREE.Object3D();
pivotPuerta4 = new THREE.Object3D();
pivotPuerta5 = new THREE.Object3D();

Puertapeque1 = new THREE.Object3D();
Puertapeque2 = new THREE.Object3D();

ventana1 = new THREE.Object3D();
ventana2 = new THREE.Object3D();

ventana3 = new THREE.Object3D();
ventana4 = new THREE.Object3D();

lado1 = new THREE.Object3D();
lado2 = new THREE.Object3D();

baseiglesia = new THREE.Object3D();

//objetos
var ci = new Cilindro();
var cu = new Cubo();
var t = new Textura();
var e = new Esfera();
var a = new Parque();
var i = new Iglesia();
var ar=new Modelo3D();
var to=new Torus();
var pi=new Pileta();

var container, stats;

/****************************llamado de funciones************************/
inicio();
animacion();

//********************INICIO**********************
function inicio() {

 /* if ( Detector.webgl )
  renderer = new THREE.WebGLRenderer( {antialias:true} );
else
  renderer = new THREE.CanvasRenderer(); 
renderer.setSize(ancho, largo);
container = document.getElementById( 'ThreeJS' );
container.appendChild( renderer.domElement );*/


 renderer.setSize(ancho, largo);
 document.body.appendChild(renderer.domElement);

  material = new THREE.MeshBasicMaterial({ color: 0x00ff0000 });
  camera.position.z = 1000;
  camera.position.y = 100;
  camera.rotation.y = Math.PI;

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  loader = new THREE.GLTFLoader();

  //creamos los objetos
  var p = new PlanoBase();
  p.PlanoPrincipal();
  var par = new Parque();
 par.crearParque();
 var i = new Iglesia(40, 30, 0, 0, 0, 0, 0.7, 1, 1);
 i.crearIglesia();

 



  var light2 = new THREE.PointLight(0x66FF00, 1);
  light2.position.x=-100;
  light2.position.y=40;
  light2.position.z=250;
  scene.add(light2);



 ar.cargarModelo3D('Modelos/arbol2.glb',-100,20,250,0,0,0,1.5,1.5,1.5);
 
  
  pi.dibujarPileta();

//CASAS

var ca=new Casas();
ca.crear_casa(0,0,0,0,0,0,1,1,1);


//crear agua
  //var ag=new Agua();
  //ag.crearAgua();//



// STATS
/*stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.bottom = '0px';
stats.domElement.style.zIndex = 100;
container.appendChild( stats.domElement );*/





// var nuevoTexto=new Texto();
// nuevoTexto.crearTexto();
 

  


}








function animacion() {
  requestAnimationFrame(animacion);
  /* obj_mov=cubo;

   if(teclado.pressed("up")){
    obj_mov.position.z-=1; 
   }

   if(teclado.pressed("down")){
    obj_mov.position.z+=1; 
   }

   if(teclado.pressed("right")){
    obj_mov.position.x+=1; 
   }

   if(teclado.pressed("left")){
    obj_mov.position.x-=1; 
   }*/

  //  controls.target.set(obj_mov.position.x,obj_mov.position.y,obj_mov.position.z );
  render_modelo();
}

function render_modelo() {
  controls.update();
 // stats.update();
  renderer.render(scene, camera);
}
