// Navigation bar boxes styling on hovering
// Box 1 styling
function changeNew() {
    var cubes = document.getElementsByClassName("cube");

    for (let i = 0; i < cubes.length; i++) {
        cubes[i].style.backgroundColor = "rgb(235, 235, 235)";
    }
}

function changeBack() {
    var cubes = document.getElementsByClassName("cube");

    for (let i = 0; i < cubes.length; i++) {
        cubes[i].style.backgroundColor = "rgb(150, 150, 150)";
    }
}

// Box 2 styling
function changeImg2() {
    document.getElementById("userimg").src = "icons8-user-100h.png";
}

function changeImg2Back() {
    document.getElementById("userimg").src = "icons8-user-100.png";
}

function home() {
    window.location.href = "/Riot Client/RiotClientHome.html";
}

// Play icon's radius styling
function increase() {
    document.getElementById("circle").style.outline = "solid 3px rgb(20, 20, 20)";
    document.getElementById("circle").style.transition = "outline 0.13s ease-in-out";
}

function decrease() {
    document.getElementById("circle").style.outline = "solid 0px rgb(20, 20, 20)";
    document.getElementById("circle").style.transition = "outline 0.13s ease-in-out";
}

// Esports link
function promotion() {
    window.location.href = "https://www.youtube.com/watch?v=xjGMM9W6N7g";
}

// Patch Notes link
function patchNotes() {
    window.location.href = "https://www.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-patch-13-3-notes/";
}

// Official website link
function gamesite() {
    window.location.href = "https://teamfighttactics.leagueoflegends.com/en-gb/";
}
