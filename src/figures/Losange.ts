import { Forme } from "./Forme";

export class Losange implements Forme {
    private _petiteDiag: number;
    private _grandeDiag: number;

    constructor (petiteDiag : number, grandeDiag : number) {
        this._petiteDiag = petiteDiag,
        this._grandeDiag = grandeDiag
    }

    aire() : number{
        return (this.petiteDiag * this.grandeDiag) / 2;
    }
    perimetre() : number{
        const cote = Math.sqrt((this.petiteDiag / 2) ** 2 + (this.grandeDiag / 2) ** 2);
    return 4 * cote;
    }
    
    public get petiteDiag(): number {
        return this._petiteDiag;
    }
    public set petiteDiag(value: number) {
        this._petiteDiag = value;
    }
    public get grandeDiag(): number {
        return this._grandeDiag;
    }
    public set grandeDiag(value: number) {
        this._grandeDiag = value;
    }
}
