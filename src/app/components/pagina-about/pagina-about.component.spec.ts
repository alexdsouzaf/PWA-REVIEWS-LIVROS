import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAboutComponent } from './pagina-about.component';

describe('PaginaAboutComponent', () => {
  let component: PaginaAboutComponent;
  let fixture: ComponentFixture<PaginaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
