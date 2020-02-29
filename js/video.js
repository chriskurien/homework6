var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	console.log("Play Video")
	video.play();
	volDisplay = document.querySelector("#volume");
	volDisplay.innerHTML=video.volume*100+"%";
	video.playbackRate = 1;
} 

function pauseVid() { 
	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() { 
  	video.playbackRate *=0.8;
  	console.log("Speed is "+ video.playbackRate);

} 

function increaseSpeed() {
  	video.playbackRate *=1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime +60 >video.document){
		playVid();
		video.pause();
	}

	else{
		video.currentTime += 60;
	}

	console.log("Current location is "+ video.currentTime);

} 

function gray() { 
	console.log("In grayscale")
	video.classList.add("grayscale")
}

function color() {
	console.log("In color") 
	video.classList.remove("grayscale")
}

function mute() { 
	var muteID = document.querySelector("#mute");

	if(video.muted){
		muteID.innerHTML = "Mute";
		video.muted = false;
		console.log("Unmuted")
	}
	else{
		muteID.innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted")
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume;	
	document.querySelector("#volume").innerHTML = volume*100 + "%";
	console.log("Volume is " + volume*100)
}


      
