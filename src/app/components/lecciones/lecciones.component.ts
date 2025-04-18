import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para *ngFor
import { RouterModule } from '@angular/router';  // Para routerLink
import { LeccionService } from '../../services/leccion.service';

@Component({
  selector: 'app-lecciones',
  standalone: true,  // << Standalone activado
  imports: [CommonModule, RouterModule],  // << Importando módulos necesarios
  templateUrl: './lecciones.component.html',
  styleUrls: ['./lecciones.component.css']
})
export class LeccionesComponent implements OnInit {
  lecciones: any[] = [];

  constructor(private leccionService: LeccionService) {}

  ngOnInit(): void {
    this.lecciones = this.leccionService.getLecciones();
  }
}
