import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserService } from '../Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  public status:any;
  public identity:any;
  public token:any;
  constructor(
    private _userService:UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.user = new User(
      '','','','','','','admin',''
    );
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    try{
      this._userService.signup(this.user).subscribe(
        response =>{
          if (response.user && response.user._id){
            this.identity = response.user;
            localStorage.setItem('identity', JSON.stringify(this.identity));
            //conseguir token del usuario autentificado
            this._userService.signup(this.user, true).subscribe(
              response =>{
                if (response.token){
                  //guardar el token en una propiedad
                  this.token = response.token;
                  localStorage.setItem('token',this.token);

                  this.status = 'success';
                  this._router.navigate(['/inicio']);

                }else{
                  this.status = 'error'
                }
              },
              error=>{
                this.status = 'error'
                console.log(error)
              }
            )
          }else{
            this.status = 'error'
          }
        },
        error=>{
          this.status = 'error'
          console.log(error)
        }
      )
    }catch(error){

      error
    }
  }
}
