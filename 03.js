/*

Gör en funktion som tar emot en fras som parameter och returnerar true (boolskt, inte sträng eller annat)
 om strängen är ett palindrom eller false om den inte är det.

https://sv.wikipedia.org/wiki/Palindrom

https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827

Lägg märke till att ni måste hantera mellanslag. "Ni talar bra latin" är t ex ett palindrom.
 Ni behöver bara hantera små bokstäver.

*/


/* function is_palindrome() {

}

let test_string = 'sirap i paris';
if ( is_palindrome( test_string ) ) {
    console.log( test_string + " is a palindrome" );
} else {
    console.log( test_string + " is NOT a palindrome" );
}

TA BORT DENNA OCH DET PÅ RAD 16 */

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
console.log(palindrome("lol"));

   