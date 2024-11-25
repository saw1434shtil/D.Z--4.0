const trafficLightAl = document.querySelector('#trafficLight');
const trafficLightA2 = document.querySelector('#trafficLight2');
const trafficLightA3 = document.querySelector('#trafficLight3');

const alldiv = document.querySelector('#Alldiv');
alldiv.addEventListener ('click', makeGreen);


function makeGreen() {
    
    trafficLightAl.style.background = ('green');
    trafficLightA2.style.background = ('black');
    trafficLightA3.style.background = ('black');
    alldiv.addEventListener('click', makeYellow);
    alldiv.removeEventListener('click', makeGreen);
}

function makeYellow() {
    trafficLightA2.style.background = ('yellow');
    trafficLightAl.style.background = ('black');
    trafficLightA3.style.background = ('black');
    alldiv.addEventListener('click', makeRed);
    alldiv.removeEventListener('click', makeYellow);
}

function makeRed() {
    trafficLightA3.style.background = ('red');
    trafficLightAl.style.background = ('black');
    trafficLightA2.style.background = ('black');
    alldiv.addEventListener('click', makeGreen);
    alldiv.removeEventListener('click', makeRed);
   
}


