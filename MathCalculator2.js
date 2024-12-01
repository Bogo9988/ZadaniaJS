class MatematycznyKalkulator {
    // konstruktor uruchamia program do czysczenia i wyswietlania histori
    constructor(){
        this.history = [];
    }
    
    dodawanie = (...numbers) => {
        const result = numbers.reduce((sum,num)=> sum + num, 0)
        this.history.push(`dodawanie: ${numbers.join(" + ")} = ${result}`)
        return result
    }
    
    odejmowanie = (a, b) => {
        const result = a - b
        this.history.push(`odejmowanie: ${a} - ${b} = ${result}`)
        return result
    };
    
    mnozenie = (...numbers) => {
        const result = numbers.reduce((mn,num)=> mn * num, 1)
        this.history.push(`mnożenie: ${numbers.join(" * ")} = ${result}`)
        return result
    }

    dzielenie = (a, b) => {
            const result = a / b
        this.history.push(`dzielenie: ${a} / ${b} = ${result}`)
        return result
    };

    // wyswietlanie historii
    wyswietlanieHistorii = () => {return this.history}

    // czyscimy historie
    czyszczenieHistorii = () => {this.history = []}

}
const kalkulator = new MatematycznyKalkulator();
  console.log(kalkulator.dodawanie(5,5))
  console.log(kalkulator.odejmowanie(5,5))
  console.log(kalkulator.mnozenie(5,5))
  console.log(kalkulator.dzielenie(5,5))
  console.log(kalkulator.wyswietlanieHistorii())
