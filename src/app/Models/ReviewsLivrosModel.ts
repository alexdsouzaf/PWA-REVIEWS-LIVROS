import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ReviewsLivrosModel {
    id: number = 0
    titulo: string = "";
    review: string = "";
    expandido: boolean = false;

    // Construtor da classe
    constructor() {
    }

}


export interface ReviewsLivrosForm {
    id: FormControl<number>;
    titulo: FormControl<string>;
    review: FormControl<string>;
    expandido: FormControl<boolean>;
  }

export class ReviewsLivrosModelForm {
    reviewForm: FormGroup<ReviewsLivrosForm>;

    constructor() {
        this.reviewForm = new FormGroup<ReviewsLivrosForm>({
            id: new FormControl(0, {nonNullable: true}),
            titulo: new FormControl('', {nonNullable: true, ...[Validators.required, Validators.minLength(1)]}),
            review: new FormControl('', {nonNullable: true,...[Validators.required]}),
            expandido: new FormControl(false,{nonNullable: true,})
        });
    };
}