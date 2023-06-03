import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EnvoyerRecComponent } from './components/envoyer-rec/envoyer-rec.component';
import { ReclamationsComponent } from './components/reclamations/reclamations.component';
import { TraiterRecComponent } from './components/traiter-rec/traiter-rec.component';
import { ReclamationsEnvoyeesComponent } from './components/reclamations-envoyees/reclamations-envoyees.component';
import { ReclamationsTraiteesComponent } from './components/reclamations-traitees/reclamations-traitees.component';
import { IntervenantsComponent } from './components/intervenants/intervenants.component';

const appRoutes :Routes =[
  {path:'' , component:LoginComponent},
  {path:'Reclamations' , component:ReclamationsComponent},
  {path:'ReclamationEnvoyees' , component:ReclamationsEnvoyeesComponent},
  {path:'ReclamationsTraitees' , component:ReclamationsTraiteesComponent},
  {path:'Intervenants' , component:IntervenantsComponent},
  {path:'TraiterReclamation' , component:TraiterRecComponent},
  {path:'EnvoyerReclamation' , component:EnvoyerRecComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnvoyerRecComponent,
    ReclamationsComponent,
    TraiterRecComponent,
    ReclamationsEnvoyeesComponent,
    ReclamationsTraiteesComponent,
    IntervenantsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
