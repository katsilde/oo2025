function kehamassiindeks(cm:number, kg:number):number{
    let m:number=cm/100;
    return kg/(m*m);
}

function kehamassiindeks2(cm:number, kg:number):number{
    let m:number=cm/100;
    return 1.3*kg/Math.pow(m, 2.5);
}

console.log(kehamassiindeks(181,110));
console.log(kehamassiindeks2(181,110));

let massid:number[]=[80, 90, 100, 110]
for (let mass of massid){
    console.log(kehamassiindeks(181, mass));
}

let indeksid:number[]=massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid);

let pikkused:number[]=[170, 175, 180, 185];
for (let pikkus of pikkused){
    console.log(kehamassiindeks(pikkus, 80))
}

let vastus:number[][]=[];
for (let pikkus=150; pikkus<180; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);
