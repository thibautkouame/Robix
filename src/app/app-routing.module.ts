import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

import { SelectionroboComponent } from './selectionrobo/selectionrobo.component';
import { SelectiondroneComponent } from './selectiondrone/selectiondrone.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DashComponent } from './dash/dash.component';


const routes: Routes = [
  {
    path: '',
    component: ConnexionComponent,
  },
  {
    path: 'accueil',
    component: AccueilComponent,
  },

  {
    path: 'selectiondrone',
    component: SelectiondroneComponent,
  },


  {
    path: 'selectionrobo',
    component: SelectionroboComponent,
  },
  {
    path: 'dash',
    component: DashComponent,
  },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
