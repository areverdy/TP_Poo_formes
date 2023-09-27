class Parrallelogramme implements Forme {
    private _hauteur: number;  
    private _cote: number;   

    constructor (hauteur: number, cote: number) {
        this._hauteur = hauteur,
        this._cote = cote
    }

    aire() : number{
        return this.cote * this.hauteur;
    }
    perimetre() : number{
        return 2 * (this.hauteur + this.cote);
    }
    public get hauteur(): number {
        return this._hauteur;
    }
    public set hauteur(value: number) {
        this._hauteur = value;
    }
    public get cote(): number {
        return this._cote;
    }
    public set cote(value: number) {
        this._cote = value;
    }
}