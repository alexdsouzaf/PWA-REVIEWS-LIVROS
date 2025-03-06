import { Component, output } from '@angular/core';

@Component({
  selector: 'app-barra-acoes',
  imports: [],
  templateUrl: './barra-acoes.component.html',
  styleUrl: './barra-acoes.component.css'
})
export class BarraAcoesComponent {

  eventAdicionarNovaReview = output()
}
