import { Routes } from '@angular/router';
import { ApiterceroComponent } from './components/pages/apitercero/apitercero.component';
import { EquipoComponent } from './components/pages/equipo/equipo.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { PokeapiComponent } from './components/pages/pokeapi/pokeapi.component';

export const routes: Routes = [
  {
    path: 'apitercero',
    component: ApiterceroComponent,
    title: 'Api Tercero',
  },
  {
    path: 'equipo',
    component: EquipoComponent,
    title: 'Equipo',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'pokeapi',
    component: PokeapiComponent,
    title: 'PokeApi',
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    title: 'Page Not Found',
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
