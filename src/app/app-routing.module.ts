import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', component: PlanetsComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},
  // Using details as separate module to improve app first load time
  {path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
