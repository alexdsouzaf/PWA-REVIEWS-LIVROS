import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReviewComponent } from './cadastro-review.component';

describe('CadastroReviewComponent', () => {
  let component: CadastroReviewComponent;
  let fixture: ComponentFixture<CadastroReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
