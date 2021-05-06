
//-------------------------
//       SIMON SAYS
//-------------------------

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var randomNumber =[];

while (randomNumber.length < 5) {

    var getRandomNumber = Math.floor(Math.random() * (100)) + 1;
    if (!isInArray(getRandomNumber, randomNumber)){
        randomNumber.push(getRandomNumber);
    }

}
console.log(randomNumber);
var numbersToMemorize = alert("Please remember the following numbers: " + randomNumber);

var startCountdown = 10;
var countdown = setInterval(function(){
    
    var userNumberArray = [];
    if (startCountdown!=-1) {
        document.getElementById("countdown").innerHTML = startCountdown;
        startCountdown --; 
    } else {
        clearInterval(countdown);

        for (var i = 0; i < 5; i++){
            var userNumber = parseInt(prompt("Please insert the numbers you remember:"));
            console.log(userNumber);
            if (isInArray(userNumber, randomNumber)){
                userNumberArray.push(userNumber);
            }
        }     
        console.log(userNumberArray);
        alert ("You have guessed " + userNumberArray.length + " numbers: " + userNumberArray);
    }
    
}, 1000);

//----FUNCTION----///
function isInArray (element, array) {

    for(var i = 0; i<array.length; i++)
    if (element == array[i]){
        return true;
    }

}

