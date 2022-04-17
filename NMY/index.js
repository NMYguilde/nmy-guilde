let progressLine = document.getElementById("progressLine")
let nmBtn = document.getElementById("nmBtn")
let hmBtn = document.getElementById("hmBtn")
let mmBtn = document.getElementById("mmBtn")
let jailerBr = document.querySelectorAll("br")
let guardian = document.getElementById("guardian")
let skolex = document.getElementById("skolex")
let xymox = document.getElementById("xymox")
let dausegne = document.getElementById("dausegne")
let pantheons = document.getElementById("pantheons")
let lihuvim = document.getElementById("lihuvim")
let halondrus = document.getElementById("halondrus")
let anduin = document.getElementById("anduin")
let lords = document.getElementById("lords")
let rygelon = document.getElementById("rygelon")
let jailer = document.getElementById("jailer")
let killed = document.getElementById("killed")
let progression = document.getElementById("progression")
let mmProgression = document.getElementById("mmProgression")
let container = document.getElementById("container")
let progressBtn = document.getElementById("progressBtn")
let homeBtn = document.getElementById("homeBtn")
let discordBtn = document.getElementById("discordBtn")
let contactBtn = document.getElementById("contactBtn")
let news = document.getElementById("news")
let underConstruct = document.getElementById("pageConstruct")
let enterBtn = document.getElementById("enterBtn")

enterBtn.onclick = function() {
    underConstruct.style.visibility = "hidden"
    underConstruct.style.opacity = "0"
    underConstruct.style.transition ="0.4s"
}
progressBtn.onclick = function() {
    container.style.visibility ="visible"
    container.style.opacity = "1"
    progressBtn.classList.add("active")
    homeBtn.classList.remove("active")
    discordBtn.classList.remove("active")
    contactBtn.classList.remove("active")
    news.style.visibility = "hidden"
    news.style.opacity = "0"
}

homeBtn.onclick = function () {
    progressBtn.classList.remove("active")
    homeBtn.classList.add("active")
    discordBtn.classList.remove("active")
    contactBtn.classList.remove("active")
    container.style.visibility ="hidden"
    container.style.opacity ="0"
    news.style.visibility = "visible"
    news.style.opacity = "1"
}

contactBtn.onclick = function() {
    contactBtn.classList.add("active")
    progressBtn.classList.remove("active")
    homeBtn.classList.remove("active")
    discordBtn.classList.remove("active")
    container.style.visibility = "hidden"
    container.style.opacity = "0"
    news.style.visibility ="hidden"
    news.style.opacity ="0"

}

nmBtn.onclick = function() {
    progressLine.style.width ="97.7%"
    progressLine.style.transition = "0.4s"
    skolex.style.color = "dimgray"
    xymox.style.color = "dimgray"
    dausegne.style.color = "dimgray"
    pantheons.style.color = "dimgray"
    lihuvim.style.color = "dimgray"
    halondrus.style.color = "dimgray"
    anduin.style.color = "dimgray"
    lords.style.color = "dimgray"
    rygelon.style.color = "dimgray"
    jailer.style.color = "white"
    nmBtn.style.color = "white"
    hmBtn.style.color = "dimgray"
    mmBtn.style.color = "dimgray"
    progression.style.display ="none"
    cleared.style.display = "block"

}

hmBtn.onclick = function () {
    progressLine.style.width ="97.7%"
    progressLine.style.transition = "0.4s"
    nmBtn.style.color = "dimgray"
    hmBtn.style.color = "white"
    mmBtn.style.color = "dimgray"
    mmProgression.style.display = "none"
    progression.style.display ="block"
    guardian.style.color = "dimgray"
    skolex.style.color = "dimgray"
    xymox.style.color = "dimgray"
    dausegne.style.color = "dimgray"
    pantheons.style.color = "dimgray"
    lihuvim.style.color = "dimgray"
    halondrus.style.color = "dimgray"
    anduin.style.color = "dimgray"
    lords.style.color = "dimgray"
    rygelon.style.color = "dimgray"
    jailer.style.color = "white"
    cleared.style.display = "none"

}

mmBtn.onclick = function() {
    progressLine.style.width ="2.8%"
    progressLine.style.transition = "0.4s"
    nmBtn.style.color = "dimgray"
    hmBtn.style.color = "dimgray"
    mmBtn.style.color = "white"
    guardian.style.color = "white"
    skolex.style.color = "dimgray"
    xymox.style.color = "dimgray"
    dausegne.style.color = "dimgray"
    pantheons.style.color = "dimgray"
    lihuvim.style.color = "dimgray"
    halondrus.style.color = "dimgray"
    anduin.style.color = "dimgray"
    lords.style.color = "dimgray"
    rygelon.style.color = "dimgray"
    jailer.style.color = "dimgray"
    mmProgression.style.display ="block"
    progression.style.display ="none"
    cleared.style.display = "none"
}