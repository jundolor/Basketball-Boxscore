let homeScore = 0
let guestScore = 0

let homeScoreBox = document.getElementById("home-score")
let guestScoreBox = document.getElementById("guest-score")
console.log(homeScoreBox)

function addHomeOne(){
    console.log("addHomeOne")
    homeScore += 1
    homeScoreBox.textContent = homeScore
}

function addGuestOne(){
    guestScore += 1
    guestScoreBox.textContent = guestScore
}

function addHomeTwo(){
    homeScore += 2
    homeScoreBox.textContent = homeScore
}

function addGuestTwo(){
    guestScore += 2
    guestScoreBox.textContent = guestScore
}

function addHomeThree(){
    homeScore += 3
    homeScoreBox.textContent = homeScore
}

function addGuestThree(){
    guestScore += 3
    guestScoreBox.textContent = guestScore
}

function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreBox.textContent = homeScore
    guestScoreBox.textContent = guestScore
    
}