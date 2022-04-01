
let btnNormal = document.getElementById("btnNormal")
let btnHeroic = document.getElementById("btnHeroic")
let btnMythic = document.getElementById("btnMythic")
let raidNm = document.getElementById("raidNm")
let raidHm = document.getElementById("raidHm")
let raidMm = document.getElementById("raidMm")

btnNormal.onclick = function() {
    raidNm.style.display = "block"
    raidHm.style.display ="none"
    raidMm.style.display ="none"
    btnNormal.classList.add("active")
    btnHeroic.classList.remove("active")
    btnMythic.classList.remove("active")
}

btnHeroic.onclick = function() {
    raidNm.style.display = "none"
    raidHm.style.display ="block"
    raidMm.style.display ="none"
    btnHeroic.classList.add("active")
    btnNormal.classList.remove("active")
    btnMythic.classList.remove("active")
}

btnMythic.onclick = function() {
    raidNm.style.display = "none"
    raidHm.style.display ="none"
    raidMm.style.display ="block"
    btnHeroic.classList.remove("active")
    btnNormal.classList.remove("active")
    btnMythic.classList.add("active")
}


