function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
function kehamassiindeks2(cm, kg) {
    var m = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
console.log(kehamassiindeks(181, 110));
console.log(kehamassiindeks2(181, 110));
var massid = [80, 90, 100, 110];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kehamassiindeks(181, mass));
}
var indeksid = massid.map(function (mass) { return kehamassiindeks(181, mass); });
console.log(indeksid);
var pikkused = [170, 175, 180, 185];
for (var _a = 0, pikkused_1 = pikkused; _a < pikkused_1.length; _a++) {
    var pikkus = pikkused_1[_a];
    console.log(kehamassiindeks(pikkus, 80));
}
var vastus = [];
for (var pikkus = 150; pikkus < 180; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);
