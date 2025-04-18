import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeccionService {

  constructor() { }

  // Método para obtener las lecciones
  getLecciones() {
    return [
      { id: 1, titulo: 'Abecedario', descripcion: 'Aprende el abecedario en lengua de señas.' },
      { id: 2, titulo: 'Saludos', descripcion: 'Aprende los saludos básicos en lengua de señas.' },
      // Agrega más lecciones aquí
    ];
  }

  // Método para obtener una lección por ID
  getLeccion(id: number) {
    const lecciones = this.getLecciones();
    return lecciones.find(leccion => leccion.id === id);
  }
}
