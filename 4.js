//lista oks
const products = [
    { name: "Laptop", price: 3000, category: "elektronika" },
    { name: "Telefon", price: 1500, category: "elektronika" },
    { name: "Stol", price: 200, category: "meble" },
    { name: "Krzeslo", price: 100, category: "meble" },
];

const filterProducts = (products, category = null, minPrice = 0, maxPrice = 10000) =>
    products.filter(
        //destrukturyzacja aby wyciagnac category i price
        ({ category: c, price }) =>
            (!category || c === category) && price >= minPrice && price <= maxPrice
    );

function displayProducts(filteredProducts) {
    filteredProducts.forEach(product => {
        console.log(`Produkt: ${product.name}, Cena: ${product.price} PLN, Kategoria: ${product.category}`);
    });
}

const categoryFilter = "elektronika";
const minPriceFilter = 1000;         
const maxPriceFilter = 3500;       

const filteredProducts = filterProducts(products, categoryFilter, minPriceFilter, maxPriceFilter);

displayProducts(filteredProducts);
