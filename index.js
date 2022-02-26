<<<<<<< HEAD
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

=======
function onClickMenuLaGuilde() {
  var pageLaGuilde = document.getElementById('pageLaGuilde');
  var msg = document.getElementById('msg');
  var discordDiv = document.getElementById('discordDiv');

  pageLaGuilde.style.transform = 'translate(0%)';
  pageLaGuilde.style.opacity = '1';
  msg.style.display = 'none';
  discordDiv.style.height = '0px';
  discordDiv.style.opacity = '0';
}

function onClickMenuAccueil() {
  var pageLaGuilde = document.getElementById('pageLaGuilde');
  var msg = document.getElementById('msg');
  var discordDiv = document.getElementById('discordDiv');

  pageLaGuilde.style.transform = 'translate(-100%)';
  pageLaGuilde.style.opacity = '0';
  msg.style.display = 'block';
  discordDiv.style.height = '0px';
  discordDiv.style.opacity = '0';
}

function showHide() {
  if (membresTeams.style.opacity == '0') {
    membresTeams.style.opacity = '1';
  }
}

function onClickMenuDiscord() {
  var discordDiv = document.getElementById('discordDiv');
  var pageLaGuilde = document.getElementById('pageLaGuilde');

  discordDiv.style.height = '500px';
  discordDiv.style.opacity = '1';
  pageLaGuilde.style.transform = 'translate(-100%)';
  pageLaGuilde.style.opacity = '0';
}

function onClickDiscordClose() {
  var discordDiv = document.getElementById('discordDiv');
  discordDiv.style.height = '0px';
  discordDiv.style.opacity = '0';
}

function onClickSocialsOpen() {
  var socials = document.getElementById('socials');
  socials.style.opacity = '1';
  socials.style.width = '95% !important';
>>>>>>> 3f6bce324fbb2588010b686846eee93b8ce97b38
}
