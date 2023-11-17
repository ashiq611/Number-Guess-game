

let guessDiv = document.getElementById('guess-div');
let opponentDiv = document.getElementById('opponent-div');
let guessinput = document.getElementById('guess').value;

let guessSetBtn = document.getElementById('submitBtn');
let opponentSetBtn = document.getElementById('opponent-submitBtn');

let winner= document.getElementById('winner');
let loss= document.getElementById('loss');


guessSetBtn.addEventListener('click', function(){
    guessDiv.classList.add('hidden');
    opponentDiv.classList.remove('hidden');
});

let attempts = 0;
opponentSetBtn.addEventListener('click', function(){
    attempts++;
    document.getElementById("at").innerText = `Attempt: ${attempts}`;
    if (attempts >= 5) {
        document.getElementById("dmessage").textContent = `Sorry, you've used all 5 attempts.`;
        document.getElementById("opponent-submitBtn").disabled = true;
        opponentDiv.classList.add('hidden');
        loss.classList.remove('hidden');
        return;
       
    };


    const guess = parseInt(document.getElementById('guess').value);
    const opponentGuess = parseInt(document.getElementById('opponent-guess').value);

    if (guess === opponentGuess) {
        document.getElementById("dmessage").textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        opponentDiv.classList.add('hidden');
        winner.classList.remove('hidden');


        document.getElementById("opponent-submitBtn").disabled = true;
    } else if (guess < opponentGuess) {
        document.getElementById("dmessage").textContent = "Try a higher number.";
        document.getElementById('opponent-guess').value = '';
    } else {
        document.getElementById("dmessage").textContent = "Try a lower number.";
        document.getElementById('opponent-guess').value = '';
    }
});






// Clear the input fields
document.getElementById('guess').value = '';
document.getElementById('opponent-guess').value = '';










