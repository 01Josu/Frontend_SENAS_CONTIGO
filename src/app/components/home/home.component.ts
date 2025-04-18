import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Asegúrate de que RouterModule esté importado

@Component({
  selector: 'app-home',
  standalone: true,  // Este atributo indica que el componente es autónomo
  imports: [RouterModule], // Asegúrate de que RouterModule esté en los imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}
}
