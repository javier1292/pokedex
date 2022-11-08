import { Component, OnInit,DoCheck } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UserService } from 'src/app/Services/user-service.service';
import { global } from 'src/app/Services/Global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'pokedex';
  public identity:any;
  public token:any;
  public url:any;
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
    ){
      this.identity = this._userService.getidentity();
      this.token = this._userService.gettoken();
      this.url = global.url;

    }

    ngOnInit() {
      console.log(this.identity);
      console.log(this.token);
    }
    ngDoCheck(): void {
      this.identity = this._userService.getidentity();
    }

    logout() {
      localStorage.clear();
      this.identity = null;
      this.token = null;
      this._router.navigate(['/'])

    }
}
