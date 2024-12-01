class Student {
    // konstruktor uruchamia program 
    constructor(){
        this.studenci = []
    }

    dodajStudenta = (imie, ...oceny) => {
        const student = {imie, oceny, srednia: this.obliczSrednia(oceny)
        }
        this.studenci.push(student)
        return student
    };

    obliczSrednia = (oceny) => {
        return oceny.reduce((suma, ocena) => suma + ocena, 0) / oceny.length
    }
    
    najlepszyStudent = () => {
        return this.studenci.reduce((najlepszy, liczenie) => (liczenie.srednia > najlepszy.srednia) ? liczenie : najlepszy )
    }

    znalezionyStudent = (minSrednia) => {
        return this.studenci.filter((student => student.srednia >= minSrednia))
    }
}

const sredniaOcen = new Student()
sredniaOcen.dodajStudenta("Robert", 2, 4, 6)
sredniaOcen.dodajStudenta("Szymon", 6, 6, 6)
console.log(sredniaOcen.najlepszyStudent())
