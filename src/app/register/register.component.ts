import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../Services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User;
  public status: any;
  constructor(private _userService:UserService) {
    this.user = new User(
      '','','','','','','ROLE_User',''
    );
   }

  ngOnInit(): void {
  }
  onSubmit(form:any){

    this._userService.Registro(this.user).subscribe(
      response =>{
        if(response.user && response.user._id){
          this.status = "success"
          form.reset();



        }else{
          this.status="error"
        }


      },
      error =>{
        this.status = "error"

      }
    )
  }


}
