import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../Services/pokemon.service';
import { UserService } from '../Services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../Models/Pokemon';
import { User } from '../Models/User';
import { global } from '../Services/Global';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css'],
  providers:[UserService,PokemonService]
})
export class UserDetalleComponent implements OnInit {

  public entrenadores: User
  public pokemon: Array<Pokemon>;
  public identity:any;
  public token:any;
  public status: string;
  public url:any;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private user: UserService,
    private _userService: UserService,
    private _pokemonService: PokemonService
  ) {
    this.identity = this.user.getidentity();
    this.token = this.user.gettoken();

    this.url = global.url;
   }

  ngOnInit(): void {
    this.detalle();
    this.getMyPokemons();
  }

  detalle(){
    this.route.params.subscribe(params =>{
      let id = params['id']
       this._userService.detalle(id).subscribe(
        (res) =>{
          if(res.user){
            this.entrenadores = res.user;
          }else{
            console.log("esta mal la condicional ")
          }
        },
        err =>{
          console.log(err)
        }
      )

    });
  }

  getMyPokemons(){
    this.route.params.subscribe(params =>{
      let id = params['id']
       this._pokemonService.getMyPokemon(id).subscribe(
        (res) =>{
          if(res.pokemon){
            this.entrenadores = res.user;
          }else{
            console.log("esta mal la condicional ")
          }
        },
        err =>{
          console.log(err)
        }
      )

    });
  }

}
