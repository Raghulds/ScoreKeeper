var first = document.getElementById("1st");
var second = document.getElementById("2nd");
var limit = document.getElementById("limit");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var res = document.getElementById("res");
var numin = document.querySelector("input"); 
var result = document.getElementById("result");
var firstscore = 0;
var secscore = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener("click",function(){
	if(!gameOver)
	{   firstscore++;
		if(firstscore === winningScore)
		 {  first.classList.add("winner");
		    result.textContent = "Player One wins!!!!!";
		 	gameOver = true;}
	    first.textContent = firstscore;}
    }); 

p2.addEventListener("click",function(){
	if(!gameOver)
	{   secscore++;
		if (secscore === winningScore)
		 {  second.classList.add("winner");
		    result.textContent = "Player Two wins!!!!!";
		 	gameOver = true;}
	second.textContent = secscore;}
    });

res.addEventListener("click",function(){
	reset();
    });
function reset(){
    firstscore = 0;
	secscore = 0;
	first.textContent = 0;
	second.textContent = 0;
    gameOver = false;
    first.classList.remove("winner");
    second.classList.remove("winner");
}

numin.addEventListener("change",function(){
    limit.textContent = numin.value;
    winningScore = Number(numin.value);
    reset();
});