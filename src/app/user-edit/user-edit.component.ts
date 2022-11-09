import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../Services/user-service.service';
import { User } from '../Models/User';
import { global } from '../Services/Global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers:[UserService]
})
export class UserEditComponent implements OnInit {

  public user: User;
  public identity: any;
  public token: any;
  public status: string;
  public afuConfig:any;
  public url:any
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.user = this.identity;
    this.url = global.url;
    this.afuConfig = {
      multiple: false,//un solo archivo
      formatsAllowed: ".jpg,.jpeg,.png,.gif",//formatos permitidos
      maxSize: '50',//maximo de 50 megas
      uploadAPI: {
        url: this.url + 'uploadAvatar',
        headers: {
          Authorization: this.token,
        },
        params: {
          page: '1',
        },
        responseType: 'json',
      },
      theme: 'attachPin',
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText: 'Subir archivo',
      replaceTexts: {
        selectFileBtn: 'Seleccione un archivo',
        resetBtn: 'Reiniciar',
        uploadBtn: 'Subir',
        dragNDropBox: 'Arrastre y suelte',
        attachPinBtn: 'Sube tu avatar',
        afterUploadMsg_success: 'Subida exitosa !',
        afterUploadMsg_error: 'Subida erronea !',
        sizeLimit: 'peso exeido',
      },
    }
  }

  ngOnInit(): void {
  }

  docUpload(data:any){
    let data_obj = data.body;
    this.user.image = data_obj.user.image;
    console.log(this.user);
  }
  onSubmit(form: any) {
    this._userService.update(this.user).subscribe(
      (response) => {
        if (response.user && response.user._id) {
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));


        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }
}
