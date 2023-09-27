import { Forme } from "./Forme";

export class Triangle implements Forme {
   private _longueurCote: number;
   public static NBRE_TRIANGLE: number = 0;

   constructor (longueurCote : number){
    this._longueurCote = longueurCote,
    Triangle.NBRE_TRIANGLE++;
   }

   aire(): number{
    const s = (this._longueurCote *3) / 2;
    return Math.sqrt(s * (s - this._longueurCote) * (s - this._longueurCote) * (s - this._longueurCote));
   }
   perimetre(): number {
    return this._longueurCote + this._longueurCote + this._longueurCote;
    }
    public get longueurCote(): number {
        return this._longueurCote;
    }
    public set longueurCote(value: number) {
        this._longueurCote = value;
    }
}