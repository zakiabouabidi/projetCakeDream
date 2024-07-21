<<<<<<< HEAD:front/src/app/shared/commande.ts
import { Produit } from "./produit";

export class Commande {
    constructor(
      public produits: Produit[],
      public totalAchat: number,
      public quantite: number,
      public status: string
    ) {}
  }
  
=======
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
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b:front/src/app/models/commande.ts
