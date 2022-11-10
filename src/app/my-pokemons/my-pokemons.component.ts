import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../Models/User';
import { PokemonService } from '../Services/pokemon.service';
import { UserService } from '../Services/user-service.service';
import { global } from '../Services/Global';
import { Pokemon } from '../Models/Pokemon';
import { AddPokemonsComponent } from '../add-pokemons/add-pokemons.component';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.css']
})
export class MyPokemonsComponent implements OnInit {

  public pokemones: Array<Pokemon>;
  public identity: any;
  public token: any;
  public status: string;
  public url: any;
  @ViewChild(AddPokemonsComponent) addmodal: AddPokemonsComponent;
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
    this.getMyPokemons();
  }

  CreateMode(){
    this.addmodal.inView=false;
    this.addmodal.inEdit=false;
    this.addmodal.form.enable();
    this.addmodal.Clear();
  }
  getMyPokemons(){
    let id= this.identity._id
    this._pokemonservice.getMyPokemon(id).subscribe(
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
