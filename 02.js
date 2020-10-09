/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små)
till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:

< - &lt; &LT;
> - &gt; &GT;
å - &aring;
ä - &auml;
ö - &ouml;
' - &apos;

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/


function safe_string(string) {
    let entities = /[å|<|>|ä|'|ö]/g;
    let htmlString = string.replace(entities, function(match){
      if(match === "å"){
        return "&aring;";
      }else if(match === "<"){
        return "&lt;"
      }else if(match === ">"){
        return "&gt;";
      }else if(match === "ä"){
        return "&auml;";
      }
      else if(match === "ö"){
        return "&ouml;";
      }
      else{
        return "&apos;";
      }
    });
        
    return htmlString;
  }

  console.log(safe_string(" <  sjörövare äter ' ål  > "));