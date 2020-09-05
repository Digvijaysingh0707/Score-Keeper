var b1=document.querySelector("#p1")

var p1Display=document.querySelector("#p1Display")
var reset= document.getElementById("reset")
var numInput=document.querySelector("input")
var winningScoreDisplay=document.querySelector("p span")
var p1score=0;
var gameover=false;
var winningScore=5;
b1.addEventListener("click",function(){
    if(!gameover){
    p1score++;
    if(p1score===winningScore){
        p1Display.classList.add("winner")
        gameover=true
    }
    p1Display.textContent=p1score
    }
    
    
})

var b2=document.querySelector("#p2")
var p2Display=document.querySelector("#p2Display")
var p2score=0;
b2.addEventListener("click",function(){
    if(!gameover){
        p2score++;
        if(p2score===winningScore){
            p2Display.classList.add("winner")
            gameover=true
        }
        p2Display.textContent=p2score
        }
    
    
})

reset.addEventListener("click",function(){
   reset()
})
function reset(){
    p1score=p2score=0
    p1Display.textContent=p2Display.textContent=0
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
    gameover=false
}

numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent= numInput.value
    winningScore=Number(numInput.value)
    reset()

})
