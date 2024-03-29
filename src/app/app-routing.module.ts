import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcercaDeComponent } from "./componentes/acerca-de/acerca-de.component";
import { EditAcercaDeComponent } from "./componentes/acerca-de/edit-acerca-de.component";
import { EditeducacionComponent } from "./componentes/educacion/edit-educacion.component";
import { NewEducacionComponent } from "./componentes/educacion/new-educacion.component";
import { EditExperienciaComponent } from "./componentes/experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./componentes/experiencia/new-experiencia.component";
import { HomeComponent } from "./componentes/home/home.component";
import { EditHysComponent } from "./componentes/hys/edit-hys.component";
import { NewHysComponent } from "./componentes/hys/new-hys.component";
import { LoginComponent } from "./componentes/login/login.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NewEducacionComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    {path: 'newHyS', component: NewHysComponent},
    {path: 'editHyS/:id', component: EditHysComponent},
    {path: 'editacercade/:id', component: EditAcercaDeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }