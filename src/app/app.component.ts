import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*import { DistanciaComponent } from "./formularios/distancia/distancia.component";*/
/*import { MultiplicarComponent } from "./formularios/multiplicar/multiplicar.component";*/
import {initFlowbite} from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
  ngOnInit(): void {
    initFlowbite();
  }
}
