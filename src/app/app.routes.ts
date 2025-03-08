import { Routes } from '@angular/router';
import { PaginaAboutComponent } from './components/pagina-about/pagina-about.component';
import { PrincipalComponent } from './components/principal/principal.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'pagina-sobre', component: PaginaAboutComponent }
];
