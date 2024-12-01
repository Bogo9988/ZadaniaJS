const produkty = [
    { nazwa: "Blue de Chanel", cena: 900, kategoria: "perfumy" },
    { nazwa: "Tom Ford Out Wood", cena: 1500, kategoria: "perfumy" },
    { nazwa: "Stol", cena: 200, kategoria: "meble" },
    { nazwa: "Krzeslo", cena: 100, kategoria: "meble" },
];

const filtrowanieProduktow = (produkty, kategoria = null, minCena = 0, maxCena = 10000) =>
    produkty.filter(
        // Destrukturyzacja chcemy wyciagnac kategoria cen
        ({ kategoria: c, cena }) => (!kategoria || c === kategoria) && cena >= minCena && cena <= maxCena
    );

function wyswietlProdukty(filtracjaProduktow) {
    filtracjaProduktow.forEach(produkt => {
        console.log(` Produkt: ${produkt.nazwa}, Cena: ${produkt.cena}, Kategoria: ${produkt.kategoria} `);
    });
}

const kategoriaFiltru = "perfumy";
const minCenaFiltru = 800;         
const maxCenaFiltru = 3500;       


const filtryProduktow = filtrowanieProduktow(produkty, kategoriaFiltru, minCenaFiltru, maxCenaFiltru);

wyswietlProdukty(filtryProduktow);
