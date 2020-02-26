// z26 y25 x24 w23 v22 u21 t20 s19 r18 q17 p16 o15 n14 m13 l12 k11 j10 i9 h8 g7 f6 e5 d4 c3 b2 a1
// Z26 Y25 X24 W23 V22 U21 T20 S19 R18 Q17 P16 O15 N14 M13 L12 K11 J10 I9 H8 G7 F6 E5 D4 C3 B2 A1
// Z26 Y25 X24 W23 V22 U21 T20 S19 R18 Q17 P16 015 N14 M13 L12 K11 J10 I9 H8 G7 F6 E5 D4 C3 B2 A1
// Z26 Y25 X24 W23 V22 U21 T20 S19 R18 Q17 P16 O15 N14 M13 L12 K11 J10 I9 H8 G7 F6 E5 D4 C3 B2 A1

// var readline = require('readline-sync');
// var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
// var shift = parseInt(readline.question('How many letters would you like to shift? '));


let caesarCipher = (str) => {
    //Deciphered reference letters
    let decoded = {
        a: 'n', b: 'o', c: 'p',
        d: 'q', e: 'r', f: 's',
        g: 't', h: 'u', i: 'v',
        j: 'w', k: 'x', l: 'y',
        m: 'z', n: 'a', o: 'b',
        p: 'c', q: 'd', r: 'e',
        s: 'f', t: 'g', u: 'h',
        v: 'i', w: 'j', x: 'k',
        y: 'l', z: 'm'
    }

    //convert the string to lowercase
    str = str.toLowerCase();

    //decipher the code
    let decipher = '';
    for(let i = 0; i < str.length; i++) {
        decipher += decoded[str[i]];
    }

    //return the output
    return decipher;
}

//Input:
console.log(caesarCipher('attackatonce'));
console.log(caesarCipher('prashantyadav'));

//Output:
"nggnpxngbapr"
"cenfunaglnqni"
