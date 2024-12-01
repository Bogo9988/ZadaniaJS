class TextProccesor {
    constructor(text) {
        this.text = text;
    }

    toUpperCase = () => {
        return this.text.toUpperCase();
    }

    toLowerCase = () => {
        return this.text.toLowerCase();
    }
    
    reverseText = () => {
        return this.text.split('').reverse().join('');
    }

    deleteText = () => {
        return this.text.trim();
    }
   
    CountWords = () => {
        return this.text.split(' ').length; 
    };
}


const something = new TextProccesor(' Robert Lewandowski ');
console.log(something.toUpperCase());
console.log(something.toLowerCase());
console.log(something.reverseText());
console.log(something.deleteText());
console.log(something.CountWords());
