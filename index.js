let btncontact = document.getElementById("btnContact")
let btncontacttwo = document.getElementById("btnContactTwo")
let bd1 = document.getElementById("bd1")
let bd2 = document.getElementById("bd2")
let boxcontact = document.getElementById("boxContact")
let btnclose = document.getElementById("close")

btncontact.onclick = function() {
    boxcontact.style.height = "300px"
    boxcontact.style.opacity = "1"
    boxcontact.style.marginTop = "40px"
    bd1.style.height = "auto"
    bd2.style.height = "auto"


}

btncontacttwo.onclick = function() {
    boxcontact.style.height = "300px"
    boxcontact.style.opacity = "1"
}

btnclose.onclick = function() {
    boxcontact.style.opacity = "0"
    boxcontact.style.height = "0.1px"
    bd1.style.height = "100%"
    bd2.style.height = "100%"

}



