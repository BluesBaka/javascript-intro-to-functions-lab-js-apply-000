
//var uppercase = string.toUpperCase
//var lowercase = string.toLowerCase



function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
   if (string.lowercase() === string ){
   return "I can't hear you!"
 }
    else if (string.uppercase() === string){
   return "YES INDEED!"
 }
   else if (string === "I love you, Grandma.") {
   return "I love you, too."
 }
}
