const masksForRU = {
    'А': ['\u0041', '\u0391'],
    'Б': ['\u0182'],
    'В': ['\u0042', '\u0392'],
    'Г': ['\u0393', '\u14A5'],
    'Е': ['\u0045', '\u0395'],
    'З': ['\u0033'],
    'И': ['\u2D4D', '\u0376'],
    'К': ['\u039A', '\u004B', '\u212A'],
    'М': ['\u039C', '\u004D', '\u216F'],
    'Н': ['\u0048', '\u0397', '\u157C'],
    'О': ['\u004F', '\u039F', '\u0555'],
    'Р': ['\u03A0'],
    'С': ['\u0043', '\u03F9', '\u216D'],
    'Т': ['\u0054', '\u03A4'],
    'Ф': ['\u03A6', '\u0553'],
    'Х': ['\u0058', '\u03A7', '\u2D5D', '\u2169'],
    'Э': ['\u2108'],
    'а': ['\u0041', '\u0391'],
    'б': ['\u0182'],
    'в': ['\u0042', '\u0392'],
    'г': ['\u0393', '\u14A5'],
    'е': ['\u0045', '\u0395'],
    'з': ['\u0033'],
    'и': ['\u2D4D', '\u0376'],
    'к': ['\u039A', '\u004B', '\u212A'],
    'м': ['\u039C', '\u004D', '\u216F'],
    'н': ['\u0048', '\u0397', '\u157C'],
    'о': ['\u004F', '\u039F', '\u0555'],
    'р': ['\u03A0'],
    'с': ['\u0043', '\u03F9', '\u216D'],
    'т': ['\u0054', '\u03A4'],
    'ф': ['\u03A6', '\u0553'],
    'х': ['\u0058', '\u03A7', '\u2D5D', '\u2169'],
    'э': ['\u2108'],
};

const masksForDig = {
    '1': ['\u07d7'],
    '2': ['\u14DF'],
    '3': ['\u0417'],
    '4': ['\u13CE'],
    '5': ['𝟻'],
    '6': ['𝟼'],
    '7': ['𝟩'],
    '8': ['𝟾'],
    '9': ['𝟿'],

};

export default function smokeString(str) {
    return str.split('').map(ch => {
        const charsForRU = masksForRU[ch];
        const charsForEN = masksForRU[ch];
        const charsForD = masksForDig[ch];

        if (charsForRU) {
            return charsForRU[Math.floor(Math.random() * charsForRU.length)]
        } else if (charsForD) {
            return charsForD[Math.floor(Math.random() * charsForD.length)]
        } 
        return ch
    }).join('');
}
