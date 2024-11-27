class Koszyk {
    constructor() {
      this.produkty = []; // Inicjalizacja pustej tablicy do przechowywania produktów w koszyku
    }
  
    // Dodawanie lub aktualizowanie produktu w koszyku
    dodajProdukt(nazwa, cena, ilosc) {
      // Sprawdzamy, czy produkt już istnieje w koszyku
      const produkt = this.produkty.find(produkt => produkt.nazwa === nazwa);
      
      // Jeśli produkt istnieje, zwiększamy jego ilość; jeśli nie, dodajemy nowy produkt do koszyka
      produkt ? produkt.ilosc += ilosc : this.produkty.push({ nazwa, cena, ilosc });
  
      // Potwierdzenie dodania produktu
      console.log(`${ilosc} x ${nazwa} dodano do koszyka.`);
    }
  
    // Usuwanie produktu z koszyka
    usunProdukt(nazwa) {
      // Znajdujemy indeks produktu w koszyku
      const indeks = this.produkty.findIndex(produkt => produkt.nazwa === nazwa);
      
      // Jeśli produkt istnieje, usuwamy go z tablicy
      if (indeks !== -1) {
        this.produkty.splice(indeks, 1); // Usuwanie produktu
        console.log(`Produkt ${nazwa} usunięto z koszyka.`);
      } else {
        // Jeśli produktu nie ma, informujemy o tym użytkownika
        console.log(`Produkt ${nazwa} nie znaleziono w koszyku.`);
      }
    }
  
    // Wyświetlanie zawartości koszyka
    pokazKoszyk() {
      // Sprawdzamy, czy koszyk jest pusty
      console.log(this.produkty.length ? "Zawartość koszyka:" : "Koszyk jest pusty.");
      
      // Wyświetlamy szczegóły każdego produktu w koszyku
      this.produkty.forEach(({ nazwa, ilosc, cena }) => 
        console.log(`${nazwa} - ${ilosc} x ${cena.toFixed(2)} zł`) // Wyświetlenie produktu z ilością i ceną
      );
    }
  }
  
  // Przykładowe użycie
  const koszyk = new Koszyk();
  koszyk.dodajProdukt("Jabłko", 2.5, 3); // Dodajemy 3 jabłka do koszyka
  koszyk.dodajProdukt("Gruszka", 3.2, 2); // Dodajemy 2 gruszki do koszyka
  koszyk.pokazKoszyk(); // Wyświetlamy zawartość koszyka
  koszyk.usunProdukt("Jabłko"); // Usuwamy jabłka z koszyka
  koszyk.pokazKoszyk(); // Wyświetlamy zawartość koszyka po usunięciu
  