import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../Services/user-service.service';
import { global } from '../Services/Global';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [UserService],
})
export class InicioComponent implements OnInit {

  public entrenadores: Array<User>;
  public identity: any;
  public token: any;
  public status: string;
  public url: any;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _userService: UserService,
  ) {
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.url = global.url;
    this.entrenadores = []
  }

  ngOnInit(): void {
    this.getEntrenadores();
  }
  getEntrenadores() {
    this._userService.getALL().subscribe(
      (response:any) =>{
        if(response.users){
          this.entrenadores = response.users;

        }



      },
      error =>{
        console.log(error);
      }
    )
  }
}
