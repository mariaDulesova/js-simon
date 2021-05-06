
//-------------------------
//       SIMON SAYS
//-------------------------

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var randomNumber =[];

for ( var i = 0; i < 5; i++) {
    var getRandomNumber = Math.floor(Math.random() * (100 - 1 +1)) + 1;
    randomNumber.push(getRandomNumber);
}

console.log(randomNumber);
var numbersToMemorize = alert("Please remember the following numbers: " + randomNumber);

var startCountdown = 30;
var countdown = setInterval(function(){
    var userNumberArray=[];
    if (startCountdown!=0){
        startCountdown --; 
    } else {
        clearInterval(countdown);
        for (var i = 0; i < 5; i++){
            var userNumber = parseInt(prompt("Please insert the numbers you remember:"));
            if(userNumber == randomNumber[i]){
                userNumberArray.push(userNumber);
            }
        }           
        console.log(userNumberArray);
        alert ("You have guessed " + userNumberArray.length + " numbers: " + userNumberArray);
    }
}, 1000)
