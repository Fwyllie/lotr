(function() {
	"use strict";
	console.log("SEAF Fired");

//FILM VIDEO PLAYER
	var video, trailer1, trailer2, toggleButton, restartButton, trailer1, trailer2, player, volumeslider;

	function loadP() {
		console.log("From LoadP");
		video = document.querySelector("#mainVideo");
		console.log(video.currentSrc);
		var toggleButton = document.querySelector("#playButton");
		toggleButton.addEventListener("click", togglePlay, false);
		var restartButton = document.querySelector("#restart");
		restartButton.addEventListener("click", startover, false);
		var trailer1 = document.querySelector("#trailer1");
		var trailer2 = document.querySelector("#trailer2");
		trailer1.addEventListener("click", swapMov, false);
		trailer2.addEventListener("click", swapMov, false);
		var volumeslider = document.querySelector("#volumeslider");
		volumeslider.addEventListener("change", setvolume, false);
		volumeslider.addEventListener("input", setvolume, false);
	}

	function togglePlay(e) {
		console.log("From togglePlay");
		if(video.paused){
			video.play();
			e.currentTarget.src = "images/pause.png";
		
		}else{
			video.pause();
			e.currentTarget.src = "images/play.png";
		}
	}
	
	function startover(){
		console.log("From Startover");
		video.currentTime = 0;
	}
	
	function swapMov() {
		if(event.currentTarget.id==="trailer1") {
			video.src="videos/final-30sec.mp4";
		}else{
			video.src="videos/final-15sec.mp4";
		}
		console.log(event.currentTarget.id);
	}
	
	function setvolume(){
		video.volume = this.value / 100;
	}
	
	
	window.addEventListener("load", loadP, false);
	
})();