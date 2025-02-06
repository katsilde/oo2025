var eesnimi = "Juku";
var vanus = 5;
console.log("abc");
console.log("Tere, " + eesnimi);
if (vanus < 7) {
    console.log("Tasuta");
}
else {
    if (vanus < 16) {
        console.log("Osta täispilet");
    }
    else {
        console.log("Osta lastepilet");
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
