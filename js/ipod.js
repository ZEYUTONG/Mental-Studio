// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "Cause I'm A Man"];
var volLevels = [];
var lightIndex = 2;
var switchplay = 0;
var d = 0;
var a = 6;
var time = 0;

function init() {
	for (i=0; i<6; i++) {
  		volLevels[i] = document.getElementById("vl"+i);
	}
	for (i=0; i<3; i++) {
		volLevels[i].classList.add("on");
	}
	player = setInterval(tracktime, 1000);
	setInterval(secondsToMs, 1000);
	move();
};

function volUp() {
	lightIndex++;
    if (lightIndex > 5) lightIndex = 5;
 	volLevels[lightIndex].classList.add("on"); 
}

function volDown() {
 	volLevels[lightIndex].classList.remove("on");
 	if (lightIndex <= -1) lightIndex = 0;
    lightIndex--;
}

function switchPlay() {
	if (switchplay == 1){
		move();
		player = setInterval(tracktime, 1000);
		document.getElementById("switchPlay").innerHTML = '<i class="material-icons btn btn-default tm-normal-btn tm-blue-bordered-btn">pause</i></a>' ;
		switchplay = 0;
	}
	else if (switchplay == 0){
		move();
		clearInterval(player);
		document.getElementById("switchPlay").innerHTML = '<i class="material-icons btn btn-default tm-normal-btn tm-blue-bordered-btn">play_arrow</i></a>' ;
		switchplay = 1;
	}
}

function nextSong() {
	time = 0;
	document.getElementById('time-elapsed').innerHTML = secondsToMs(time);
	document.getElementById('player-bar').value = time;
	clearInterval(player);
	player = setInterval(tracktime, 1000);
	document.getElementById("switchPlay").innerHTML = '<i class="material-icons btn btn-default tm-normal-btn tm-blue-bordered-btn">pause</i></a>' ;
	switchplay = 0;
	play();
}

function prevSong() {
	time = 0;
	document.getElementById('time-elapsed').innerHTML = secondsToMs(time);
	document.getElementById('player-bar').value = time;
	clearInterval(player);
	player = setInterval(tracktime, 1000);
	document.getElementById("switchPlay").innerHTML = '<i class="material-icons btn btn-default tm-normal-btn tm-blue-bordered-btn">pause</i></a>' ;
	switchplay = 0;
	play();
}

function play(){
	if (a != 9){
			a = a + 1;
			document.getElementById("player-song-name").innerHTML = tracklist[a];
		}
		else if (a == 9) {
			a = a - 9;
			document.getElementById("player-song-name").innerHTML = tracklist[a];
    	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) +":"+`00${sec}`.slice(-2);
}

function tracktime() {
	if (time < 180){
		time++;
		document.getElementById('time-elapsed').innerHTML = secondsToMs(time);
	}
	else if (time >= 180) {
		time = 0;
		document.getElementById('time-elapsed').innerHTML = secondsToMs(time);
		play();
	}
	var button1 = document.getElementById("player-bar");
    button1.onclick = function(event){
    	time = Number(document.getElementById('player-bar').value);
    }
    document.getElementById('player-bar').value = time;
}

function move() {
	var button2 = document.getElementById("player-bar");
    button2.onclick = function(event){
    	time = Number(document.getElementById('player-bar').value);
    	document.getElementById('time-elapsed').innerHTML = secondsToMs(time);
    }
}


init();