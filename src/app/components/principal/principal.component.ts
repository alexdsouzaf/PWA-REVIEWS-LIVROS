import { Component, inject, OnInit, signal } from '@angular/core';
import { ListagemComponent } from '../listagem/listagem.component';
import { BarraAcoesComponent } from "../barra-acoes/barra-acoes.component";
import { CadastroReviewComponent } from "../cadastro-review/cadastro-review.component";
import { ReviewsLivrosModel } from '../../Models/ReviewsLivrosModel';
import { ReviewService } from '../../service/ReviewService';

@Component({
	selector: 'app-principal',
	imports: [ListagemComponent, BarraAcoesComponent, CadastroReviewComponent],
	templateUrl: './principal.component.html',
	styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

	inclusao = signal(false)
	listaReviews = signal(new Array<ReviewsLivrosModel>());

	private readonly reviewService = inject(ReviewService)

	async ngOnInit() {
		await this.carregarListagem()
	}

	async carregarListagem() {
		this.listaReviews.set(await this.reviewService.listar_reviews())
	}

	async encerrarInclusao() {
		this.inclusao.set(false)
		await this.carregarListagem()
	}
}
