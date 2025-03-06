import { TestBed } from '@angular/core/testing';
import { ReviewsLivrosModel, ReviewsLivrosModelForm } from './../../Models/ReviewsLivrosModel';
import { Component, inject, model, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReviewService } from '../../service/ReviewService';

@Component({
	selector: 'app-cadastro-review',
	imports: [
		MatButtonModule,
		MatCardModule,
		ReactiveFormsModule
	],
	templateUrl: './cadastro-review.component.html',
	styleUrl: './cadastro-review.component.css',
})
export class CadastroReviewComponent implements OnInit {
	
	private readonly reviewService = inject(ReviewService)

	// * parametro opcional
	registro = model<ReviewsLivrosModel>()

	form = new ReviewsLivrosModelForm().reviewForm
	// * Emitido para o componente pai encerrar a inclusao independente se foi com sucesso ou não
	eventEncerrarInclusao = output()

	async efetivar() {
		const registro = this.form.getRawValue() as ReviewsLivrosModel

		(registro.id !== 0) ? await this.reviewService.alterar(registro) : await this.reviewService.cadastrar(registro);

		this.eventEncerrarInclusao.emit()
	}

	async remover(){
		const registro = this.form.getRawValue() as ReviewsLivrosModel

		await this.reviewService.deletar_por_id(registro.id)

		this.eventEncerrarInclusao.emit()
	}

	async ngOnInit() {
		if(this.registro()){
			this.form.patchValue(this.registro()!)
		}
	}
}
