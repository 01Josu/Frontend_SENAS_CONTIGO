// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeccionesComponent } from './components/lecciones/lecciones.component';
import { LeccionDetalleComponent } from './components/leccion-detalle/leccion-detalle.component';
import { FelicitacionesComponent } from './components/felicitaciones/felicitaciones.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lecciones', component: LeccionesComponent },
  { path: 'leccion/:id', component: LeccionDetalleComponent },
  { path: 'felicitaciones', component: FelicitacionesComponent },
  { path: '**', redirectTo: '' }
];
