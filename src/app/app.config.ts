import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeccionesComponent } from './components/lecciones/lecciones.component';
import { LeccionDetalleComponent } from './components/leccion-detalle/leccion-detalle.component';
import { FelicitacionesComponent } from './components/felicitaciones/felicitaciones.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lecciones', component: LeccionesComponent },
  { path: 'leccion/:id', component: LeccionDetalleComponent },
  { path: 'felicitaciones', component: FelicitacionesComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
