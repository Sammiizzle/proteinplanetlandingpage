const countdownElement = document.getElementById("countdown")

const launchDate = new Date("July 1, 2026 00:00:00").getTime()

const timer = setInterval(function(){

const now = new Date().getTime()

const distance = launchDate - now

const days = Math.floor(distance / (1000*60*60*24))
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
const seconds = Math.floor((distance%(1000*60))/1000)

countdownElement.innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s"

},1000)
