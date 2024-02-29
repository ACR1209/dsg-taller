/**
 * Dada una cadena s formada por palabras y espacios, 
 * devuelve la longitud de la última palabra de la cadena.
 * 
 * Una palabra es una subcadena si esta formada únicamente por caracteres sin espacios.
 * 
 * Ex:
 * 1)
 * 
 * Input: s = "Hello World"
 * Output: 5
 * 
 * 2)
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 */

function lengthOfLastWord(s) {
    if (s.length === 0) {
        return 0;
    }

    const onlyStrings = s.split(" ").filter((val)=> val != "");
    return onlyStrings[onlyStrings.length - 1].length
}


module.exports = lengthOfLastWord;
