import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComponenteHijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularHarryPotter';

  casas: string[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

  colores: string[] = ['danger', 'primary', 'warning', 'success'];

  seleccion : any;

  listaAlumno: any [] = [];

  onSelectHouse(casa: string, color: string) {
    this.seleccion = {
      casa: casa,
      color: color
    }
  }

  agregarAlumno(alumno: any): void {
    this.listaAlumno.push(alumno);
    this.seleccion = null;
}
  
}
