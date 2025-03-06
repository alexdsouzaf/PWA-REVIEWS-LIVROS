import { Component, model, OnInit, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ReviewsLivrosModel, ReviewsLivrosModelForm } from '../../Models/ReviewsLivrosModel';
import { CadastroReviewComponent } from "../cadastro-review/cadastro-review.component";
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'app-elemento-lista',
	imports: [
		MatButtonModule,
		MatIconModule,
		MatExpansionModule,
		CadastroReviewComponent,
		MatTooltipModule
	],
	templateUrl: './elemento-lista.component.html',
	styleUrl: './elemento-lista.component.css'
})
export class ElementoListaComponent implements OnInit {

	alteracao = signal(false)

	registro = model.required<ReviewsLivrosModel>()

	registroForm = new ReviewsLivrosModelForm().reviewForm

	eventEncerrarAlteracao = output()

	async ngOnInit() {
		this.registroForm.patchValue(this.registro())
	}

	async encerrarAlteracao() {
		this.eventEncerrarAlteracao.emit()
		this.alteracao.set(false)
	}
}
