//Lista produktów - dane początkowe
const products = [
    { name: "Laptop", price: 3000, category: "elektronika" },
    { name: "Smartphone", price: 1500, category: "elektronika" },
    { name: "Stol", price: 200, category: "meble" },
    { name: "Krzeslo", price: 100, category: "meble" },
];

//Funkcja filtrowania produktów
const filterProducts = (products, category = null, minPrice = 0, maxPrice = 10000) =>
    // Przechodzimy przez tablicę 'products' za pomocą metody 'filter',
    // która zwraca nową tablicę zawierającą elementy spełniające podany warunek
    products.filter(
        // Wykorzystujemy destrukturyzację, aby wyciągnąć 'category' i 'price' z obiektu 'product'
        ({ category: c, price }) =>
            // Sprawdzamy, czy produkt spełnia kryteria filtrowania:
            (!category || c === category) && price >= minPrice && price <= maxPrice
    );

//Funkcja wyświetlania wyników
function displayProducts(filteredProducts) {
    if (filteredProducts.length === 0) { // Jeśli nie ma wyników
        console.log("Brak produktów pasujących do kryteriów.");
        return;
    }
    filteredProducts.forEach(product => { // Dla każdego produktu w wynikach wyświetlamy informacje
        console.log(`Produkt: ${product.name}, Cena: ${product.price} PLN, Kategoria: ${product.category}`);
    });
}

//Przykład użycia funkcji
const categoryFilter = "elektronika"; // Użytkownik chce produkty z kategorii "Electronics"
const minPriceFilter = 1000;          // Użytkownik chce produkty o cenie minimum 1000
const maxPriceFilter = 3500;          // Użytkownik chce produkty o cenie maksymalnie 3500

//Filtrowanie produktów na podstawie wybranych kryteriów
const filteredProducts = filterProducts(products, categoryFilter, minPriceFilter, maxPriceFilter);

//Wyświetlenie przefiltrowanych produktów
displayProducts(filteredProducts);
