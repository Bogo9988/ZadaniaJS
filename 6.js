
const ocenyUczniow = [
    { imie: 'Szymon', ocena: 100 },
    { imie: 'Kuba', ocena: 43 },
    { imie: 'Zuzia', ocena: 78 },
    { imie: 'Kasia', ocena: 52 },
    { imie: 'Pawel', ocena: 88 }
  ];
  
  function obliczSrednia(wynik) {
    const oceny = wynik.reduce((sum, { ocena }) => sum + ocena, 0);
    return oceny / wynik.length;
  }
  
  function znajdzNajwWynik(wynik) {
    return wynik.reduce((max, { ocena }) => (ocena > max ? ocena : max), 0);
  }
  
  function znajdzNajmnWynik(wynik) {
    return wynik.reduce((min, { ocena }) => (ocena < min ? ocena : min), 100);
  }
  
  function wyswietlWynik(wynik) {
    const srednia = obliczSrednia(wynik);
    const najwyzszy = znajdzNajwWynik(wynik);
    const najnizszy = znajdzNajmnWynik(wynik);
  
    console.log(`Średnia wyników: ${srednia}`);
    console.log(`Najwyższy wynik: ${najwyzszy}`);
    console.log(`Najniższy wynik: ${najnizszy}`);
  }
  
  wyswietlWynik(ocenyUczniow);
  
