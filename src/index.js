const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let oneSymbol = expr.slice(i, i + 10);

        if (oneSymbol === '**********') result = `${result} `;
        else {
            let key = createMorseSymbol(oneSymbol);
            let symbol = MORSE_TABLE[key];
            result = `${result}${symbol}`;
        }
    }

    return result;
}

const createMorseSymbol = (string) => {
    let morseSymbol = '';

    for (let i = 0; i < 10; i += 2) {
        if (string.slice(i, i + 2) == 10) morseSymbol = `${morseSymbol}.`;
        else if (string.slice(i, i + 2) == 11) morseSymbol = `${morseSymbol}-`;
        else if (string.slice(i, i + 2) == 00) morseSymbol = `${morseSymbol}`;
    }

    return morseSymbol
}

module.exports = {
    decode
}