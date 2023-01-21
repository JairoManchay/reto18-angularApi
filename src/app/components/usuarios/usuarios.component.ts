import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  constructor(private servicio: ServicesService){}

  // variables recibidoras de datos
  cadena = "";
  listado:any  =new Array();
  listadoData = new Array();


  // Empezando a trar la data
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.servicio.getAll().subscribe({
      next:(userAll: string)=>{
        this.cadena = userAll;
        this.listado.push(this.cadena);
        this.listadoData = [...this.listado[0].data]
        console.log(this.listadoData)
      },
      error:(er)=>{console.error(er)},
      complete:()=>console.info("Se completo la conexion")
    })
  }
}
