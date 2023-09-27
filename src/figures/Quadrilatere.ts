class Quadrilatere implements Forme {
    private _cote1: number;
    private _cote2: number; 
    private _cote3: number;   
    private _cote4: number; 

    constructor (cote1: number, cote2: number, cote3: number, cote4: number){
        this._cote1 = cote1,
        this._cote2 = cote2,
        this._cote3 = cote3,
        this._cote4 = cote4
    }
    
   aire() : number{
    return this._cote1 * this._cote2;
   }
   perimetre(): number {
    return this._cote1 + this._cote2 + this._cote3 + this._cote4;
    }

    public get cote1_1(): number {
    return this._cote1;
    }
    public set cote1_1(value: number) {
        this._cote1 = value;
    }
    public get cote2(): number {
        return this._cote2;
    }
    public set cote2(value: number) {
        this._cote2 = value;
    }
    public get cote3(): number {
        return this._cote3;
    }
    public set cote3(value: number) {
        this._cote3 = value;
    }
    public get cote4(): number {
        return this._cote4;
    }
    public set cote4(value: number) {
        this._cote4 = value;
    }
}