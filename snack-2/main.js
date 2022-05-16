// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let zucchine = [
    {
        type: "type1",
        weight: 90,
        cm: 15,
    },
    {
        type: "type2",
        weight: 310,
        cm: 20,
    },
    {
        type: "type3",
        weight: 120,
        cm: 10,
    },
    {
        type: "type4",
        weight: 80,
        cm: 30,
    },
    {
        type: "type5",
        weight: 100,
        cm: 40,
    },
    {
        type: "type6",
        weight: 380,
        cm: 50,
    },
    {
        type: "type7",
        weight: 220,
        cm: 10,
    },
    {
        type: "type8",
        weight: 400,
        cm: 18,
    },
    {
        type: "type9",
        weight: 500,
        cm: 22,
    },
    {
        type: "type10",
        weight: 600,
        cm: 6,
    },
];

let lowZucchina = [];
let plusZucchina = [];

for (let i=0; i <= zucchine.cm; i++) {
    if(zucchine[i].cm < 15) {
        lowZucchina.push(zucchine[i]);
    } else {
        plusZucchina.push(zucchine[i]);
    }
}
let sum = 0;
for (let i=0; i <= lowZucchina.length; i++) {
    sum += zucchine[i].weight;
}
console.log(sum);
for (let i=0; i <= plusZucchina.length; i++) {
    sum += zucchine[i].weight;
}
console.log(sum);
