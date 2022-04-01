
let btnNormal = document.getElementById("btnNormal")
let btnHeroic = document.getElementById("btnHeroic")
let btnMythic = document.getElementById("btnMythic")
let raidNm = document.getElementById("raidNm")
let raidHm = document.getElementById("raidHm")
let raidMm = document.getElementById("raidMm")
let desktopRaidNm = document.getElementById("desktopRaidNm")
let desktopRaidHm = document.getElementById("desktopRaidHm")
let desktopRaidMm = document.getElementById("desktopRaidMm")



btnNormal.onclick = function() {
    desktopRaidNm.style.display ="flex"
    desktopRaidHm.style.display ="none"
    desktopRaidMm.style.display ="none"
    raidNm.style.display = "block"
    raidHm.style.display ="none"
    raidMm.style.display ="none"
    btnNormal.classList.add("active")
    btnHeroic.classList.remove("active")
    btnMythic.classList.remove("active")
}

btnHeroic.onclick = function() {
    desktopRaidNm.style.display ="none"
    desktopRaidHm.style.display ="flex"
    desktopRaidMm.style.display ="none"
    raidNm.style.display = "none"
    raidHm.style.display ="block"
    raidMm.style.display ="none"
    btnHeroic.classList.add("active")
    btnNormal.classList.remove("active")
    btnMythic.classList.remove("active")
}

btnMythic.onclick = function() {
    desktopRaidNm.style.display ="none"
    desktopRaidHm.style.display ="none"
    desktopRaidMm.style.display ="flex"
    raidNm.style.display = "none"
    raidHm.style.display ="none"
    raidMm.style.display ="block"
    btnHeroic.classList.remove("active")
    btnNormal.classList.remove("active")
    btnMythic.classList.add("active")
}


