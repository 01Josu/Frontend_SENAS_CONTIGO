import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionesComponent } from '../../components/lecciones/lecciones.component';

describe('LeccionesComponent', () => {
  let component: LeccionesComponent;
  let fixture: ComponentFixture<LeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
