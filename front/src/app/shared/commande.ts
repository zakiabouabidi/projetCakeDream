import { Produit } from "./produit";

export class Commande {
    constructor(
      public produits: Produit[],
      public totalAchat: number,
      public quantite: number,
      public status: string
    ) {}
  }
  