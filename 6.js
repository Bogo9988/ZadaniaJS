// Tablica z wynikami studentów (obiekty z nazwą studenta i wynikiem)
const studentsResults = [
    { name: 'Jan', score: 85 },
    { name: 'Anna', score: 92 },
    { name: 'Marek', score: 78 },
    { name: 'Kasia', score: 95 },
    { name: 'Paweł', score: 88 }
  ];
  
  // Funkcja do obliczania średniej wyników
  function calculateAverage(results) {
    // Zliczamy wszystkie wyniki studentów i dzielimy przez ich liczbę
    const total = results.reduce((sum, { score }) => sum + score, 0);
    return total / results.length;
  }
  
  // Funkcja do znajdowania najwyższego wyniku
  function findHighestScore(results) {
    // Szukamy największego wyniku używając metody reduce
    return results.reduce((max, { score }) => (score > max ? score : max), 0);
  }
  
  // Funkcja do znajdowania najniższego wyniku
  function findLowestScore(results) {
    // Szukamy najmniejszego wyniku używając metody reduce
    return results.reduce((min, { score }) => (score < min ? score : min), 100);
  }
  
  // Funkcja do wyświetlania wyników
  function displayResults(results) {
    // Obliczamy średnią, najwyższy i najniższy wynik
    const average = calculateAverage(results);
    const highest = findHighestScore(results);
    const lowest = findLowestScore(results);
  
    // Wyświetlamy wyniki z wykorzystaniem template stringów
    console.log(`Średnia wyników: ${average}`);
    console.log(`Najwyższy wynik: ${highest}`);
    console.log(`Najniższy wynik: ${lowest}`);
  }
  
  // Uruchamiamy funkcję do wyświetlania wyników
  displayResults(studentsResults);
  