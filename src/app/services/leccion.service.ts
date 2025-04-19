import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeccionService {

  constructor() { }

   // Método para obtener todas las lecciones
   getLecciones() {
    return [
      { id: 1, titulo: 'Abecedario', descripcion: 'Aprende el abecedario en lengua de señas y cómo formar palabras simples.' },
      { id: 2, titulo: 'Saludos', descripcion: 'Aprende los saludos básicos en lengua de señas para iniciar conversaciones.' },
      { id: 3, titulo: 'Números', descripcion: 'Conoce cómo expresar números del 0 al 100 usando lengua de señas.' },
      { id: 4, titulo: 'Colores', descripcion: 'Identifica y aprende los signos para los colores más comunes.' },
      { id: 5, titulo: 'Familia', descripcion: 'Aprende los signos para hablar sobre miembros de tu familia.' },
      { id: 6, titulo: 'Días de la semana', descripcion: 'Domina los signos para los días de la semana en señas.' },
      { id: 7, titulo: 'Frases comunes', descripcion: 'Utiliza frases sencillas en conversaciones cotidianas.' },
      { id: 8, titulo: 'Comida y Bebida', descripcion: 'Aprende a pedir y hablar sobre alimentos y bebidas en señas.' },
    ];
  }

  // Método para obtener una lección por ID
  getLeccion(id: number) {
    const lecciones = this.getLecciones();
    return lecciones.find(leccion => leccion.id === id);
  }
}
