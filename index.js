document.getElementById("pageLaGuilde");
document.getElementById("menuLaGuilde");
document.getElementById("msg");
document.getElementById("menuAccueil");
document.getElementById("menuRoster");
document.getElementById("membresTeams")
document.getElementById("dropDownTeams")
document.getElementById("dropDownMembres")

menuLaGuilde.onclick = function() {
    pageLaGuilde.style.transform = "translate(0%)";
    pageLaGuilde.style.opacity ="0.85";
    msg.style.display = "none";
}

menuAccueil.onclick = function() {
    pageLaGuilde.style.transform = "translate(-100%)"
    pageLaGuilde.style.opacity ="0"
    msg.style.display ="block"

}

menuRoster.onclick = function() {
    membresTeams.style.opacity ="1";
}

dropDownTeams.onclick = function() {
    membresTeams.style.opacity = "0";
    pageLaGuilde.style.transform = "translate(-100%)"
    pageLaGuilde.style.opacity ="0"
}

dropDownMembres.onclick = function() {
    document.getElementById("membresTeams")
    membresTeams.style.opacity = "0";
    pageLaGuilde.style.transform = "translate(-100%)"
    pageLaGuilde.style.opacity ="0"
}

function showHide() {
    if (membresTeams.style.opacity == "0") {
        membresTeams.style.opacity ="1"
    }

}