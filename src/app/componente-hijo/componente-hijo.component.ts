import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [],
  templateUrl: './componente-hijo.component.html'
})
export class ComponenteHijoComponent {

  @Input() casa !: string;
  @Input() color !: string;
  @Input() titulo !: string;

  @Output() elementoAdd = new EventEmitter<any>();

  addAlumno(nombreAlumno: string): void {
    this.elementoAdd.emit({
        nombre: nombreAlumno,
        casa: this.casa,
        color: this.color
    });
  }




}
