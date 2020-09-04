var b1=document.querySelector("#p1")

var p1Display=document.querySelector("#p1Display")
var p1score=0;

var gameover=false;
var winningScore=5;
b1.addEventListener("click",function(){
    if(!gameover){
    p1score++;
    if(p1score===winningScore){
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
            gameover=true
        }
        p2Display.textContent=p2score
        }
    
    
})