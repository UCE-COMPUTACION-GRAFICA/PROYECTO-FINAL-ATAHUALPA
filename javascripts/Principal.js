/* VARIABLES*/





var scene=new THREE.Scene();


//var scene = new THREE.Scene();
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





//objetos

var darColor=false;
var ci = new Cilindro();
var sci = new SemiCilindro();
var cu = new Cubo();
var t = new Textura();
var e = new Esfera();
var a = new Parque();
var i = new Iglesia();
var ar=new Modelo3D();
var to=new Torus();
var pi=new Pileta();
var f=new Fondo();
var banca=new Bancas();
var banca1=new Bancas();
var ses=new SemiEsfera();
var lamp=new Lamparas();
var arb=new Arbol();
var textGeom;
var textMaterial;

var container, stats;


hacerObjetos3D();
/****************************llamado de funciones************************/
inicio();
animacion();

//********************INICIO**********************
function inicio() {



// RENDERER
if ( Detector.webgl )
renderer = new THREE.WebGLRenderer( {antialias:true} );
else
renderer = new THREE.CanvasRenderer(); 
renderer.setSize(ancho, largo);
//container = document.getElementById( 'ThreeJS' );
//container.appendChild( renderer.domElement );

 document.body.appendChild(renderer.domElement);


  material = new THREE.MeshBasicMaterial({ color: 0x00ff0000 });
  camera.position.z = 1000;
  camera.position.y = 100;
  //camera.rotation.y = Math.PI;

  
// EVENTS
THREEx.WindowResize(renderer, camera);
THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

 controls = new THREE.OrbitControls(camera, renderer.domElement);
//para no salirse del skybox
//controls.minDistance = 500;
//controls.maxDistance = 1500;




// STATS corresponde a los fotogramas por segundo 
stats = new Stats();

stats.domElement.style.position = 'absolute';
stats.domElement.style.bottom = '0px';
stats.domElement.style.zIndex = 100;
document.body.appendChild( stats.domElement );


texto3();

 loader = new THREE.GLTFLoader();

  //creamos los objetos de la escena en forma de capas
  //f.crearFondo();

  var p = new PlanoBase();
 p.PlanoPrincipal();
 //var par = new Parque();
 //par.crearParque();
 //var i = new Iglesia(40, 30, 0, 0, 0, 0, 0.7, 1, 1);
 //i.crearIglesia();
 

 





  var pi=new Pileta(0,0,30,0,0,0,1,1,1);
  pi.dibujarPileta();



// var banca=new Bancas();
// banca.crearBancas();


 //lamparas
lamp.crearLamparas();
//lamp.luces();


//CASAS de lado izquierdo del parque central

var ca=new Casas();
ca.crear_casa(0,0,0,0,0,0,1,1,1);

var lab=new Laberinto();
lab.crearLaberinto();




//crear agua
 // var ag=new Agua();
 // ag.crearAgua();//





// var nuevoTexto=new Texto();
// nuevoTexto.crearTexto();
 

  


}

function texto3(){
  
  var loader = new THREE.FontLoader();

loader.load( 'three.js-master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

 textGeom= new THREE.TextGeometry( 'Hello three.js!', {
		font: font,
		size: 80,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
} );



textMaterial=new THREE.MeshBasicMaterial({color: 0xFF0000});

  var textMesh = new THREE.Mesh(textGeom, textMaterial );


//textGeom.computeBoundingBox();

//var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
	textMesh.position.set(0,0,0);
 
	//textMesh.rotation.x = -Math.PI / 4;
	scene.add(textMesh);

  }





function hacerObjetos3D(){


  //Iglesia
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

//pileta
pil=new THREE.Object3D();
//las diferentes bancas 
ban=new THREE.Object3D();
ban1=new THREE.Object3D();
ban2=new THREE.Object3D();
ban3=new THREE.Object3D();
ban4=new THREE.Object3D();
ban5=new THREE.Object3D();
ban6=new THREE.Object3D();
ban7=new THREE.Object3D();
ban8=new THREE.Object3D();
ban9=new THREE.Object3D();



//las diferentes lamparas
lmp=new THREE.Object3D();
lmp1=new THREE.Object3D();
lmp2=new THREE.Object3D();
lmp3=new THREE.Object3D();
lmp4=new THREE.Object3D();
lmp5=new THREE.Object3D();
lmp6=new THREE.Object3D();
lmp7=new THREE.Object3D();
lmp8=new THREE.Object3D();
lmp9=new THREE.Object3D();
lmp10=new THREE.Object3D();


lmp11=new THREE.Object3D();
lmp12=new THREE.Object3D();
lmp13=new THREE.Object3D();
lmp14=new THREE.Object3D();
lmp15=new THREE.Object3D();

lmp16=new THREE.Object3D();
lmp17=new THREE.Object3D();
lmp18=new THREE.Object3D();

lmp19=new THREE.Object3D();
lmp20=new THREE.Object3D();
lmp21=new THREE.Object3D();
lmp22=new THREE.Object3D();
lmp23=new THREE.Object3D();

lmp24=new THREE.Object3D();
lmp25=new THREE.Object3D();
lmp26=new THREE.Object3D();
lmp27=new THREE.Object3D();
lmp28=new THREE.Object3D();
lmp29=new THREE.Object3D();
lmp30=new THREE.Object3D();
lmp31=new THREE.Object3D();
lmp32=new THREE.Object3D();
lmp33=new THREE.Object3D();
lmp34=new THREE.Object3D();


//arboles
arbl=new THREE.Object3D();
arbl1=new THREE.Object3D();
arbl2=new THREE.Object3D();
arbl3=new THREE.Object3D();

//flores 
flr=new THREE.Object3D();
flr1=new THREE.Object3D();
flr2=new THREE.Object3D();
flr3=new THREE.Object3D();
fl4=new THREE.Object3D();
flr5=new THREE.Object3D();

}



function animacion() {



  requestAnimationFrame(animacion);
  /* obj_mov=cubo;*/

   if(teclado.pressed("up")){
    camera.position.z-=2; 
   }

   if(teclado.pressed("down")){
    camera.position.z+=2; 
   }

   if(teclado.pressed("right")){
    camera.position.x+=2; 
   }

   if(teclado.pressed("left")){
    camera.position.x-=2; 
   }
   if(teclado.pressed("Q")){
    camera.position.y+=1; 
   }
   if(teclado.pressed("A")){
    camera.position.y-=1; 
   }
//controls.target.set(camera.position.x,camera.position.y,camera.position.z);
  render_modelo();
}

function render_modelo() {
 controls.update();
stats.update();

  renderer.render(scene, camera);
}
