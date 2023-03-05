let homeScore = 0;
//document.getElementById("home-score").textContent = homeScore
let guestScore = 0;
//document.getElementById("guest-score").textContent = guestScore

// "Home" buttons
function plusOneHome() {
    homeScore +=1;
    document.getElementById("home-score").textContent = homeScore;
}

function plusTwoHome() {
    homeScore +=2;
    document.getElementById("home-score").textContent = homeScore;    
}

function plusThreeHome() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;    
}

// "Guest" buttons
function plusOneGuest() {
    guestScore +=1;
    document.getElementById("guest-score").textContent = guestScore;
}

function plusTwoGuest() {
    guestScore +=2
    document.getElementById("guest-score").textContent = guestScore    
}

function plusThreeGuest() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore    
}

// New Game
function resetBoard() {
    homeScore = 0
    document.getElementById("home-score").textContent = homeScore
    guestScore = 0
    document.getElementById("guest-score").textContent = guestScore
}