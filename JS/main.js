const WIDTH = 800;
const HEIGHT = 556;
let clicks = 0;
let founded = false;

let target = {
    x: getRandom(WIDTH),
    y: getRandom(HEIGHT)
}

let $map = document.getElementById('realmap'); //$element html
let $distance = document.getElementById('distance');

$map.addEventListener('click', function(e) {
    if (!founded) {
        clicks++;
        let distance = getDistance(e, target);
        let hint = getDistancerHint(distance);
        $distance.innerHTML = `<h2>${hint}</h2>`;
        if (distance < 20) {
            let trix = document.getElementById('trixi');
            trix.src = 'IMGS/happy.png';
            let subtitle = document.getElementById('subtitle-map');
            subtitle.innerHTML = "";
            trix.src = 'IMGS/happy.png';
            $distance.innerHTML = `<h2>We did it! We have found the treasure in ${clicks} clicks!!</h2><img class="found-it" src="IMGS/goal.png"/>`;
            createButtonPlayAgain();
            founded = true;
        }
    }
});