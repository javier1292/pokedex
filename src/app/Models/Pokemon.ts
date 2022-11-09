import { User } from './User';
export class Pokemon{
  constructor(
    public _id: string,
    public nombre: string,
    public nivel: string,
    public tipo:string,
    public comentario:string,
    public imagen: string,
    public user: User,
    public date: string
  ){}
}
