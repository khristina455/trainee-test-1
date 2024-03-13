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
    'а': ['\u0061'],
    'в': ['\u0299'],
    'г': ['\u1D26'],
    'е': ['\u0065'],
    'з': ['\u025C'],
    'и': ['\u0377', '\u1D0E'],
    'к': ['\u0138', '\u03BA'],
    'м': ['\u1D0D'],
    'н': ['\u029C'],
    'о': ['\u006F', '\u03BF'],
    'р': ['\u1D29', '\u1D18'],
    'с': ['\u0063', '\u03F2'],
    'т': ['\u1D1B'],
    'х': ['\u0078', '\u2179'],
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
