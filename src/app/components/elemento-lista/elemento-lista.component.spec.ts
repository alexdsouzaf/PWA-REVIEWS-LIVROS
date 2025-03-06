import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoListaComponent } from './elemento-lista.component';

describe('ElementoListaComponent', () => {
  let component: ElementoListaComponent;
  let fixture: ComponentFixture<ElementoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
