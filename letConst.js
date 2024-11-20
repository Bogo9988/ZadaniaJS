// function testScop(){
//     if(true){
//         var x= 10;
//         let y= 20;
//         const z=212;
//     }
//     console.log(x);
// }
// testScop();

// const getGreeting = () => "och Karol"
// const name = "Kasia"

// const msg = `${ getGreeting() } - wzdycha ${name}`

// const nums = [10, 20, 30, 40]
// const [a,b, ...rest] = nums

// function printPerson ({name, age}) {
//     console.log(`Name: ${name}, Age: ${age}, czy nie je mieska ${isVege}`)
// }

// const person = {name: "Karol", age: 17, isVege: true}
// printPerson(person)

// const bogusz = {
//     name: "Szymon",
//     address: {
//         city : "Wwa",
//         zip: "99913"
//     }
// }
// function printAddress({name, adress: {city, zip}}) {
//     console.log(`${name} lives in ${city}, zip code: ${zip}`)
    
// }

const liczby = [1,2,3,4,5];
const[a, ...rest]= liczby ;
const ostatnia = rest.pop();
console.log(`first=$(a), ostatnia`); 