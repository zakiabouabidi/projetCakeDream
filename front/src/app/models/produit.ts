import { Categorie } from "./categorie";

export class Produit {
    id: any;
    name: string;
    prix: any;
    quantite:any;
    description:string;
     categorieID:any;
     categorienamme:string;
    image: string;

    constructor(id: any, name: string, prix: any, quantite:any,categorieID: any, categorienamme:string, image: string,description:string) {
        this.id = id;
        this.name = name;
        this.prix = prix;
        this.quantite=quantite;
        this.description=description;
        this.categorieID = categorieID;
        this.categorienamme = categorienamme;
        this.image = image;
    }
}
