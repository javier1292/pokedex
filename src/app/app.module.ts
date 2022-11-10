import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { MomentModule } from 'angular2-moment';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';
import { VerPokemonesComponent } from './ver-pokemones/ver-pokemones.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MyPokemonsComponent } from './my-pokemons/my-pokemons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddPokemonsComponent } from './add-pokemons/add-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    UserDetalleComponent,
    VerPokemonesComponent,
    UserEditComponent,
    MyPokemonsComponent,
    AddPokemonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    MomentModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
