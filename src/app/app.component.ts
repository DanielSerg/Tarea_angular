import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './sitio/cabecera/cabecera.component';
import { InicioComponent } from './sitio/inicio/inicio.component';
import { ContactoComponent } from './sitio/contacto/contacto.component';
import { FooterComponent } from './sitio/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CabeceraComponent,InicioComponent,ContactoComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tareaAngular';
}
