import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { GestionNotesComponent } from './gestion-notes/gestion-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    AuthComponent,
    GestionNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
