import { Forme } from "./Forme";

export class Rectangle implements Forme {
    private _longueurCote: number; 
    private _largeurCote: number;
    public static NBRE_RECTANGLE: number =0;

    constructor (longueurCote: number, largeurCote: number){
        this._longueurCote = longueurCote,
        this._largeurCote = largeurCote,
        Rectangle.NBRE_RECTANGLE++;
    }

   aire(): number{
    return this._longueurCote * this._largeurCote
   }
   perimetre(): number {
    return 2 * (this._longueurCote + this._largeurCote);
    }
     public get longueurCote(): number {
        return this._longueurCote;
    }
    public set longueurCote(value: number) {
        this._longueurCote = value;
    }
    public get largeurCote(): number {
        return this._largeurCote;
    }
    public set largeurCote(value: number) {
        this._largeurCote = value;
    }
}