class Cercle implements Forme {
   private _rayon: number;

   constructor (rayon: number){
      this._rayon = rayon
   }

   aire() : number{
      const pi = Math.PI
        return pi * this.rayon ** 2;
   }
   perimetre() : number{
      const pi = Math.PI
      return 2 * pi * this.rayon;
   }
   public get rayon(): number {
      return this._rayon;
   }
   public set rayon(value: number) {
      this._rayon = value;
   }
}