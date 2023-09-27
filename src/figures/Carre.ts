import { Forme } from "./Forme";

export class Carre implements Forme {
   private _longeurCote: number;
   public static NBRE_CARRE: number =0;


   constructor (longueurCote : number) {
    this._longeurCote = longueurCote;
    Carre.NBRE_CARRE++;
   }

   aire() : number{
       return this._longeurCote* this._longeurCote   
   }

   perimetre() : number{
    return 4* this._longeurCote  
   }
   static getSommeAirePerimetres(mesCarres : Forme[]): number[] {
    let sommeAireCarre = 0;
    let sommePerimetreCarre = 0;
    mesCarres.forEach(monCarre => {
        sommeAireCarre+=monCarre.aire();
        sommePerimetreCarre+=monCarre.perimetre()
    });


    return [sommeAireCarre,sommePerimetreCarre] 
    console.log(sommeAireCarre, sommePerimetreCarre)
}
    
   public get longeurCote(): number {
    return this._longeurCote;
    }
    public set longeurCote(value: number) {
    this._longeurCote = value;
    }
}