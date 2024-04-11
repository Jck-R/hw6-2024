var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// Initialize the video element and turn off autoplay and turn off looping.
	video = document.querySelector(".video");
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log("Video current time is " + video.currentTime);
	} else {
		video.currentTime += 10;
		console.log("Video current time is " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("The current value is " + this.value / 100);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing to Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing to Original");
	video.classList.remove("oldSchool");
});