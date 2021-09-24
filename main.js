
var myAge=27;
console.log(myAge);





//skapar en variabel som döps till myElement som hämtar infon från min id som jag skapat i min html dokument
var myElement = document.getElementById("my-paragraph");

//skapar en evetlistener som avvaktar med att utföra tills man klickar på min sida. Skapar en funktion.
//Funktionen anropar myElement varaiabel som sedan ska in och ersätta min paragraf med ny text med html DOM
//så den får samma stayling som min gamla titel.
myElement.addEventListener("click", function(){
  myElement.innerHTML="<p>BELIVE</p>"
})

// Skapar en for loop som innehåller funktion med variabler som ska skriva ut alla frukter i konsolen.
// Alla frukter skapas i samma variabel

function allFruits(){
    var fruitsNames = ["Mango","Persika","Hallon"];
    var fruitsTotal = fruitsNames.length;


// variabel i för index med värdet 0; om i är mindre än fruktnamn längden så plussar den på och skriver ut i konsolen frukt index    
    for (var i=0; i<fruitsTotal; i++)
    console.log(fruitsNames[i]);
}

allFruits();

// Gjort en catch som försöker hämta ett ID som inte existerar, catchar felet skriver ut det i konsolen + error. 
try {
    var myWrongID = getElementById("HEJ");
    myWrongID.innerHTML += "test";

}
catch(error){
    console.error("FEL!:" + error);
}

console.log("Nu är det fixat")



// skapat en funktion med parameter string, skapar två variabler word = tom sträng, myWord = värde sant. 
//skapar en for loop med villkor med en if sats. 


function capLetter(string) {
    var word = " ";
    var myWord = true;
    for (var i = 0; i < string.length; i++){
        if(myWord){
            myWord = false;
            word += string[i].toUpperCase();
        } 
        else word += string[i];
        if(string[i] === "") myWord = true;
    }
    return word;
}
console.log(capLetter("tja"));