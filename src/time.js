 var x = document.getElementById("myAudio"); 
 
 function playAudio() { 
   audio.play(); 
 } 
 
 function pauseAudio() { 
   audio.pause(); 
 } 
const audio = document.querySelector("#myAudio")
let current = "";    
audio.loop = true;
function getTime() {
    return new Date().toLocaleString("en-US", {hour: "numeric", hour12: true}).replace(" ", "");
}
update();
new Date().toLocaleTimeString(navigator.language, {hour: "2-digit", minute: "2-digit"})
setInterval(()=>{
    update();
}, 30000);
function update() {
    const now = getTime();
    if(now != current) {
        audio.src = "~\\Animal Crossing (GameCube) - Original Soundtrack - "+now+".mp3";
        current = now;
        audio.play();
    }
}