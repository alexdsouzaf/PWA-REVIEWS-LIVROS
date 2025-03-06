import { Injectable } from "@angular/core";
import { ReviewsLivrosModel } from "../Models/ReviewsLivrosModel";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    private tabela_local_storage = "tabela_reviews"

    // * Verifica se existe a tabela no localstorage, caso nao, cria
    private inicializarTabelaLocalStorage(){
        if(!localStorage.getItem(this.tabela_local_storage)){
            localStorage.setItem(this.tabela_local_storage,JSON.stringify([]))
        }

    }

    listarReviews(): Array<ReviewsLivrosModel> {

        // ! chama quando tentar listar todos os registros 
        // ! pois sempre vai ser a primeira dessas operacoes a ser executada
        this.inicializarTabelaLocalStorage() 

        const data = localStorage.getItem(this.tabela_local_storage)
        return data ? JSON.parse(data) : [];
    }


    consultarPorId(pId: number): ReviewsLivrosModel{
        const registroEncontrado = this.listarReviews().find(item => item.id === pId)
    
        if (!registroEncontrado){
            throw new Error(`Registro não encontrado com Id ${pId}`)
        }

        return registroEncontrado
    }

    deletarPorId(pId: number){
        const listagem = this.listarReviews()

        const listagemSemElementoRemovido = listagem.filter(item => item.id !== pId)

        if (listagem.length === listagemSemElementoRemovido.length) return;

        localStorage.setItem(this.tabela_local_storage,JSON.stringify(listagemSemElementoRemovido))
    }

    cadastrar(registro: ReviewsLivrosModel){
        const listagem = this.listarReviews()

        const novoRegistro: ReviewsLivrosModel = {
            ...registro,
            id: listagem.length > 0 ? Math.max(...listagem.map(p => p.id)) + 1 : 1
        }
        listagem.push(novoRegistro)
        localStorage.setItem(this.tabela_local_storage,JSON.stringify(listagem))
    }

    alterar(registro: ReviewsLivrosModel){
        const listagem = this.listarReviews()

        const indexEmAlteracao = listagem.findIndex(item => item.id === registro.id)
        if (indexEmAlteracao === -1) return;

        listagem[indexEmAlteracao] = {...listagem[indexEmAlteracao], ...registro}
        localStorage.setItem(this.tabela_local_storage,JSON.stringify(listagem))
        
    }

}