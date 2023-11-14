import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AuthComponent } from './auth/auth.component';
import { GestionNotesComponent } from './gestion-notes/gestion-notes.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardAdminComponent},
  {path: 'auth', component:AuthComponent},
  {path: '', redirectTo:'auth', pathMatch:'full'},
  {path:'gestionnotes', component:GestionNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
