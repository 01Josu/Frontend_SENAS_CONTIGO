import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionDetalleComponent } from './leccion-detalle.component';

describe('LeccionDetalleComponent', () => {
  let component: LeccionDetalleComponent;
  let fixture: ComponentFixture<LeccionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeccionDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
