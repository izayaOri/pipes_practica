import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'angel xddd';
  valor: number = 1000;
  obj = {
    nombre: 'Angel'
  };

  mostrarNombre() {
    console.log( this.nombre );
  }

}
