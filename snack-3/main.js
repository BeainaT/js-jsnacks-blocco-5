// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const cars = [
    {
        marca: "marca1",
        modello: "modello1",
        alimentazione: "elettrico",
    },
    {
        marca: "marca2",
        modello: "modello2",
        alimentazione: "diesel",
    },
    {
        marca: "marca3",
        modello: "modello3",
        alimentazione: "benzina",
    },
    {
        marca: "marca4",
        modello: "modello4",
        alimentazione: "gpl",
    },
    {
        marca: "marca5",
        modello: "modello5",
        alimentazione: "diesel",
    },
    {
        marca: "marca6",
        modello: "modello6",
        alimentazione: "elettrico",
    },
    {
        marca: "marca7",
        modello: "modello7",
        alimentazione: "benzina",
    },
    {
        marca: "marca8",
        modello: "modello8",
        alimentazione: "diesel",
    },
    {
        marca: "marca9",
        modello: "modello9",
        alimentazione: "metano",
    },
    {
        marca: "marca10",
        modello: "modello10",
        alimentazione: "gpl",
    },
];
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.


const benz = cars.filter(elm => elm.alimentazione === "benzina");

const diesel = cars.filter(elm => elm.alimentazione === "diesel");

const others = cars.filter((elm) => {
    if(elm.alimentazione !== "benzina" && elm.alimentazione !== "diesel") {
        return cars;
    }
});
// Infine stampa separatamente i 3 array.
console.log(benz, diesel, others);