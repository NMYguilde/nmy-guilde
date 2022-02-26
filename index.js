let btncontact = document.getElementById("btnContact")
let btncontacttwo = document.getElementById("btnContactTwo")

let boxcontact = document.getElementById("boxContact")
let btnclose = document.getElementById("close")

btncontact.onclick = function() {
    boxcontact.style.height = "300px"
    boxcontact.style.opacity = "1"
}

btncontacttwo.onclick = function() {
    boxcontact.style.height = "300px"
    boxcontact.style.opacity = "1"
}

btnclose.onclick = function() {
    boxcontact.style.opacity = "0"
    boxcontact.style.height = "0.1px"
