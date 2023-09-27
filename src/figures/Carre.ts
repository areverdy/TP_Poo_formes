class Carre implements Forme {
   private _longeurCote: number;

   constructor (longueurCote : number) {
    this._longeurCote = longueurCote
   }

   aire() : number{
       return this._longeurCote* this._longeurCote   
   }

   perimetre() : number{
    return 4* this._longeurCote  
}

   public get longeurCote(): number {
    return this._longeurCote;
    }
    public set longeurCote(value: number) {
    this._longeurCote = value;
    }
}