function getRandom(max) { //let getRandom = size => {} //ES6
    return Math.floor(Math.random() * max); //Get number between 0 - max. random * max is a decimal, because of that we need floor function.
}

//distance between click and "treasure"
function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

function getDistancerHint(distance) {
    if (distance < 30) {
        return "So close!";
    } else if (distance < 45) {
        return "Really hot";
    } else if (distance < 65) {
        return "Hot";
    } else if (distance < 200) {
        return "Warm...";
    } else if (distance < 300) {
        return "Cold";
    } else if (distance < 400) {
        return "Really cold...";
    } else {
        return "Hello...? HELLO?! Where are you?!";
    }
}


function createButtonPlayAgain() {
    var button = document.createElement('button');
    button.classList.add('btn-win');
    button.innerHTML = 'Play again';
    button.onclick = function() {
        reload();
    };
    document.getElementById('res-div').appendChild(button);
}

function reload() {
    location.reload();
}