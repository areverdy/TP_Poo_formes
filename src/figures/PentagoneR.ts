import { Forme } from "./Forme";

export class PentagoneR implements Forme {
    private _longueurCote: number;  
    private _largeurCote: number;

    constructor (longueurCote : number, largeurCote : number){
        this._longueurCote = longueurCote,
        this._largeurCote = largeurCote
    }

    aire() : number{
        return (5 / 4) * Math.pow(this._longueurCote, 2) * (1 / Math.tan(Math.PI / 5));
   }
   perimetre() : number{
    return this._largeurCote * this._longueurCote; 
    }
    public get longueurCote_1(): number {
        return this._longueurCote;
    }
    public set longueurCote_1(value: number) {
        this._longueurCote = value;
    }
    public get largeurCote(): number {
        return this._largeurCote;
    }
    public set largeurCote(value: number) {
        this._largeurCote = value;
    }
}