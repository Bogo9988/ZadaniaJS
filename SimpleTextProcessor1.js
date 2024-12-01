// Tworzymy klase kotra bedzie przetwarzala nasza wartosc tekstowa przy pisaniu programu bazaujacego na funkcjach strzelkowaych
class TextProccesor {
    // tworzymy konstruktor, ktory bedzie przyjmowal wartosc tekstowa
    constructor(text) {
        this.text = text;
    }

    //przeksztalcamy, wartosc tekstowa tak aby byla pisana wielkimi literami
    toUpperCase = () => {
        return this.text.toUpperCase();
    }

    //przeksztalcamy, wartosc tekstowa tak aby byla pisana malymi literami
    toLowerCase = () => {
        return this.text.toLowerCase();
    }
    //przeksztalcamy wartosc tekstowa tak aby znaki byly na odwrot
    reverseText = () => {
        return this.text.split('').reverse().join('');
    }
    //przeksztalcamy wartosc tekstowa tak aby usuniecie bialych znakow doszlo do skutku (na poczatku i na koncu)
    deleteText = () => {
        return this.text.trim();
    }
    ////przeksztalcamy wartosc tekstowa tak aby zliczyc jej wyrazy
    CountWords = () => {
        return this.text.split(' ').length; 
    };
}

//przyklad
const something = new TextProccesor(' Robert Lewandowski ');
console.log(something.toUpperCase());
console.log(something.toLowerCase());
console.log(something.reverseText());
console.log(something.deleteText());
console.log(something.CountWords());
