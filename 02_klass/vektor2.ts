class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y);
    }
    korruta(n:number):Vektor{
        return new Vektor(this.x*n, this.y*n);
    }
    suurendaX():void{
        this.x+=1;
    }
    skalaarkorrutis(teine:Vektor){
        return this.x*teine.x+this.y*teine.y;
    }
}

//massiiv neljast vektorist 
//leia nende summa

let vektorid:Vektor[]=[
    new Vektor(1,3),
    new Vektor(1,5),
    new Vektor(3,3),
    new Vektor(2,1)
];
let asukoht=vektorid[0];
for(let i=1; i<vektorid.length; i++){
    asukoht=asukoht.liida(vektorid[i]);
}
asukoht.kuva();

let v1:Vektor=new Vektor(3, 5);
let vagun:Vektor=new Vektor(9, -4);
let energia:number=v1.skalaarkorrutis(vagun);
console.log(energia);
v1.suurendaX();
v1.kuva();
console.log(v1.pikkus());
let v3:Vektor=v1.liida(new Vektor(1,2));
v3.kuva();
v1.korruta(2).kuva();
