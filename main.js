

// Första variabeln skapas och ges värdet 27
// Detta värde skrivs ut i konsolen på sidan
var myAge=27;
console.log(myAge);


// //skapar en funktion som döps till myFunction
// function myFunction(number){
// console.log(number);
// }

// //anropar på funktionen
// myFunction();

//skapar en variabel som döps till myElement som hämtar infon från min id som jag skapat i min html dokument
var myElement = document.getElementById("my-paragraph");

//skapar en evetlistener som avvaktar med att utföra tills man klickar på min sida. Skapar en funktion.
//Funktionen anropar myElement varaiabl som sedan ska in och ersätta min paragraf med ny text. 
//så den får samma stayling som min gamla titel.
myElement.addEventListener("click", function(){
  myElement.innerHTML="<p>BELIVE</p>"
})

// Skapar en for loop som innehåller funktion med variabler som ska skirva ut alla frukter i konsolen.
// Alla frukter skapas i samma variabel

function allFruits(){
    var fruitsNames = ["Mango","Persika","Hallon"];
    var fruitsTotal = fruitsNames.length;

    for (var i=0; i<fruitsTotal; i++)
    console.log(fruitsNames[i]);
}

allFruits();


try {
    var myWrongID = getElementById("HEJ");
    myWrongID.innerHTML += "test";

}
catch(error){
    console.error("FEL!:" + error);
}

console.log("Nu är det fixat")