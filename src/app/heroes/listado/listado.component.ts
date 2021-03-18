import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['spiderman', 'iroman', 'holk', 'thor', 'chin'];
  heroeBorrados = '';

  borrarHeroe(): void {
   this.heroeBorrados = this.heroes.shift() || '';
  }

}
