myTime = window.prompt("Enter your time in milliseconds");
window.setTimeout(myFunction,myTime);
function myFunction() {
mySeconds = myTime/1000
 alert(mySeconds + " seconds has passed")
 const music = new Audio('amt-elecbell.WAV');
 music.play();
 music.loop =true;
 music.playbackRate = 2;
 music.pause();
}
