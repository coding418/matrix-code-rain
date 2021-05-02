vids = [
	"matrix-code-rain-v0.3-title-effect.mp4",
	"matrix-code-rain-v0.3-downpour-mode.mp4",
	"matrix-code-rain-v0.3-operator-mode.mp4",
	"matrix-code-rain-v0.3-pixel-mode.mp4",
	"matrix-code-rain-v0.3-webcam-mode.mp4",
]

titles = [
	"Downpour Mode v0.3",
	"Operator Mode v0.3",
	"Webcam/Pixel Mode v0.3",
]

function change_vid(idx){
	vsrc = document.getElementById("vidsrc");
	vsrc.src = "https://github.com/coding418/matrix-code-rain/blob/main/vid/" + vids[idx] + "?raw=true";
	document.getElementById("vid").load();
	document.getElementById("vid").play();
}