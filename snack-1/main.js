// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

let zucchine = [
    {
        type: "type1",
        weight: 90,
        length: 15,
    },
    {
        type: "type2",
        weight: 310,
        length: 20,
    },
    {
        type: "type3",
        weight: 120,
        length: 10,
    },
    {
        type: "type4",
        weight: 80,
        length: 30,
    },
    {
        type: "type5",
        weight: 100,
        length: 40,
    },
    {
        type: "type6",
        weight: 380,
        length: 50,
    },
    {
        type: "type7",
        weight: 220,
        length: 10,
    },
    {
        type: "type8",
        weight: 400,
        length: 18,
    },
    {
        type: "type9",
        weight: 500,
        length: 22,
    },
    {
        type: "type10",
        weight: 600,
        length: 6,
    },
    {
        type: "type11",
        weight: 200,
        length: 10,
    }
];
let sum = 0;
for (let i=0; i <= zucchine.length; i++) {
    sum += zucchine[i].weight;
}
console.log(sum);
