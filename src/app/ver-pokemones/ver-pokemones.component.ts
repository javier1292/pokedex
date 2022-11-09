import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../Models/User';
import { PokemonService } from '../Services/pokemon.service';
import { UserService } from '../Services/user-service.service';
import { global } from '../Services/Global';
import { Pokemon } from '../Models/Pokemon';
@Component({
  selector: 'app-ver-pokemones',
  templateUrl: './ver-pokemones.component.html',
  styleUrls: ['./ver-pokemones.component.css'],
  providers:[PokemonService,UserService]
})
export class VerPokemonesComponent implements OnInit {
  public pokemones: Array<Pokemon>;
  public identity: any;
  public token: any;
  public status: string;
  public url: any;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _pokemonservice : PokemonService,
    private _userService : UserService,
  ) {
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.url = global.url;
    this.pokemones = []
   }

  ngOnInit(): void {
    this.getPokemones();
  }

  getPokemones(){
    this._pokemonservice.getALL(this.token).subscribe(
      (response:any) =>{
        if(response.pokemon){
          this.pokemones = response.pokemon;

        }



      },
      error =>{
        console.log(error);
      }
    )
  }

}
