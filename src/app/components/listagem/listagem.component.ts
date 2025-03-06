import { Component, inject, input, model, OnInit, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReviewService } from '../../service/ReviewService';
import { ReviewsLivrosModel } from '../../Models/ReviewsLivrosModel';
import { ElementoListaComponent } from "../elemento-lista/elemento-lista.component";

@Component({
	selector: 'app-listagem',
	imports: [
		ElementoListaComponent
	],
	templateUrl: './listagem.component.html',
	styleUrl: './listagem.component.css'
})
export class ListagemComponent {
	listaReviews = model.required<Array<ReviewsLivrosModel>>()
	eventEncerrarAlteracao = output()

}
