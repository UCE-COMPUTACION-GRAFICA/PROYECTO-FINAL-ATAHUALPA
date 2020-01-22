var cubo;
class Cubito{

 
    constructor(pos_x,pos_y,pos_z, tam_x, tam_y, tam_z,text,esq,rot_x,rot_y,rot_z, esc_x, esc_y,esc_z, escena ){

        this.pos_x=pos_x;
        this.pos_y=pos_y;
        this.pos_z=pos_z;

        this.tam_x=tam_x;
        this.tam_y=tam_y;
        this.tam_z=tam_z;

        this.text=text;
        this.esq=esq;

        this.rot_x=rot_x;
        this.rot_y=rot_y;
        this.rot_z=rot_z;

        this.esc_x=esc_x;
        this.rot_y=rot_y;
        this.rot_z=rot_z;

        this.escena=escena;


    }

    crear_cubo() {
        var geometry = new THREE.BoxGeometry(this.tam_x, this.tam_y, this.tam_z);
        // para ancho, largo, profunsdidad*/
        var material = new THREE.MeshBasicMaterial({
          map: this.text,
          side: THREE.DoubleSide,
          wireframe: this.esq
        });
      
        //var cube=new THREE.Mesh(geometry, material);
         cubo = new THREE.Mesh(geometry, material);

        cubo.position.x = this.pos_x;
        cubo.position.y = this.pos_y;
        cubo.position.z = this.pos_z;

        
        cubo.rotation.x = this.rot_x;
        cubo.rotation.y = this.rot_y;
        cubo.rotation.z = this.rot_z;

        cubo.scale.x = this.esc_x;
        cubo.scale.y = this.esc_y;
        cubo.scale.z = this.esc_z;

       // this.escena.add(cubo);
        document.write("si imprime cubo");  


      }

  
        
   
}
