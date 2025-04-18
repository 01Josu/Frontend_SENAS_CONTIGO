// leccion-detalle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeccionService } from '../../services/leccion.service';

@Component({
  selector: 'app-leccion-detalle',
  templateUrl: './leccion-detalle.component.html',
  styleUrls: ['./leccion-detalle.component.css']
})
export class LeccionDetalleComponent implements OnInit {

  leccion: any;

  constructor(
    private route: ActivatedRoute,
    private leccionService: LeccionService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtenemos el ID de la ruta
    this.leccion = this.leccionService.getLeccion(id); // Obtenemos la lección usando el ID
  }
}
