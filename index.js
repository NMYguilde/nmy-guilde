document.getElementById("pageLaGuilde");
document.getElementById("menuLaGuilde");
document.getElementById("msg");
document.getElementById("menuAccueil");
document.getElementById("menuDiscord");
document.getElementById("discordDiv")
document.getElementById("discordClose")


menuLaGuilde.onclick = function() {
    pageLaGuilde.style.transform = "translate(0%)";
    pageLaGuilde.style.opacity ="1";
    msg.style.display = "none";
    discordDiv.style.height = "0px";
    discordDiv.style.opacity = "0";
}

menuAccueil.onclick = function() {
    pageLaGuilde.style.transform = "translate(-100%)"
    pageLaGuilde.style.opacity ="0";
    msg.style.display ="block"
    discordDiv.style.height = "0px";
    discordDiv.style.opacity = "0";

}

function showHide() {
    if (membresTeams.style.opacity == "0") {
        membresTeams.style.opacity ="1";
    }

}

menuDiscord.onclick = function() {
    discordDiv.style.height = "500px";
    discordDiv.style.opacity = "1";
    pageLaGuilde.style.transform = "translate(-100%)"
    pageLaGuilde.style.opacity ="0";
}

discordClose.onclick = function() {
    discordDiv.style.height = "0px";
    discordDiv.style.opacity = "0";
}