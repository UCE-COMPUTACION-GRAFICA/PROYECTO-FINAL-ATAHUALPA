//import { Water } from 'javascripts/libs/Water2.js';
class Agua{
// water

crearAgua(){
    var waterGeometry = new THREE.PlaneBufferGeometry( 100, 100 );

    var water = new THREE.Water( waterGeometry, {
        color:0x2E2EFE,
        scale: 4,
        flowDirection: new THREE.Vector2( 1, 1 ),
        textureWidth: 1024,
        textureHeight: 1024
    } );
    
    water.position.y = 100;
    water.rotation.x = Math.PI * - 0.5;
    scene.add( water );
    
   
}

}

