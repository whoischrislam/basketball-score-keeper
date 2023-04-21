let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

function incrementH1() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function incrementH2() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function incrementH3() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function incrementG1() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function incrementG2() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function incrementG3() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}