import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ɵɵNgOnChangesFeature } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pokemon } from '../Models/Pokemon';
import { PokemonService } from '../Services/pokemon.service';
import { UserService } from '../Services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pokemons',
  templateUrl: './add-pokemons.component.html',
  styleUrls: ['./add-pokemons.component.css'],
  providers:[PokemonService,UserService]
})
export class AddPokemonsComponent implements OnInit {

  public identity:any;
  public token: any;
  public url: any;
  public status: any;
  public pokemon: Pokemon
  public afuConfig: any;

  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }


  @Output() onSave : EventEmitter<any> = new EventEmitter<any>();
  public inEdit = false
  public inView = false


  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _pokemonService: PokemonService,
    private _userService: UserService,
    ) {
      this.identity = this._userService.getidentity();
      this.token = this._userService.gettoken();
      this.pokemon = new Pokemon('','','','','','',this.identity._id,'')
      this.afuConfig = {
        multiple: false, //un solo archivo
      formatsAllowed: '.jpg,.jpeg,.png,.gif', //formatos permitidos
      maxSize: '50', //maximo de 50 megas
      uploadAPI: {
        url:
        this.url + 'upload-paceinte/' + (this.route.params as any)._value.id,
        headers: {
          Authorization: this.token,
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
        attachPinBtn: 'foto del paciente',
        afterUploadMsg_success: 'Subida exitosa !',
        afterUploadMsg_error: 'Subida erronea !',
        sizeLimit: 'peso exeido',
      },
    };
  }
  public form: FormGroup = new FormGroup({
    user: new FormControl(),
    nombre : new FormControl(''),
    tipo : new FormControl(''),
    nivel : new FormControl(0),
    comentario : new FormControl(''),
  });

  ngOnInit(): void {
  }

  Save(){
    this._pokemonService.addPokemon(this.token,this.form.value).subscribe({
      next:(res)=>{

        if (res.succeded) {
          this.onSave.emit(true);
          this.Clear();
          this.closebutton.nativeElement.click();
        } else {

          res.errors.forEach((element: any) => {
            console.log(element);
          });
        }

      },
      error:(err)=>{
        this.status = 'error'
        console.log(err)
      }

    });
  }

  Edit(){
    let id = this.pokemon._id;
    this._pokemonService.update(this.token,id,this.form.value).subscribe({
      next:(res)=>{

        if (res.succeded) {
          this.onSave.emit(true);
          this.Clear();
          this.closebutton.nativeElement.click();
        } else {

          res.errors.forEach((element: any) => {
            console.log(element);
          });
        }

      },
      error:(err)=>{
        this.status = 'error'
        console.log(err)
      }

    });
  }

  onSubmit() {
    if(this.inEdit == false){
      this.Save();
    }else{
      this.Edit();
    }
  }

  docUpload(data: any) {
    let data_obj = data.body;
  }
  Clear(){
    this.form.patchValue({
      Nombre: '',
      Comentario: '',
      Nivel: 0,
      Tipo: '',
    })
  }
}
