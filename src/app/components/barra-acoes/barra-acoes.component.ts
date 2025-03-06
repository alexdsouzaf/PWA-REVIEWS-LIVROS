import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'app-barra-acoes',
	imports: [ReactiveFormsModule, MatTooltipModule],
	templateUrl: './barra-acoes.component.html',
	styleUrl: './barra-acoes.component.css'
})
export class BarraAcoesComponent {

	pesquisaPorPalavra = new FormControl('')

	eventAdicionarNovaReview = output()
	eventPesquisar = output<string>()

	async pesquisar() {
		this.eventPesquisar.emit(this.pesquisaPorPalavra.value ?? "")
	}
}
