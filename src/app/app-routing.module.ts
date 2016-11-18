import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './forms/user/user.component';
import { HealthComponent } from './forms/health/health.component';
import { SummaryComponent } from "./forms/summary/summary.component";

const routes: Routes = [
  {path: '',        redirectTo: '/user', pathMatch: 'full'},
  {path: 'user',    component: UserComponent},
  {path: 'health',  component: HealthComponent},
  {path: 'summary', component: SummaryComponent},
  {path: '**',      redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2MultiStepFormRoutingModule { }
