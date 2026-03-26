import { Routes } from '@angular/router';
import { HomeComponent } from './components/modules/home/home.component';
import { MapasComponent } from './components/modules/mapas/mapas.component';

export const ROUTES: Routes = [
   // { path: 'home', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'mapas', component: MapasComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
