import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemosDetailComponent } from './pokemos-detail/pokemos-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pokemon', component: PokemosDetailComponent }
  ];

