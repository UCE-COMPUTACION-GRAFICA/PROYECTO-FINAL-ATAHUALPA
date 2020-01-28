class Iglesia {
  constructor(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, esc_x, esc_y, esc_z) {


    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.pos_z = pos_z;

    this.rot_x = rot_x;
    this.rot_y = rot_y;
    this.rot_z = rot_z;

    this.esc_x = esc_x;
    this.esc_y = esc_y;
    this.esc_z = esc_z;
  }

  crearIglesia() {
    //iglesia

    //parte baja
    t.crear_texturas("texturas/muro.jpg", 10, 5);
    //100-140
    cu.crear_cubo(
      200,
      50,
      -350,
      450,
      140,
      590,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    pivotPoint.add(cubo);
    //parte de columnas
    t.crear_texturas("texturas/muro2.jpg", 1, 2);
    //izquierda
    cu.crear_cubo(-13, 50, -50, 25, 140, 10, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);
    //derecha
    cu.crear_cubo(115, 50, -50, 25, 140, 10, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);
    //del otro lado
    //izquierda
    cu.crear_cubo(280, 50, -50, 25, 140, 10, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);
    //derecha
    cu.crear_cubo(413, 50, -50, 25, 140, 10, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);
    //parte amarilla
    t.crear_texturas("texturas/amarillo_4.jpg", 1, 1);
    //190-210
    cu.crear_cubo(
      200,
      195,
      -350,
      450,
      150,
      590,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    pivotPoint.add(cubo);

    //partes altas
    //izquierda
    t.crear_texturas("texturas/amarillo.jpg", 2, 2);
    cu.crear_cubo(
      50,
      290,
      -130,
      150,
      50,
      150,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    pivotPoint.add(cubo);
    //derecha
    cu.crear_cubo(
      350,
      290,
      -130,
      150,
      50,
      150,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    pivotPoint.add(cubo);
    //crear parte abajo gradas----parte izquierda
    t.crear_texturas("texturas/muro3.jpg", 5, 1);
    cu.crear_cubo(-6, 15, -30, 275, 30, 50, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);

    t.crear_texturas("texturas/muro.jpg", 5, 0.5);
    cu.crear_cubo(-6, 35, -7, 275, 10, 5, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);

    //pRTE DERECHA
    t.crear_texturas("texturas/muro3.jpg", 5, 1);
    cu.crear_cubo(400, 15, -30, 275, 30, 50, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);
    t.crear_texturas("texturas/muro.jpg", 5, 0.5);
    cu.crear_cubo(400, 35, -7, 275, 10, 5, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);
    //gradas centrales

    t.crear_texturas("texturas/muro.jpg", 4, 0.1);
    cu.crear_cubo(197, 2.5, -30, 131, 5, 50, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);

    //crear_texturas("texturas/piedra.webp",4,0.1);
    cu.crear_cubo(197, 7.5, -35, 131, 5, 50, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);
    t.crear_texturas("texturas/muro.jpg", 4, 0.1);
    cu.crear_cubo(197, 12.5, -40, 131, 5, 50, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);

    //crear_texturas("texturas/piedra.webp",4,0.1);
    cu.crear_cubo(197, 17.5, -45, 131, 5, 50, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPoint.add(cubo);

    t.crear_texturas("texturas/muro.jpg", 4, 0.1);
    cu.crear_cubo(197, 22.5, -50, 131, 5, 50, textura, false, 0, 0, 0, 1, 1, 1);
    //crear_texturas("texturas/piedra.webp",4,0.1);
    //crear_cubo(197,30,-55,131, 2, 50,textura, false);

    pivotPoint.add(cubo);

    t.crear_texturas("texturas/amarillo_3.jpg", 4, 0.1);
    cu.crear_cubo(
      200,
      150,
      -515,
      800,
      300,
      250,
      textura,
      false,
      0,
      0,
      0,
      1,
      1,
      1
    );
    pivotPoint.add(cubo);

    //PUERTAS

    t.crear_texturas("texturas/puerta.png", 1, 0.6);
    textura2 = textura;
    t.crear_texturas("texturas/puerta.png", 1, 1);
    
    i.puertas(-66, -55, 0, 0, 0, 0, 1.9, 1.55, 1, textura2, textura);

    pivotPoint.add(pivotPuerta);

    //*******puerta izquierda

    pivotPuerta = pivotPuerta2;
    i.puertas(-133, -47, 0, 0, 0, 0, 1.3, 1.4, 1, textura2, textura);

    pivotPoint.add(pivotPuerta);

    //puerta derecha
    pivotPuerta = pivotPuerta3;
    i.puertas(165, -47, 0, 0, 0, 0, 1.3, 1.4, 1, textura2, textura);

    pivotPoint.add(pivotPuerta);

    //puerta del otro lado DERECHO
    pivotPuerta = pivotPuerta4;

    i.puertas(
      655,
      -75,
      -270,
      0,
      Math.PI / 2,
      0,
      1.8,
      1.55,
      1,
      textura2,
      textura
    );

    pivotPoint.add(pivotPuerta);

    //puerta del otro lado izquierdo

    pivotPuerta = pivotPuerta5;
    i.puertas(
      -80,
      -65,
      -225,
      0,
      -Math.PI / 2,
      0,
      0.85,
      1.55,
      1,
      textura2,
      textura
    );

    pivotPoint.add(pivotPuerta);

    //VENTANAS

    //ventana derecha
    //cuadrado
    t.crear_texturas("texturas/ventana.png", 1, 0.5);
    textura2 = textura;
    t.crear_texturas("texturas/ventana.png", 1, 1.05);

    pivotPuerta = ventana1;
    i.puertas(250, 205, 0, 0, 0, 0, 0.7, 0.5, 1, textura2, textura);
    pivotPoint.add(pivotPuerta);
    //ventana izquierd

    pivotPuerta = ventana2;
    i.puertas(-50, 205, 0, 0, 0, 0, 0.7, 0.5, 1, textura2, textura);
    pivotPoint.add(pivotPuerta);

    //VENTANAS CENTRALES

    pivotPuerta = ventana3;
    i.puertas(160, 175, 0, 0, 0, 0, 0.6, 0.4, 1, textura2, textura);
    pivotPoint.add(pivotPuerta);

    pivotPuerta = ventana4;
    i.puertas(60, 175, 0, 0, 0, 0, 0.6, 0.4, 1, textura2, textura);
    pivotPoint.add(pivotPuerta);

    //ventana redonda

    //parte blanca
    t.crear_texturas("texturas/blanco.jpg", 1, 1.05);
    ci.crearCilindro(
      195,
      210,
      -50,
      Math.PI / 2,
      0,
      0,
      1.5,
      1,
      1,
      11.5,
      2,
      textura,
      false
    );
    pivotPoint.add(cilindro);

    t.crear_texturas("texturas/ventana.png", 1, 1.05);
    ci.crearCilindro(
      195,
      210,
      -49,
      Math.PI / 2,
      Math.PI / 2,
      0,
      0.7,
      5,
      1,
      11,
      1,
      textura,
      false
    );
    pivotPoint.add(cilindro);

    //PARTES ALTAS DE IGLESIA

    i.partealta(50);
    i.partealta(350);

    //TRIANGULO
    t.crear_texturas("texturas/amarillo_2.jpg", 1, 1.05);
    i.cargar_triangulo(120, 270, -85, 0, 0, 0, textura, false);
    pivotPoint.add(triangulo);

    //partes de lados figura
    i.cargar_modelo(-60, 0, -85, 0, 0, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(-60, 0, -160, 0, 0, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(-60, 0, -235, 0, 0, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(-60, 0, -305, 0, 0, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(-60, 0, -375, 0, 0, 0);
    pivotPoint.add(mallaextrusion);

    //derecha

    i.cargar_modelo(460, 0, -55, 0, Math.PI, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(460, 0, -130, 0, Math.PI, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(460, 0, -205, 0, Math.PI, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(460, 0, -275, 0, Math.PI, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(460, 0, -345, 0, Math.PI, 0);
    pivotPoint.add(mallaextrusion);

    //atras izquierda
    i.cargar_modelo(-120, 0, -355, 0, Math.PI / 2, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(-190, 0, -355, 0, Math.PI / 2, 0);
    pivotPoint.add(mallaextrusion);

    //atras derecha
    i.cargar_modelo(560, 0, -355, 0, Math.PI / 2, 0);
    pivotPoint.add(mallaextrusion);

    i.cargar_modelo(480, 0, -355, 0, Math.PI / 2, 0);
    pivotPoint.add(mallaextrusion);

    

    pivotPoint.position.x = this.pos_x;
    pivotPoint.position.y = this.pos_y;
    pivotPoint.position.z = this.pos_z;

    pivotPoint.rotation.x = this.rot_x;
    pivotPoint.rotation.y = this.rot_y;
    pivotPoint.rotation.z = this.rot_z;

    pivotPoint.scale.x = this.esc_x;
    pivotPoint.scale.y = this.esc_y;
    pivotPoint.scale.z = this.esc_z;
  }

  partealta(posx_a) {
    //izquierda
    t.crear_texturas("texturas/amarillo_2.jpg", 1, 1);
    ci.crearCilindro(
      posx_a,
      330,
      -130,
      0,
      0,
      0,
      1.5,
      1,
      1.3,
      47,
      60,
      textura,
      false
    );
    pivotPoint.add(cilindro);

    t.crear_texturas("texturas/piedra.webp", 0.1, 0.1);
    e.crear_esfera(
      posx_a,
      360,
      -130,
      0,
      0,
      0,
      0.6,
      0.5,
      0.5,
      textura,
      false,
      100,
      20
    );
    pivotPoint.add(sphere);

    //iz mas pequeña

    t.crear_texturas("texturas/blanco.jpg", 1, 1);
    ci.crearCilindro(
      posx_a,
      415,
      -130,
      0,
      0,
      0,
      1.5,
      1,
      1.3,
      11,
      20,
      textura,
      false
    );
    pivotPoint.add(cilindro);

    t.crear_texturas("texturas/piedra.webp", 0.1, 0.1);
    e.crear_esfera(
      posx_a,
      425,
      -130,
      0,
      0,
      0,
      0.6,
      0.5,
      0.5,
      textura,
      false,
      25,
      20
    );
    pivotPoint.add(sphere);

    //parte negra pequeña
    t.crear_texturas("texturas/negro.jpg", 1, 1);
    pivotPuerta = Puertapeque1;
    i.puertas(10, 395, -62, 0, 0, 0, 0.3, 0.25, 1, textura, textura);
    pivotPoint.add(pivotPuerta);

    pivotPuerta = Puertapeque2;
    i.puertas(310, 395, -62, 0, 0, 0, 0.3, 0.25, 1, textura, textura);
    pivotPoint.add(pivotPuerta);
  }

  puertas(
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
    textura2
  ) {
    //parte de círculo

    cu.crear_cubo(140, 70, -50, 40, 40, 1, textura, false, 0, 0, 0, 1, 1, 1);
    pivotPuerta.add(cubo);

    
    sci.crearSemiCilindro(
      140,
      90,
      -50,
      0,
      Math.PI / 2,
      Math.PI / 2,
      1,
      1,
      1,
      20,
      1,
      textura2,
      false
    );
    //cuadrado

    pivotPuerta.add(semiCilindro);

    pivotPuerta.position.x = pos_x;
    pivotPuerta.position.y = pos_y;
    pivotPuerta.position.z = pos_z;

    pivotPuerta.rotation.x = rot_x;
    pivotPuerta.rotation.y = rot_y;
    pivotPuerta.rotation.z = rot_z;

    pivotPuerta.scale.x = esc_x;
    pivotPuerta.scale.y = esc_y;
    pivotPuerta.scale.z = esc_z;
  }

  cargar_modelo(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z) {
    var geometry = new THREE.Geometry();

    var array_extrude = [];
    var vertices = [
      [0, 0, 0],
      [35, 0, 0],
      [35, 120, 0],
      [20, 120, 0],
      [0, 0, 0]
    ];
    var vector;
    var long_vertices = vertices.length;
    for (var i = 0; i < long_vertices; i++) {
      var x = vertices[i][0];
      var y = vertices[i][1];
      var z = vertices[i][2];
      vector = new THREE.Vector3(x, y, z);
      geometry.vertices.push(vector);

      array_extrude.push(vector);
    }
    //para dar profundidad
    var nueva_figura = new THREE.Shape(array_extrude);
    //excrusion
    var datos_extrusion = {
      amount: 30, //cantidad de profundidad
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
    t.crear_texturas("texturas/muro3.jpg", 0.06, 0.06);
    var material = new THREE.MeshBasicMaterial({
      map: textura,
      side: THREE.DoubleSide,
      wireframe: false
    });

    //agregar a malla
    mallaextrusion = new THREE.Mesh(extrude_geometria, material);

    mallaextrusion.position.x = pos_x;
    mallaextrusion.position.y = pos_y;
    mallaextrusion.position.z = pos_z;

    mallaextrusion.rotation.x = rot_x;
    mallaextrusion.rotation.y = rot_y;
    mallaextrusion.rotation.z = rot_z;

    scene.add(mallaextrusion);
  }

  cargar_triangulo(pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, textura, sqr) {
    var geometry = new THREE.Geometry();

    var array_extrude = [];
    var vertices = [
      [0, 0, 0],
      [80, 55, 0],
      [160, 0, 0],
      [0, 0, 0]
    ];
    var vector;
    var long_vertices = vertices.length;
    for (var i = 0; i < long_vertices; i++) {
      var x = vertices[i][0];
      var y = vertices[i][1];
      var z = vertices[i][2];
      vector = new THREE.Vector3(x, y, z);
      geometry.vertices.push(vector);

      array_extrude.push(vector);
    }
    //para dar profundidad
    var nueva_figura = new THREE.Shape(array_extrude);
    //excrusion
    var datos_extrusion = {
      amount: 30, //cantidad de profundidad
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

    var material = new THREE.MeshBasicMaterial({
      map: textura,
      side: THREE.DoubleSide,
      wireframe: sqr
    });

    //agregar a malla
    triangulo = new THREE.Mesh(extrude_geometria, material);

    triangulo.position.x = pos_x;
    triangulo.position.y = pos_y;
    triangulo.position.z = pos_z;

    triangulo.rotation.x = rot_x;
    triangulo.rotation.y = rot_y;
    triangulo.rotation.z = rot_z;

    scene.add(triangulo);
  }
}
