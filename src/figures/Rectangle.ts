class Rectangle implements Forme {
    private _longueurCote: number; 
    private _largeurCote: number;

    constructor (longueurCote: number, largeurCote: number){
        this._longueurCote = longueurCote,
        this._largeurCote = largeurCote
    }

   aire() : number{
       return 0;//??;
   }
   perimetre(): number {
    return 0;//??;
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