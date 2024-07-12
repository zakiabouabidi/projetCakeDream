import { Status } from "./status";

export class Commande {
    id: any;
    idproduit!:number
    totalAchat!: number;
    quantite!:number ;
    status!:Status
constructor(id: any){
    this.id=id;
}
}
