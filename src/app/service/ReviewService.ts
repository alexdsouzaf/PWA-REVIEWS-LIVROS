import { environment } from '../../environments/environment.development';
import { ReviewsLivrosModel } from '../Models/ReviewsLivrosModel';
import { LocalStorageService } from './localStorageService';
import { RequestService } from './ResquestService';
import { inject, Inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ReviewService {
    private requestService = inject(RequestService)
    private localStorageService = inject(LocalStorageService)

    listar_reviews = async (pFiltroTexto: string = ""): Promise<Array<ReviewsLivrosModel>> => environment.usarLocalStorage ? this.localStorageService.listarReviews(pFiltroTexto) : await this.requestService.get<Array<ReviewsLivrosModel>>(`/listar-reviews?pFiltroTexto=${pFiltroTexto}`)

    consultar_por_id = async (pId: number): Promise<ReviewsLivrosModel> => environment.usarLocalStorage ? this.localStorageService.consultarPorId(pId) : await this.requestService.get<ReviewsLivrosModel>(`/consultar-por-id/${pId}`)

    deletar_por_id = async (pId: number) => environment.usarLocalStorage ? this.localStorageService.deletarPorId(pId) : await this.requestService.delete<ReviewsLivrosModel>(`/deletar-por-id/${pId}`)

    cadastrar = async (registro: ReviewsLivrosModel) => environment.usarLocalStorage ? this.localStorageService.cadastrar(registro) : await this.requestService.post(`/cadastrar-review`, registro)

    alterar = async (registro: ReviewsLivrosModel) => environment.usarLocalStorage ? this.localStorageService.alterar(registro) : await this.requestService.put(`/alterar-review`, registro)

}