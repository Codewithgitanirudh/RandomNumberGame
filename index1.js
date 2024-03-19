var hitrn;
var score = 0;
function makebubble(){
var clutter = "";
for(var i = 0; i<=150; i++ ){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panel2").innerHTML = clutter;
}
makebubble();

 runtimer = () => {
    var timer = 60;
  var timerint =  setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panel2").textContent = `GAME OVER`
        }
    }, 1000);
}
runtimer();
function getnewhit(){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hit").textContent = hitrn;
}
getnewhit();
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
increasescore();
document.querySelector("#panel2").addEventListener("click", function(e){
    var mn = Number(e.target.textContent);
    if(mn === hitrn){
        increasescore();
        getnewhit();
        makebubble();
    }

})