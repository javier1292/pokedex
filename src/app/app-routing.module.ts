import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';
import { VerPokemonesComponent } from './ver-pokemones/ver-pokemones.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'registro',component:RegisterComponent},
  {path: 'inicio',component:InicioComponent},
  {path: 'detalles/:id',component:UserDetalleComponent},
  {path: 'ver-pokemones',component:VerPokemonesComponent},
  {path: 'user-edit',component:UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
