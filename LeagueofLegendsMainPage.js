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

// Box 4 styling
var video = document.getElementById("trailer");
var box4 = document.getElementsByClassName("box4");


// Box 4 on click actions
box4[0].addEventListener('click', function (e) {
    if (video.paused) {
        video.play();
        document.getElementById("videobtn").src = "icons8-video-light-100.png";
    } else {
        video.pause();
        video.load();
        document.getElementById("videobtn").src = "icons8-no-video-dark-100.png";
        video.muted = true;
    }
})

// Box 4 on hover styling
box4[0].addEventListener('mouseover', function (e) {
    if (video.paused) {
        document.getElementById("videobtn").src = "icons8-no-video-light-100.png";
    } else {
        document.getElementById("videobtn").src = "icons8-video-light-100.png";
    }
})

// Box 4 on mouse leave styling
box4[0].addEventListener('mouseleave', function (e) {
    if (video.paused) {
        document.getElementById("videobtn").src = "icons8-no-video-dark-100.png";
    } else {
        document.getElementById("videobtn").src = "icons8-video-dark-100.png";
    }
})

// video.addEventListener('ended', function (e) {
//     video.load();
//     video.muted = true;
// })

// Hiding Box 3 & 4 on scrolling down
var lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
    if (lastScrollY < window.scrollY) {
        box4[0].style.visibility = "hidden";
    } else {
        box4[0].style.visibility = "visible";
    }
    lastScrollY = window.scrollY;
})

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
    window.location.href = "https://www.youtube.com/watch?v=i_ujOtLDQco";
}

// Patch Notes link
function patchNotes() {
    window.location.href = "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-3-notes/";
}

// Official website link
function gamesite() {
    window.location.href = "https://www.leagueoflegends.com/en-gb/";
}

// Download site link
function downloadsite() {
    window.location.href = "https://signup.leagueoflegends.com/en-us/signup/redownload";
}