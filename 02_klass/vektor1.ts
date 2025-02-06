class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

let v1:Vektor=new Vektor(3, 5);
v1.kuva();
console.log(v1.pikkus());
