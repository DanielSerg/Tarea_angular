import { Routes } from '@angular/router';
import { CabeceraComponent } from './sitio/cabecera/cabecera.component';
import { InicioComponent } from './sitio/inicio/inicio.component';
import { ContactoComponent } from './sitio/contacto/contacto.component';
import { FooterComponent } from './sitio/footer/footer.component';

export const routes: Routes = [
    {
        path:'cabecera',component:CabeceraComponent
    },
    {
        path:'inicio',component:InicioComponent
    },
    {
        path:'contacto',component:ContactoComponent
    },
    {
        path:'footer',component:FooterComponent
    },
];
